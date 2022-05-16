using Microsoft.AspNetCore.Mvc;
using database.Models;

namespace database.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SprzedawcaController : ControllerBase
    {
        private DataContext _context;
        public SprzedawcaController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var sprzedawcy = _context.Sprzedawca.ToList();
            return Ok(sprzedawcy);
        }

        [HttpPost]
        public IActionResult Create([FromBody] Sprzedawca sprzedawca)
        {
            _context.Sprzedawca.Add(sprzedawca);
            _context.SaveChanges();
            return Ok(sprzedawca);
        }

        [HttpPut("{id}")]
        public IActionResult Update([FromBody] Sprzedawca sprzedawcaUpdate, int id)
        {
            var sprzedawca = _context.Sprzedawca.Find(id);
            if (sprzedawca == null)
                return BadRequest();

            sprzedawca.imie = sprzedawcaUpdate.imie;
            sprzedawca.nazwisko = sprzedawcaUpdate.nazwisko;
            sprzedawca.numerfirmowy = sprzedawcaUpdate.numerfirmowy;

            _context.Sprzedawca.Update(sprzedawca);
            _context.SaveChanges();
            return Ok(sprzedawca);
        }

    }
}
