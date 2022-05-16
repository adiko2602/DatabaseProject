using Microsoft.AspNetCore.Mvc;
using database.Models;

namespace database.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class KlientController : ControllerBase
    {
        private DataContext _context;
        public KlientController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var klienci = _context.Klient.ToList();
            return Ok(klienci);
        }

        [HttpPost]
        public IActionResult Create([FromBody] Klient klient)
        {
            _context.Klient.Add(klient);
            _context.SaveChanges();
            return Ok(klient);
        }

        [HttpPut("{id}")]
        public IActionResult Update([FromBody] Klient klientUpdate, int id)
        {
            var klient = _context.Klient.Find(id);
            if (klient == null)
                return BadRequest();

            klient.imie = klientUpdate.imie;
            klient.nazwisko = klientUpdate.nazwisko;
            klient.kodpocztowy = klientUpdate.kodpocztowy;
            klient.miasto = klientUpdate.miasto;
            klient.ulica = klientUpdate.ulica;
            klient.numer = klientUpdate.numer;

            _context.Klient.Update(klient);
            _context.SaveChanges();
            return Ok(klient);
        }

    }
}