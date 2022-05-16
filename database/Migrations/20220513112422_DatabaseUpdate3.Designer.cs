﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using database.Data;

#nullable disable

namespace database.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20220513112422_DatabaseUpdate3")]
    partial class DatabaseUpdate3
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.5")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("database.Models.Klient", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("id"), 1L, 1);

                    b.Property<string>("imie")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("kodpocztowy")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("miasto")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("nazwisko")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("numer")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ulica")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("id");

                    b.ToTable("Klient");
                });

            modelBuilder.Entity("database.Models.Platnosc", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("id"), 1L, 1);

                    b.Property<string>("forma")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("id");

                    b.ToTable("Platnosc");
                });

            modelBuilder.Entity("database.Models.Pojazd", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("id"), 1L, 1);

                    b.Property<int>("cena")
                        .HasColumnType("int");

                    b.Property<string>("marka")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("model")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("pochodzenie")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("rodzaj")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("stanid")
                        .HasColumnType("int");

                    b.Property<string>("vin")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("wyposazenieid")
                        .HasColumnType("int");

                    b.HasKey("id");

                    b.HasIndex("stanid");

                    b.HasIndex("wyposazenieid");

                    b.ToTable("Pojazd");
                });

            modelBuilder.Entity("database.Models.Sprzedawca", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("id"), 1L, 1);

                    b.Property<string>("imie")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("nazwisko")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("numerfirmowy")
                        .HasColumnType("int");

                    b.HasKey("id");

                    b.ToTable("Sprzedawca");
                });

            modelBuilder.Entity("database.Models.Stan", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("id"), 1L, 1);

                    b.Property<bool>("uszkkaroseria")
                        .HasColumnType("bit");

                    b.Property<bool>("uszklakier")
                        .HasColumnType("bit");

                    b.Property<bool>("uszksilnik")
                        .HasColumnType("bit");

                    b.Property<bool>("uszkwnetrze")
                        .HasColumnType("bit");

                    b.Property<bool>("uszkzawieszenie")
                        .HasColumnType("bit");

                    b.Property<bool>("zarejestrownay")
                        .HasColumnType("bit");

                    b.HasKey("id");

                    b.ToTable("Stan");
                });

            modelBuilder.Entity("database.Models.Transakcja", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("id"), 1L, 1);

                    b.Property<DateTime>("data")
                        .HasColumnType("datetime2");

                    b.Property<string>("faktura")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("klientid")
                        .HasColumnType("int");

                    b.Property<int>("kwota")
                        .HasColumnType("int");

                    b.Property<int>("platnoscid")
                        .HasColumnType("int");

                    b.Property<int>("pojazdid")
                        .HasColumnType("int");

                    b.Property<int>("sprzedawca")
                        .HasColumnType("int");

                    b.HasKey("id");

                    b.HasIndex("klientid");

                    b.HasIndex("platnoscid");

                    b.HasIndex("pojazdid");

                    b.ToTable("Transakcja");
                });

            modelBuilder.Entity("database.Models.Wyposazenie", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("id"), 1L, 1);

                    b.Property<bool>("abs")
                        .HasColumnType("bit");

                    b.Property<bool>("czujnikipark")
                        .HasColumnType("bit");

                    b.Property<bool>("elekszyby")
                        .HasColumnType("bit");

                    b.Property<bool>("esp")
                        .HasColumnType("bit");

                    b.Property<bool>("grzanefotele")
                        .HasColumnType("bit");

                    b.Property<bool>("inne")
                        .HasColumnType("bit");

                    b.Property<bool>("klimatyzacja")
                        .HasColumnType("bit");

                    b.Property<bool>("skora")
                        .HasColumnType("bit");

                    b.Property<bool>("wspomaganiekier")
                        .HasColumnType("bit");

                    b.HasKey("id");

                    b.ToTable("Wyposazenie");
                });

            modelBuilder.Entity("database.Models.Pojazd", b =>
                {
                    b.HasOne("database.Models.Stan", "stan")
                        .WithMany()
                        .HasForeignKey("stanid")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("database.Models.Wyposazenie", "wyposazenie")
                        .WithMany()
                        .HasForeignKey("wyposazenieid")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("stan");

                    b.Navigation("wyposazenie");
                });

            modelBuilder.Entity("database.Models.Transakcja", b =>
                {
                    b.HasOne("database.Models.Klient", "klient")
                        .WithMany()
                        .HasForeignKey("klientid")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("database.Models.Platnosc", "platnosc")
                        .WithMany()
                        .HasForeignKey("platnoscid")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("database.Models.Pojazd", "pojazd")
                        .WithMany()
                        .HasForeignKey("pojazdid")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("klient");

                    b.Navigation("platnosc");

                    b.Navigation("pojazd");
                });
#pragma warning restore 612, 618
        }
    }
}
