using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace database.Migrations
{
    public partial class UpdateDatabase6 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "faktura",
                table: "Transakcja");

            migrationBuilder.DropColumn(
                name: "kwota",
                table: "Transakcja");

            migrationBuilder.RenameColumn(
                name: "sprzedawca",
                table: "Transakcja",
                newName: "sprzedawcaid");

            migrationBuilder.AddColumn<int>(
                name: "kwota",
                table: "Platnosc",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Transakcja_sprzedawcaid",
                table: "Transakcja",
                column: "sprzedawcaid");

            migrationBuilder.AddForeignKey(
                name: "FK_Transakcja_Sprzedawca_sprzedawcaid",
                table: "Transakcja",
                column: "sprzedawcaid",
                principalTable: "Sprzedawca",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Transakcja_Sprzedawca_sprzedawcaid",
                table: "Transakcja");

            migrationBuilder.DropIndex(
                name: "IX_Transakcja_sprzedawcaid",
                table: "Transakcja");

            migrationBuilder.DropColumn(
                name: "kwota",
                table: "Platnosc");

            migrationBuilder.RenameColumn(
                name: "sprzedawcaid",
                table: "Transakcja",
                newName: "sprzedawca");

            migrationBuilder.AddColumn<string>(
                name: "faktura",
                table: "Transakcja",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "kwota",
                table: "Transakcja",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
