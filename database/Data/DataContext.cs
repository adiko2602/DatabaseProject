using Microsoft.EntityFrameworkCore;
using database.Models;

namespace database.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Klient> Klient { get; set; }
        public DbSet<Platnosc> Platnosc { get; set; }
        public DbSet<Pojazd> Pojazd { get; set; }
        public DbSet<Sprzedawca> Sprzedawca { get; set; }
        public DbSet<Stan> Stan { get; set; }
        public DbSet<Transakcja> Transakcja { get; set; }
        public DbSet<Wyposazenie> Wyposazenie { get; set; }
        public DbSet<Paliwo> Paliwo { get; set;  }
        public DbSet<Rodzaj> Rodzaj { get; set; }
    }
}
