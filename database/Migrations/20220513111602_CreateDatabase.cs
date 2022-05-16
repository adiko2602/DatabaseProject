using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace database.Migrations
{
    public partial class CreateDatabase : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Klient",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    imie = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    nazwisko = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    kodpocztowy = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    miasto = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ulica = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    numer = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Klient", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Platnosc",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    forma = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Platnosc", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Pojazd",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    marka = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    model = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    pochodzenie = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    vin = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    cena = table.Column<int>(type: "int", nullable: false),
                    stanid = table.Column<int>(type: "int", nullable: false),
                    wyposazenieid = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pojazd", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Sprzedawca",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    imie = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    nazwisko = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    numerfirmowy = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Sprzedawca", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Stan",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    uszklakier = table.Column<bool>(type: "bit", nullable: false),
                    uszkkaroseria = table.Column<bool>(type: "bit", nullable: false),
                    uszkzawieszenie = table.Column<bool>(type: "bit", nullable: false),
                    uszksilnik = table.Column<bool>(type: "bit", nullable: false),
                    uszkwnetrze = table.Column<bool>(type: "bit", nullable: false),
                    zarejestrownay = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Stan", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Transakcja",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    klientid = table.Column<int>(type: "int", nullable: false),
                    pojazdid = table.Column<int>(type: "int", nullable: false),
                    sprzedawcaid = table.Column<int>(type: "int", nullable: false),
                    data = table.Column<DateTime>(type: "datetime2", nullable: false),
                    kwota = table.Column<int>(type: "int", nullable: false),
                    platnoscid = table.Column<int>(type: "int", nullable: false),
                    faktura = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Transakcja", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Wyposazenie",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    abs = table.Column<bool>(type: "bit", nullable: false),
                    esp = table.Column<bool>(type: "bit", nullable: false),
                    klimatyzacja = table.Column<bool>(type: "bit", nullable: false),
                    elekszyby = table.Column<bool>(type: "bit", nullable: false),
                    skora = table.Column<bool>(type: "bit", nullable: false),
                    grzanefotele = table.Column<bool>(type: "bit", nullable: false),
                    wspomaganiekier = table.Column<bool>(type: "bit", nullable: false),
                    czujnikipark = table.Column<bool>(type: "bit", nullable: false),
                    inne = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Wyposazenie", x => x.id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Klient");

            migrationBuilder.DropTable(
                name: "Platnosc");

            migrationBuilder.DropTable(
                name: "Pojazd");

            migrationBuilder.DropTable(
                name: "Sprzedawca");

            migrationBuilder.DropTable(
                name: "Stan");

            migrationBuilder.DropTable(
                name: "Transakcja");

            migrationBuilder.DropTable(
                name: "Wyposazenie");
        }
    }
}
