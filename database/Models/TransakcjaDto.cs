namespace database.Models
{
    public class TransakcjaDto
    {
        public int klientid { get; set; }
        public int pojazdid { get; set; }
        public int sprzedawcaid { get; set; }
        public Platnosc platnosc { get; set; }

    }
}
