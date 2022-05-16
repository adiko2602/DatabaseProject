using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace database.Migrations
{
    public partial class DatabaseUpdate1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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

            migrationBuilder.CreateIndex(
                name: "IX_Transakcja_klientidid",
                table: "Transakcja",
                column: "klientidid");

            migrationBuilder.CreateIndex(
                name: "IX_Transakcja_platnoscidid",
                table: "Transakcja",
                column: "platnoscidid");

            migrationBuilder.CreateIndex(
                name: "IX_Transakcja_pojazdidid",
                table: "Transakcja",
                column: "pojazdidid");

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

        protected override void Down(MigrationBuilder migrationBuilder)
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

            migrationBuilder.DropIndex(
                name: "IX_Transakcja_klientidid",
                table: "Transakcja");

            migrationBuilder.DropIndex(
                name: "IX_Transakcja_platnoscidid",
                table: "Transakcja");

            migrationBuilder.DropIndex(
                name: "IX_Transakcja_pojazdidid",
                table: "Transakcja");

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
        }
    }
}
