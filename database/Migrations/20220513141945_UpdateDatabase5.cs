using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace database.Migrations
{
    public partial class UpdateDatabase5 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "rodzaj",
                table: "Pojazd");

            migrationBuilder.AddColumn<int>(
                name: "paliwoid",
                table: "Pojazd",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "rodzajid",
                table: "Pojazd",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "Paliwo",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    benzyna = table.Column<bool>(type: "bit", nullable: false),
                    elektryk = table.Column<bool>(type: "bit", nullable: false),
                    diesel = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Paliwo", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Rodzaj",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    kombi = table.Column<bool>(type: "bit", nullable: false),
                    sedan = table.Column<bool>(type: "bit", nullable: false),
                    hatchback = table.Column<bool>(type: "bit", nullable: false),
                    van = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Rodzaj", x => x.id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Pojazd_paliwoid",
                table: "Pojazd",
                column: "paliwoid");

            migrationBuilder.CreateIndex(
                name: "IX_Pojazd_rodzajid",
                table: "Pojazd",
                column: "rodzajid");

            migrationBuilder.AddForeignKey(
                name: "FK_Pojazd_Paliwo_paliwoid",
                table: "Pojazd",
                column: "paliwoid",
                principalTable: "Paliwo",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Pojazd_Rodzaj_rodzajid",
                table: "Pojazd",
                column: "rodzajid",
                principalTable: "Rodzaj",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Pojazd_Paliwo_paliwoid",
                table: "Pojazd");

            migrationBuilder.DropForeignKey(
                name: "FK_Pojazd_Rodzaj_rodzajid",
                table: "Pojazd");

            migrationBuilder.DropTable(
                name: "Paliwo");

            migrationBuilder.DropTable(
                name: "Rodzaj");

            migrationBuilder.DropIndex(
                name: "IX_Pojazd_paliwoid",
                table: "Pojazd");

            migrationBuilder.DropIndex(
                name: "IX_Pojazd_rodzajid",
                table: "Pojazd");

            migrationBuilder.DropColumn(
                name: "paliwoid",
                table: "Pojazd");

            migrationBuilder.DropColumn(
                name: "rodzajid",
                table: "Pojazd");

            migrationBuilder.AddColumn<string>(
                name: "rodzaj",
                table: "Pojazd",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
