namespace database.Models
{
    public class Klient
    {
        public int id { get; set; }
        public string imie { get; set; }    
        public string nazwisko {  get ; set; }
        public string kodpocztowy { get; set; }
        public string miasto { get; set; }
        public string ulica { get; set; }
        public string numer { get; set; }
    }
}
