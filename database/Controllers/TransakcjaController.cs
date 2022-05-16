using Microsoft.AspNetCore.Mvc;
using database.Models;

namespace database.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TransakcjaController : ControllerBase
    {
        private DataContext _context;
        public TransakcjaController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var transakcje = _context.Transakcja.Include("klient").Include("pojazd").Include("platnosc").Include("sprzedawca").ToList();
            return Ok(transakcje);
        }

        [HttpGet("{id}")]
        public IActionResult GetId(int id)
        {
            var transakcja = _context.Transakcja.Include("klient").Include("pojazd").Include("platnosc").Include("sprzedawca").Where(t => t.id == id);
            if (transakcja == null)
                return BadRequest();

            return Ok(transakcja);
        }

        [HttpPost]
        public IActionResult Create([FromBody] TransakcjaDto transakcjaDto)
        {
            var pojazd = _context.Pojazd.Find(transakcjaDto.pojazdid);
            if (pojazd == null)
                return BadRequest();

            var klient = _context.Klient.Find(transakcjaDto.klientid);
            if (klient == null)
                return BadRequest();

            var sprzedawca = _context.Sprzedawca.Find(transakcjaDto.sprzedawcaid);
            if (sprzedawca == null)
                return BadRequest();

            var transakcja = new Transakcja()
            {
                klient = klient,
                pojazd = pojazd,
                sprzedawca = sprzedawca,
                data = DateTime.Now,
                platnosc = transakcjaDto.platnosc
            };

            pojazd.sprzedany = true;

            _context.Pojazd.Update(pojazd);
            _context.SaveChanges();
            _context.Transakcja.Add(transakcja);
            _context.SaveChanges();

            return Ok(transakcja);
        }

    }
}