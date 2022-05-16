using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace database.Migrations
{
    public partial class DatabaseUpdate2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Transakcja_Klient_klientidid",
                table: "Transakcja");

            migrationBuilder.DropForeignKey(
                name: "FK_Transakcja_Platnosc_platnoscidid",
                table: "Transakcja");

            migrationBuilder.DropForeignKey(
                name: "FK_Transakcja_Pojazd_pojazdidid",
                table: "Transakcja");

            migrationBuilder.RenameColumn(
                name: "sprzedawcaid",
                table: "Transakcja",
                newName: "sprzedawca");

            migrationBuilder.RenameColumn(
                name: "pojazdidid",
                table: "Transakcja",
                newName: "pojazdid");

            migrationBuilder.RenameColumn(
                name: "platnoscidid",
                table: "Transakcja",
                newName: "platnoscid");

            migrationBuilder.RenameColumn(
                name: "klientidid",
                table: "Transakcja",
                newName: "klientid");

            migrationBuilder.RenameIndex(
                name: "IX_Transakcja_pojazdidid",
                table: "Transakcja",
                newName: "IX_Transakcja_pojazdid");

            migrationBuilder.RenameIndex(
                name: "IX_Transakcja_platnoscidid",
                table: "Transakcja",
                newName: "IX_Transakcja_platnoscid");

            migrationBuilder.RenameIndex(
                name: "IX_Transakcja_klientidid",
                table: "Transakcja",
                newName: "IX_Transakcja_klientid");

            migrationBuilder.CreateIndex(
                name: "IX_Pojazd_stanid",
                table: "Pojazd",
                column: "stanid");

            migrationBuilder.CreateIndex(
                name: "IX_Pojazd_wyposazenieid",
                table: "Pojazd",
                column: "wyposazenieid");

            migrationBuilder.AddForeignKey(
                name: "FK_Pojazd_Stan_stanid",
                table: "Pojazd",
                column: "stanid",
                principalTable: "Stan",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Pojazd_Wyposazenie_wyposazenieid",
                table: "Pojazd",
                column: "wyposazenieid",
                principalTable: "Wyposazenie",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Transakcja_Klient_klientid",
                table: "Transakcja",
                column: "klientid",
                principalTable: "Klient",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Transakcja_Platnosc_platnoscid",
                table: "Transakcja",
                column: "platnoscid",
                principalTable: "Platnosc",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Transakcja_Pojazd_pojazdid",
                table: "Transakcja",
                column: "pojazdid",
                principalTable: "Pojazd",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Pojazd_Stan_stanid",
                table: "Pojazd");

            migrationBuilder.DropForeignKey(
                name: "FK_Pojazd_Wyposazenie_wyposazenieid",
                table: "Pojazd");

            migrationBuilder.DropForeignKey(
                name: "FK_Transakcja_Klient_klientid",
                table: "Transakcja");

            migrationBuilder.DropForeignKey(
                name: "FK_Transakcja_Platnosc_platnoscid",
                table: "Transakcja");

            migrationBuilder.DropForeignKey(
                name: "FK_Transakcja_Pojazd_pojazdid",
                table: "Transakcja");

            migrationBuilder.DropIndex(
                name: "IX_Pojazd_stanid",
                table: "Pojazd");

            migrationBuilder.DropIndex(
                name: "IX_Pojazd_wyposazenieid",
                table: "Pojazd");

            migrationBuilder.RenameColumn(
                name: "sprzedawca",
                table: "Transakcja",
                newName: "sprzedawcaid");

            migrationBuilder.RenameColumn(
                name: "pojazdid",
                table: "Transakcja",
                newName: "pojazdidid");

            migrationBuilder.RenameColumn(
                name: "platnoscid",
                table: "Transakcja",
                newName: "platnoscidid");

            migrationBuilder.RenameColumn(
                name: "klientid",
                table: "Transakcja",
                newName: "klientidid");

            migrationBuilder.RenameIndex(
                name: "IX_Transakcja_pojazdid",
                table: "Transakcja",
                newName: "IX_Transakcja_pojazdidid");

            migrationBuilder.RenameIndex(
                name: "IX_Transakcja_platnoscid",
                table: "Transakcja",
                newName: "IX_Transakcja_platnoscidid");

            migrationBuilder.RenameIndex(
                name: "IX_Transakcja_klientid",
                table: "Transakcja",
                newName: "IX_Transakcja_klientidid");

            migrationBuilder.AddForeignKey(
                name: "FK_Transakcja_Klient_klientidid",
                table: "Transakcja",
                column: "klientidid",
                principalTable: "Klient",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Transakcja_Platnosc_platnoscidid",
                table: "Transakcja",
                column: "platnoscidid",
                principalTable: "Platnosc",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Transakcja_Pojazd_pojazdidid",
                table: "Transakcja",
                column: "pojazdidid",
                principalTable: "Pojazd",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
