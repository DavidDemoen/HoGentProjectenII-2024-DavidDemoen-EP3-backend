const { Manufacturer } = require("../models");

const manufacturers = [
    {
      "id": 1,
      "name": "Arturia",
      "email": "arturia@b2b.io",
      "phone": "+32 9 123 45 67",
      "vat": "BE0123456789",
      "manufacturerAddressId": 1
    },
    {
      "id": 2,
      "name": "Korg",
      "email": "korg@b2b.io",
      "phone": "+81 3 1234 5678",
      "vat": "JP0123456789",
      "manufacturerAddressId": 1
    },
    {
      "id": 3,
      "name": "Yamaha",
      "email": "yamaha@b2b.io",
      "phone": "+81 6 1234 5678",
      "vat": "JP0987654321",
      "manufacturerAddressId": 1
    },
    {
      "id": 4,
      "name": "Roland",
      "email": "roland@b2b.io",
      "phone": "+81 3 8765 4321",
      "vat": "JP1122334455",
      "manufacturerAddressId": 3
    },
    {
      "id": 5,
      "name": "Moog",
      "email": "moog@b2b.io",
      "phone": "+1 828 123 4567",
      "vat": "US0123456789",
      "manufacturerAddressId": 1
    },
    {
      "id": 6,
      "name": "Novation",
      "email": "novation@b2b.io",
      "phone": "+44 20 1234 5678",
      "vat": "GB0123456789",
      "manufacturerAddressId": 1
    },
    {
      "id": 7,
      "name": "Ableton",
      "email": "ableton@b2b.io",
      "phone": "+49 30 123456",
      "vat": "DE0123456789",
      "manufacturerAddressId": 1
    },
    {
      "id": 8,
      "name": "Elektron",
      "email": "elektron@b2b.io",
      "phone": "+46 31 123 456",
      "vat": "SE0123456789",
      "manufacturerAddressId": 1
    },
    {
      "id": 9,
      "name": "Native Instruments",
      "email": "native@b2b.io",
      "phone": "+49 30 654321",
      "vat": "DE9876543210",
      "manufacturerAddressId": 1
    },
    {
      "id": 10,
      "name": "Focusrite",
      "email": "focusrite@b2b.io",
      "phone": "+44 14 1234 5678",
      "vat": "GB9876543210",
      "manufacturerAddressId": 1
    },
    {
      "id": 11,
      "name": "Presonus",
      "email": "presonus@b2b.io",
      "phone": "+1 225 123 4567",
      "vat": "US0987654321",
      "manufacturerAddressId": 1
    },
    {
      "id": 12,
      "name": "M-Audio",
      "email": "maudio@b2b.io",
      "phone": "+1 401 123 4567",
      "vat": "US1122334455",
      "manufacturerAddressId": 1
    },
    {
      "id": 13,
      "name": "Behringer",
      "email": "behringer@b2b.io",
      "phone": "+49 2151 123456",
      "vat": "DE1234567890",
      "manufacturerAddressId": 1
    },
    {
      "id": 14,
      "name": "TC Electronic",
      "email": "tc@b2b.io",
      "phone": "+45 87 123 456",
      "vat": "DK0123456789",
      "manufacturerAddressId": 1
    },
    {
      "id": 15,
      "name": "AKG",
      "email": "akg@b2b.io",
      "phone": "+43 1 1234567",
      "vat": "AT0123456789",
      "manufacturerAddressId": 1
    },
    {
      "id": 16,
      "name": "Shure",
      "email": "shure@b2b.io",
      "phone": "+1 847 123 4567",
      "vat": "US2233445566",
      "manufacturerAddressId": 1
    },
    {
      "id": 17,
      "name": "Sennheiser",
      "email": "sennheiser@b2b.io",
      "phone": "+49 5130 123456",
      "vat": "DE2233445566",
      "manufacturerAddressId": 1
    },
    {
      "id": 18,
      "name": "Alesis",
      "email": "alesis@b2b.io",
      "phone": "+1 401 654 3210",
      "vat": "US3344556677",
      "manufacturerAddressId": 1
    },
    {
      "id": 19,
      "name": "Casio",
      "email": "casio@b2b.io",
      "phone": "+81 3 1234 5678",
      "vat": "JP3344556677",
      "manufacturerAddressId": 1
    },
    {
      "id": 20,
      "name": "Kurzweil",
      "email": "kurzweil@b2b.io",
      "phone": "+1 617 123 4567",
      "vat": "US4455667788",
      "manufacturerAddressId": 1
    }
  ]
  

const seedManufacturers = () => Manufacturer.bulkCreate(manufacturers);

module.exports = { seedManufacturers };
