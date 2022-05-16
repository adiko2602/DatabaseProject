namespace database.Models
{
    public class Pojazd
    {
        public int id { get; set; }
        public string marka { get; set; }
        public string model { get; set; }
        public string pochodzenie { get; set; }
        public string vin { get; set; }
        public int cena { get; set; }
        public Stan stan { get; set; }
        public Wyposazenie wyposazenie { get; set; }
        public Rodzaj rodzaj { get; set; }
        public Paliwo paliwo { get; set; }
        public bool sprzedany { get; set; }
    }
}
