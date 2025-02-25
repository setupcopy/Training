﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using MultipeLanguage.DataBase;

namespace MultipeLanguage.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20220113104722_initialDatabase")]
    partial class initialDatabase
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 64)
                .HasAnnotation("ProductVersion", "5.0.13");

            modelBuilder.Entity("MultipeLanguage.Models.Setting", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("FieldName")
                        .HasColumnType("longtext");

                    b.Property<string>("FieldValue")
                        .HasColumnType("longtext");

                    b.Property<int>("Language")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("Settings");
                });
#pragma warning restore 612, 618
        }
    }
}
