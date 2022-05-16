using Microsoft.AspNetCore.Mvc;
using database.Models;

namespace database.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PojazdController : Controller
    {
        private DataContext _context;
        public PojazdController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var pojazdy = _context.Pojazd
                                .Include("stan")
                                .Include("wyposazenie")
                                .Include("paliwo")
                                .Include("rodzaj").ToList();
            return Ok(pojazdy);
        }

        [HttpGet("{id}")]
        public IActionResult GetId(int id)
        {
            var pojazd = _context.Pojazd
                                .Include("stan")
                                .Include("wyposazenie")
                                .Include("paliwo")
                                .Include("rodzaj")
                                .Where(p => p.id == id);

            return Ok(pojazd);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var pojazd = _context.Pojazd.Find(id);
            if (pojazd == null)
                return Ok();
            _context.Pojazd.Remove(pojazd);
            _context.SaveChanges();
            return Ok();
        }

/*        [HttpPost("Szukaj")]
        public IActionResult Create([FromBody] var szukaj)
        {
            _context.Pojazd.Add(pojazd);
            _context.SaveChanges();
            return Ok(pojazd);
        }*/


        [HttpPost]
        public IActionResult Create([FromBody] Pojazd pojazd)
        {
            _context.Pojazd.Add(pojazd);
            _context.SaveChanges();
            return Ok(pojazd);
        }
        /*                    public int id { get; set; }
                public string marka { get; set; }
                public string model { get; set; }
                public string pochodzenie { get; set; }
                public string vin { get; set; }
                public string rodzaj { get; set; }
                public int cena { get; set; }
                public Stan stan { get; set; }
                public Wyposazenie wyposazenie { get; set; }*/
    }
}

