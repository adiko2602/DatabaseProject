namespace database.Models
{
    public class Transakcja
    {
        public int id { get; set; }
        public Klient klient { get; set; }
        public Pojazd pojazd { get; set; }
        public Sprzedawca sprzedawca { get; set; }
        public DateTime data { get; set; }
        public Platnosc platnosc { get; set; }
    }
}
