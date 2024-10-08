const { Product } = require("../models");

const products = [
  {
    id: 1,
    referenceId: "B2B-PROD-0001",
    name: "Arturia Minilab MKII",
    description: "25-key MIDI controller",
    currentUnitPrice: 99.99,
    currentProductDiscount: 0.0,
    manufacturerId: 1,
    productCategoryId: "B2B-PC-0012",
  },
  {
    id: 2,
    referenceId: "B2B-PROD-0002",
    name: "Arturia Keystep",
    description: "32-key MIDI controller",
    currentUnitPrice: 119.99,
    currentProductDiscount: 0.0,
    manufacturerId: 1,
    productCategoryId: "B2B-PC-0012",
  },
  {
    id: 3,
    referenceId: "B2B-PROD-0003",
    name: "Arturia Microbrute",
    description: "Analog synthesizer",
    currentUnitPrice: 299.99,
    currentProductDiscount: 0.0,
    manufacturerId: 1,
    productCategoryId: "B2B-PC-0012",
  },
  {
    id: 4,
    referenceId: "B2B-PROD-0004",
    name: "Arturia Drumbrute",
    description: "Analog drum machine",
    currentUnitPrice: 449.99,
    currentProductDiscount: 0.0,
    manufacturerId: 1,
    productCategoryId: "B2B-PC-0012",
  },
  {
    id: 5,
    referenceId: "B2B-PROD-0005",
    name: "Arturia Matrixbrute",
    description: "Analog matrix synthesizer",
    currentUnitPrice: 1999.99,
    currentProductDiscount: 0.0,
    manufacturerId: 1,
    productCategoryId: "B2B-PC-0012",
  },
  {
    id: 6,
    referenceId: "B2B-PROD-0006",
    name: "Korg Minilogue",
    description: "4-voice polyphonic analog synthesizer",
    currentUnitPrice: 599.99,
    currentProductDiscount: 0.0,
    manufacturerId: 2,
    productCategoryId: "B2B-PC-0012",
  },
  {
    id: 7,
    referenceId: "B2B-PROD-0007",
    name: "Korg Volca Beats",
    description: "Analog rhythm machine",
    currentUnitPrice: 149.99,
    currentProductDiscount: 0.0,
    manufacturerId: 2,
    productCategoryId: "B2B-PC-0012",
  },
  {
    id: 8,
    referenceId: "B2B-PROD-0008",
    name: "Korg Monologue",
    description: "Monophonic analog synthesizer",
    currentUnitPrice: 299.99,
    currentProductDiscount: 0.0,
    manufacturerId: 2,
    productCategoryId: "B2B-PC-0012",
  },
  {
    id: 9,
    referenceId: "B2B-PROD-0009",
    name: "Korg MS-20 Mini",
    description: "Analog synthesizer",
    currentUnitPrice: 449.99,
    currentProductDiscount: 0.0,
    manufacturerId: 2,
    productCategoryId: "B2B-PC-0012",
  },
  {
    id: 10,
    referenceId: "B2B-PROD-0010",
    name: "Korg Prologue",
    description: "16-voice polyphonic analog synthesizer",
    currentUnitPrice: 1499.99,
    currentProductDiscount: 0.0,
    manufacturerId: 2,
    productCategoryId: "B2B-PC-0012",
  },
  {
    id: 11,
    referenceId: "B2B-PROD-0011",
    name: "Yamaha PSR-E373",
    description: "Portable keyboard",
    currentUnitPrice: 199.99,
    currentProductDiscount: 0.0,
    manufacturerId: 3,
    productCategoryId: "B2B-PC-0011",
  },
  {
    id: 12,
    referenceId: "B2B-PROD-0012",
    name: "Yamaha P-45",
    description: "Digital piano",
    currentUnitPrice: 499.99,
    currentProductDiscount: 0.0,
    manufacturerId: 3,
    productCategoryId: "B2B-PC-0013",
  },
  {
    id: 13,
    referenceId: "B2B-PROD-0013",
    name: "Yamaha DXR10",
    description: "Powered speaker",
    currentUnitPrice: 599.99,
    currentProductDiscount: 0.0,
    manufacturerId: 3,
    productCategoryId: "B2B-PC-0036",
  },
  {
    id: 14,
    referenceId: "B2B-PROD-0014",
    name: "Yamaha HS8",
    description: "Studio monitor",
    currentUnitPrice: 399.99,
    currentProductDiscount: 0.0,
    manufacturerId: 3,
    productCategoryId: "B2B-PC-0021",
  },
  {
    id: 15,
    referenceId: "B2B-PROD-0015",
    name: "Yamaha MG10XU",
    description: "Mixing console",
    currentUnitPrice: 229.99,
    currentProductDiscount: 0.0,
    manufacturerId: 3,
    productCategoryId: "B2B-PC-0024",
  },
  {
    id: 16,
    referenceId: "B2B-PROD-0016",
    name: "Roland TR-8S",
    description: "Rhythm performer",
    currentUnitPrice: 699.99,
    currentProductDiscount: 0.0,
    manufacturerId: 4,
    productCategoryId: "B2B-PC-0012",
  },
  {
    id: 17,
    referenceId: "B2B-PROD-0017",
    name: "Roland TD-17KVX",
    description: "V-Drums electronic drum kit",
    currentUnitPrice: 1599.99,
    currentProductDiscount: 0.0,
    manufacturerId: 4,
    productCategoryId: "B2B-PC-0010",
  },
  {
    id: 18,
    referenceId: "B2B-PROD-0018",
    name: "Roland RD-2000",
    description: "Stage piano",
    currentUnitPrice: 2499.99,
    currentProductDiscount: 0.0,
    manufacturerId: 4,
    productCategoryId: "B2B-PC-0013",
  },
  {
    id: 19,
    referenceId: "B2B-PROD-0019",
    name: "Roland JU-06A",
    description: "Sound module",
    currentUnitPrice: 399.99,
    currentProductDiscount: 0.0,
    manufacturerId: 4,
    productCategoryId: "B2B-PC-0012",
  },
  {
    id: 20,
    referenceId: "B2B-PROD-0020",
    name: "Roland MX-1",
    description: "Performance mixer",
    currentUnitPrice: 599.99,
    currentProductDiscount: 0.0,
    manufacturerId: 4,
    productCategoryId: "B2B-PC-0024",
  },
  {
    id: 21,
    referenceId: "B2B-PROD-0021",
    name: "Moog Mother-32",
    description: "Semi-modular analog synthesizer",
    currentUnitPrice: 679.99,
    currentProductDiscount: 0.0,
    manufacturerId: 5,
    productCategoryId: "B2B-PC-0012",
  },
  {
    id: 22,
    referenceId: "B2B-PROD-0022",
    name: "Moog Subharmonicon",
    description: "Semi-modular polyrhythmic analog synthesizer",
    currentUnitPrice: 899.99,
    currentProductDiscount: 0.0,
    manufacturerId: 5,
    productCategoryId: "B2B-PC-0012",
  },
  {
    id: 23,
    referenceId: "B2B-PROD-0023",
    name: "Moog Grandmother",
    description: "Semi-modular analog synthesizer",
    currentUnitPrice: 999.99,
    currentProductDiscount: 0.0,
    manufacturerId: 5,
    productCategoryId: "B2B-PC-0012",
  },
  {
    id: 24,
    referenceId: "B2B-PROD-0024",
    name: "Moog Matriarch",
    description: "4-note paraphonic analog synthesizer",
    currentUnitPrice: 1999.99,
    currentProductDiscount: 0.0,
    manufacturerId: 5,
    productCategoryId: "B2B-PC-0012",
  },
  {
    id: 25,
    referenceId: "B2B-PROD-0025",
    name: "Moog Minimoog Model D",
    description: "Monophonic analog synthesizer",
    currentUnitPrice: 3499.99,
    currentProductDiscount: 0.0,
    manufacturerId: 5,
    productCategoryId: "B2B-PC-0012",
  },
  {
    id: 26,
    referenceId: "B2B-PROD-0026",
    name: "Novation Circuit Tracks",
    description: "Standalone groovebox",
    currentUnitPrice: 399.99,
    currentProductDiscount: 0.0,
    manufacturerId: 6,
    productCategoryId: "B2B-PC-0012",
  },
  {
    id: 27,
    referenceId: "B2B-PROD-0027",
    name: "Novation Launchpad X",
    description: "MIDI grid controller",
    currentUnitPrice: 199.99,
    currentProductDiscount: 0.0,
    manufacturerId: 6,
    productCategoryId: "B2B-PC-0012",
  },
  {
    id: 28,
    referenceId: "B2B-PROD-0028",
    name: "Novation Bass Station II",
    description: "Analog monosynth",
    currentUnitPrice: 429.99,
    currentProductDiscount: 0.0,
    manufacturerId: 6,
    productCategoryId: "B2B-PC-0012",
  },
  {
    id: 29,
    referenceId: "B2B-PROD-0029",
    name: "Novation Peak",
    description: "Polyphonic synthesizer",
    currentUnitPrice: 1299.99,
    currentProductDiscount: 0.0,
    manufacturerId: 6,
    productCategoryId: "B2B-PC-0012",
  },
  {
    id: 30,
    referenceId: "B2B-PROD-0030",
    name: "Novation Summit",
    description: "16-voice polyphonic synthesizer",
    currentUnitPrice: 2199.99,
    currentProductDiscount: 0.0,
    manufacturerId: 6,
    productCategoryId: "B2B-PC-0012",
  },
  {
    id: 31,
    referenceId: "B2B-PROD-0031",
    name: "Behringer DeepMind 12",
    description: "12-voice analog synthesizer",
    currentUnitPrice: 749.99,
    currentProductDiscount: 0.0,
    manufacturerId: 7,
    productCategoryId: "B2B-PC-0012",
  },
  {
    id: 32,
    referenceId: "B2B-PROD-0032",
    name: "Behringer Model D",
    description: "Monophonic analog synthesizer",
    currentUnitPrice: 329.99,
    currentProductDiscount: 0.0,
    manufacturerId: 7,
    productCategoryId: "B2B-PC-0012",
  },
  {
    id: 33,
    referenceId: "B2B-PROD-0033",
    name: "Behringer Neutron",
    description: "Semi-modular analog synthesizer",
    currentUnitPrice: 329.99,
    currentProductDiscount: 0.0,
    manufacturerId: 7,
    productCategoryId: "B2B-PC-0012",
  },
  {
    id: 34,
    referenceId: "B2B-PROD-0034",
    name: "Behringer Crave",
    description: "Analog synth and sequencer",
    currentUnitPrice: 229.99,
    currentProductDiscount: 0.0,
    manufacturerId: 7,
    productCategoryId: "B2B-PC-0012",
  },
  {
    id: 35,
    referenceId: "B2B-PROD-0035",
    name: "Behringer TD-3",
    description: "Analog bassline synthesizer",
    currentUnitPrice: 149.99,
    currentProductDiscount: 0.0,
    manufacturerId: 7,
    productCategoryId: "B2B-PC-0012",
  },
  {
    id: 36,
    referenceId: "B2B-PROD-0036",
    name: "Akai MPC Live II",
    description: "Standalone music production center",
    currentUnitPrice: 1199.99,
    currentProductDiscount: 0.0,
    manufacturerId: 8,
    productCategoryId: "B2B-PC-0012",
  },
  {
    id: 37,
    referenceId: "B2B-PROD-0037",
    name: "Akai MPK Mini MK3",
    description: "25-key MIDI controller",
    currentUnitPrice: 119.99,
    currentProductDiscount: 0.0,
    manufacturerId: 8,
    productCategoryId: "B2B-PC-0012",
  },
  {
    id: 38,
    referenceId: "B2B-PROD-0038",
    name: "Akai Force",
    description: "Standalone music production workstation",
    currentUnitPrice: 1499.99,
    currentProductDiscount: 0.0,
    manufacturerId: 8,
    productCategoryId: "B2B-PC-0012",
  },
  {
    id: 39,
    referenceId: "B2B-PROD-0039",
    name: "Akai MPC One",
    description: "Standalone music production center",
    currentUnitPrice: 699.99,
    currentProductDiscount: 0.0,
    manufacturerId: 8,
    productCategoryId: "B2B-PC-0012",
  },
  {
    id: 40,
    referenceId: "B2B-PROD-0040",
    name: "Akai LPK25",
    description: "25-key MIDI keyboard",
    currentUnitPrice: 69.99,
    currentProductDiscount: 0.0,
    manufacturerId: 8,
    productCategoryId: "B2B-PC-0012",
  },
  {
    id: 41,
    referenceId: "B2B-PROD-0041",
    name: "Elektron Digitakt",
    description: "Drum computer and sampler",
    currentUnitPrice: 749.99,
    currentProductDiscount: 0.0,
    manufacturerId: 9,
    productCategoryId: "B2B-PC-0012",
  },
  {
    id: 42,
    referenceId: "B2B-PROD-0042",
    name: "Elektron Analog Four",
    description: "4-voice analog synthesizer",
    currentUnitPrice: 1349.99,
    currentProductDiscount: 0.0,
    manufacturerId: 9,
    productCategoryId: "B2B-PC-0012",
  },
  {
    id: 43,
    referenceId: "B2B-PROD-0043",
    name: "Elektron Model:Samples",
    description: "Sample-based groovebox",
    currentUnitPrice: 449.99,
    currentProductDiscount: 0.0,
    manufacturerId: 9,
    productCategoryId: "B2B-PC-0012",
  },
  {
    id: 44,
    referenceId: "B2B-PROD-0044",
    name: "Elektron Octatrack",
    description: "Dynamic performance sampler",
    currentUnitPrice: 1349.99,
    currentProductDiscount: 0.0,
    manufacturerId: 9,
    productCategoryId: "B2B-PC-0012",
  },
  {
    id: 45,
    referenceId: "B2B-PROD-0045",
    name: "Elektron Analog Rytm",
    description: "Analog drum machine and sampler",
    currentUnitPrice: 1449.99,
    currentProductDiscount: 0.0,
    manufacturerId: 9,
    productCategoryId: "B2B-PC-0012",
  },
  {
    id: 46,
    referenceId: "B2B-PROD-0046",
    name: "Casio CT-X700",
    description: "Portable keyboard",
    currentUnitPrice: 174.99,
    currentProductDiscount: 0.0,
    manufacturerId: 10,
    productCategoryId: "B2B-PC-0011",
  },
  {
    id: 47,
    referenceId: "B2B-PROD-0047",
    name: "Casio PX-160",
    description: "Digital piano",
    currentUnitPrice: 499.99,
    currentProductDiscount: 0.0,
    manufacturerId: 10,
    productCategoryId: "B2B-PC-0013",
  },
  {
    id: 48,
    referenceId: "B2B-PROD-0048",
    name: "Casio SA-76",
    description: "Mini keyboard",
    currentUnitPrice: 54.99,
    currentProductDiscount: 0.0,
    manufacturerId: 10,
    productCategoryId: "B2B-PC-0011",
  },
  {
    id: 49,
    referenceId: "B2B-PROD-0049",
    name: "Casio WK-6600",
    description: "Workstation keyboard",
    currentUnitPrice: 299.99,
    currentProductDiscount: 0.0,
    manufacturerId: 10,
    productCategoryId: "B2B-PC-0013",
  },
  {
    id: 50,
    referenceId: "B2B-PROD-0050",
    name: "Casio LK-S250",
    description: "Key lighting keyboard",
    currentUnitPrice: 129.99,
    currentProductDiscount: 0.0,
    manufacturerId: 10,
    productCategoryId: "B2B-PC-0011",
  },
  {
    id: 51,
    referenceId: "B2B-PROD-0051",
    name: "Alesis V25",
    description: "25-key MIDI keyboard controller",
    currentUnitPrice: 99.99,
    currentProductDiscount: 0.0,
    manufacturerId: 11,
    productCategoryId: "B2B-PC-0012",
  },
  {
    id: 52,
    referenceId: "B2B-PROD-0052",
    name: "Alesis Nitro Mesh Kit",
    description: "Electronic drum set",
    currentUnitPrice: 379.99,
    currentProductDiscount: 0.0,
    manufacturerId: 11,
    productCategoryId: "B2B-PC-0010",
  },
  {
    id: 53,
    referenceId: "B2B-PROD-0053",
    name: "Alesis Strike Pro Kit",
    description: "Professional electronic drum set",
    currentUnitPrice: 2299.99,
    currentProductDiscount: 0.0,
    manufacturerId: 11,
    productCategoryId: "B2B-PC-0010",
  },
  {
    id: 54,
    referenceId: "B2B-PROD-0054",
    name: "Alesis Recital",
    description: "88-key digital piano",
    currentUnitPrice: 219.99,
    currentProductDiscount: 0.0,
    manufacturerId: 11,
    productCategoryId: "B2B-PC-0013",
  },
  {
    id: 55,
    referenceId: "B2B-PROD-0055",
    name: "Alesis Q88 MKII",
    description: "88-key MIDI controller",
    currentUnitPrice: 229.99,
    currentProductDiscount: 0.0,
    manufacturerId: 11,
    productCategoryId: "B2B-PC-0012",
  },
  {
    id: 56,
    referenceId: "B2B-PROD-0056",
    name: "Yamaha DGX-660",
    description: "Portable Grand digital piano",
    currentUnitPrice: 799.99,
    currentProductDiscount: 0.0,
    manufacturerId: 1,
    productCategoryId: "B2B-PC-0013",
  },
  {
    id: 57,
    referenceId: "B2B-PROD-0057",
    name: "Yamaha Montage 8",
    description: "88-key synthesizer",
    currentUnitPrice: 3499.99,
    currentProductDiscount: 0.0,
    manufacturerId: 1,
    productCategoryId: "B2B-PC-0012",
  },
  {
    id: 58,
    referenceId: "B2B-PROD-0058",
    name: "Yamaha MOXF8",
    description: "88-key music production synthesizer",
    currentUnitPrice: 1699.99,
    currentProductDiscount: 0.0,
    manufacturerId: 1,
    productCategoryId: "B2B-PC-0012",
  },
  {
    id: 59,
    referenceId: "B2B-PROD-0059",
    name: "Yamaha PSR-SX900",
    description: "61-key arranger workstation",
    currentUnitPrice: 2199.99,
    currentProductDiscount: 0.0,
    manufacturerId: 1,
    productCategoryId: "B2B-PC-0012",
  },
  {
    id: 60,
    referenceId: "B2B-PROD-0060",
    name: "Yamaha YPT-260",
    description: "61-key portable keyboard",
    currentUnitPrice: 129.99,
    currentProductDiscount: 0.0,
    manufacturerId: 1,
    productCategoryId: "B2B-PC-0011",
  },
  {
    id: 61,
    referenceId: "B2B-PROD-0061",
    name: "Roland GO:KEYS",
    description: "61-key music creation keyboard",
    currentUnitPrice: 329.99,
    currentProductDiscount: 0.0,
    manufacturerId: 2,
    productCategoryId: "B2B-PC-0011",
  },
  {
    id: 62,
    referenceId: "B2B-PROD-0062",
    name: "Roland RD-88",
    description: "88-key stage piano",
    currentUnitPrice: 1199.99,
    currentProductDiscount: 0.0,
    manufacturerId: 2,
    productCategoryId: "B2B-PC-0013",
  },
  {
    id: 63,
    referenceId: "B2B-PROD-0063",
    name: "Roland FP-10",
    description: "88-key digital piano",
    currentUnitPrice: 649.99,
    currentProductDiscount: 0.0,
    manufacturerId: 2,
    productCategoryId: "B2B-PC-0013",
  },
  {
    id: 64,
    referenceId: "B2B-PROD-0064",
    name: "Roland Fantom-8",
    description: "88-key synthesizer workstation",
    currentUnitPrice: 3799.99,
    currentProductDiscount: 0.0,
    manufacturerId: 2,
    productCategoryId: "B2B-PC-0012",
  },
  {
    id: 65,
    referenceId: "B2B-PROD-0065",
    name: "Roland Juno-DS88",
    description: "88-key synthesizer",
    currentUnitPrice: 1099.99,
    currentProductDiscount: 0.0,
    manufacturerId: 2,
    productCategoryId: "B2B-PC-0012",
  },
  {
    id: 66,
    referenceId: "B2B-PROD-0066",
    name: "Korg Krome EX 88",
    description: "88-key music workstation",
    currentUnitPrice: 1699.99,
    currentProductDiscount: 0.0,
    manufacturerId: 3,
    productCategoryId: "B2B-PC-0012",
  },
  {
    id: 67,
    referenceId: "B2B-PROD-0067",
    name: "Korg Pa4X",
    description: "76-key arranger workstation",
    currentUnitPrice: 3699.99,
    currentProductDiscount: 0.0,
    manufacturerId: 3,
    productCategoryId: "B2B-PC-0012",
  },
  {
    id: 68,
    referenceId: "B2B-PROD-0068",
    name: "Korg B2",
    description: "88-key digital piano",
    currentUnitPrice: 599.99,
    currentProductDiscount: 0.0,
    manufacturerId: 3,
    productCategoryId: "B2B-PC-0013",
  },
  {
    id: 69,
    referenceId: "B2B-PROD-0069",
    name: "Korg Minilogue",
    description: "4-voice polyphonic analog synthesizer",
    currentUnitPrice: 599.99,
    currentProductDiscount: 0.0,
    manufacturerId: 3,
    productCategoryId: "B2B-PC-0012",
  },
  {
    id: 70,
    referenceId: "B2B-PROD-0070",
    name: "Korg Volca Keys",
    description: "Analogue loop synth",
    currentUnitPrice: 169.99,
    currentProductDiscount: 0.0,
    manufacturerId: 3,
    productCategoryId: "B2B-PC-0012",
  },
  {
    id: 71,
    referenceId: "B2B-PROD-0071",
    name: "Moog Subsequent 37",
    description: "Paraphonic analog synthesizer",
    currentUnitPrice: 1799.99,
    currentProductDiscount: 0.0,
    manufacturerId: 4,
    productCategoryId: "B2B-PC-0012",
  },
  {
    id: 72,
    referenceId: "B2B-PROD-0072",
    name: "Moog Matriarch",
    description: "4-note paraphonic analog synthesizer",
    currentUnitPrice: 2099.99,
    currentProductDiscount: 0.0,
    manufacturerId: 4,
    productCategoryId: "B2B-PC-0012",
  },
  {
    id: 73,
    referenceId: "B2B-PROD-0073",
    name: "Moog Grandmother",
    description: "Semi-modular analog synthesizer",
    currentUnitPrice: 999.99,
    currentProductDiscount: 0.0,
    manufacturerId: 4,
    productCategoryId: "B2B-PC-0012",
  },
  {
    id: 74,
    referenceId: "B2B-PROD-0074",
    name: "Moog DFAM",
    description: "Drummer from Another Mother",
    currentUnitPrice: 699.99,
    currentProductDiscount: 0.0,
    manufacturerId: 4,
    productCategoryId: "B2B-PC-0012",
  },
  {
    id: 75,
    referenceId: "B2B-PROD-0075",
    name: "Moog Theremini",
    description: "Theremin synthesizer",
    currentUnitPrice: 349.99,
    currentProductDiscount: 0.0,
    manufacturerId: 4,
    productCategoryId: "B2B-PC-0012",
  },
  {
    id: 76,
    referenceId: "B2B-PROD-0076",
    name: "Arturia MiniBrute 2S",
    description: "Analog synth with sequencer",
    currentUnitPrice: 649.99,
    currentProductDiscount: 0.0,
    manufacturerId: 5,
    productCategoryId: "B2B-PC-0012",
  },
  {
    id: 77,
    referenceId: "B2B-PROD-0077",
    name: "Arturia MicroFreak",
    description: "Hybrid synthesizer",
    currentUnitPrice: 349.99,
    currentProductDiscount: 0.0,
    manufacturerId: 5,
    productCategoryId: "B2B-PC-0012",
  },
  {
    id: 78,
    referenceId: "B2B-PROD-0078",
    name: "Arturia KeyLab 88 MKII",
    description: "88-key MIDI controller",
    currentUnitPrice: 999.99,
    currentProductDiscount: 0.0,
    manufacturerId: 5,
    productCategoryId: "B2B-PC-0012",
  },
  {
    id: 79,
    referenceId: "B2B-PROD-0079",
    name: "Arturia MatrixBrute",
    description: "Analog Matrix Synthesizer",
    currentUnitPrice: 1999.99,
    currentProductDiscount: 0.0,
    manufacturerId: 5,
    productCategoryId: "B2B-PC-0012",
  },
  {
    id: 80,
    referenceId: "B2B-PROD-0080",
    name: "Arturia DrumBrute Impact",
    description: "Analog drum machine",
    currentUnitPrice: 349.99,
    currentProductDiscount: 0.0,
    manufacturerId: 5,
    productCategoryId: "B2B-PC-0012",
  },
  {
    id: 81,
    referenceId: "B2B-PROD-0081",
    name: "Nord Electro 6D",
    description: "61-key keyboard",
    currentUnitPrice: 2299.99,
    currentProductDiscount: 0.0,
    manufacturerId: 6,
    productCategoryId: "B2B-PC-0011",
  },
  {
    id: 82,
    referenceId: "B2B-PROD-0082",
    name: "Nord Stage 3 88",
    description: "88-key stage piano",
    currentUnitPrice: 4499.99,
    currentProductDiscount: 0.0,
    manufacturerId: 6,
    productCategoryId: "B2B-PC-0013",
  },
  {
    id: 83,
    referenceId: "B2B-PROD-0083",
    name: "Nord Lead A1",
    description: "Analog modeling synthesizer",
    currentUnitPrice: 1899.99,
    currentProductDiscount: 0.0,
    manufacturerId: 6,
    productCategoryId: "B2B-PC-0012",
  },
  {
    id: 84,
    referenceId: "B2B-PROD-0084",
    name: "Nord Piano 4",
    description: "88-key digital piano",
    currentUnitPrice: 3299.99,
    currentProductDiscount: 0.0,
    manufacturerId: 6,
    productCategoryId: "B2B-PC-0013",
  },
  {
    id: 85,
    referenceId: "B2B-PROD-0085",
    name: "Nord Grand",
    description: "88-key digital piano",
    currentUnitPrice: 3999.99,
    currentProductDiscount: 0.0,
    manufacturerId: 6,
    productCategoryId: "B2B-PC-0013",
  },
  {
    id: 86,
    referenceId: "B2B-PROD-0086",
    name: "Casio Privia PX-S1000",
    description: "88-key digital piano",
    currentUnitPrice: 699.99,
    currentProductDiscount: 0.0,
    manufacturerId: 7,
    productCategoryId: "B2B-PC-0013",
  },
  {
    id: 87,
    referenceId: "B2B-PROD-0087",
    name: "Casio CT-X700",
    description: "61-key portable keyboard",
    currentUnitPrice: 179.99,
    currentProductDiscount: 0.0,
    manufacturerId: 7,
    productCategoryId: "B2B-PC-0011",
  },
  {
    id: 88,
    referenceId: "B2B-PROD-0088",
    name: "Casio LK-S250",
    description: "61-key lighted keyboard",
    currentUnitPrice: 169.99,
    currentProductDiscount: 0.0,
    manufacturerId: 7,
    productCategoryId: "B2B-PC-0011",
  },
  {
    id: 89,
    referenceId: "B2B-PROD-0089",
    name: "Casio CDP-S350",
    description: "88-key digital piano",
    currentUnitPrice: 549.99,
    currentProductDiscount: 0.0,
    manufacturerId: 7,
    productCategoryId: "B2B-PC-0013",
  },
  {
    id: 90,
    referenceId: "B2B-PROD-0090",
    name: "Casio CT-S300",
    description: "61-key portable keyboard",
    currentUnitPrice: 149.99,
    currentProductDiscount: 0.0,
    manufacturerId: 7,
    productCategoryId: "B2B-PC-0011",
  },
  {
    id: 91,
    referenceId: "B2B-PROD-0091",
    name: "Behringer Poly D",
    description: "4-voice analog synthesizer",
    currentUnitPrice: 749.99,
    currentProductDiscount: 0.0,
    manufacturerId: 8,
    productCategoryId: "B2B-PC-0012",
  },
  {
    id: 92,
    referenceId: "B2B-PROD-0092",
    name: "Behringer DeepMind 12",
    description: "12-voice analog synthesizer",
    currentUnitPrice: 999.99,
    currentProductDiscount: 0.0,
    manufacturerId: 8,
    productCategoryId: "B2B-PC-0012",
  },
  {
    id: 93,
    referenceId: "B2B-PROD-0093",
    name: "Behringer Neutron",
    description: "Paraphonic analog and semi-modular synthesizer",
    currentUnitPrice: 329.99,
    currentProductDiscount: 0.0,
    manufacturerId: 8,
    productCategoryId: "B2B-PC-0012",
  },
  {
    id: 94,
    referenceId: "B2B-PROD-0094",
    name: "Behringer Crave",
    description: "Analog semi-modular synthesizer",
    currentUnitPrice: 199.99,
    currentProductDiscount: 0.0,
    manufacturerId: 8,
    productCategoryId: "B2B-PC-0012",
  },
  {
    id: 95,
    referenceId: "B2B-PROD-0095",
    name: "Behringer Model D",
    description: "Analog synthesizer",
    currentUnitPrice: 299.99,
    currentProductDiscount: 0.0,
    manufacturerId: 8,
    productCategoryId: "B2B-PC-0012",
  },
  {
    id: 96,
    referenceId: "B2B-PROD-0096",
    name: "Akai MPK Mini MK3",
    description: "25-key MIDI controller",
    currentUnitPrice: 119.99,
    currentProductDiscount: 0.0,
    manufacturerId: 9,
    productCategoryId: "B2B-PC-0012",
  },
  {
    id: 97,
    referenceId: "B2B-PROD-0097",
    name: "Akai Professional MPC Live II",
    description: "Standalone music production center",
    currentUnitPrice: 1299.99,
    currentProductDiscount: 0.0,
    manufacturerId: 9,
    productCategoryId: "B2B-PC-0012",
  },
  {
    id: 98,
    referenceId: "B2B-PROD-0098",
    name: "Akai Professional MPD218",
    description: "MIDI pad controller",
    currentUnitPrice: 119.99,
    currentProductDiscount: 0.0,
    manufacturerId: 9,
    productCategoryId: "B2B-PC-0012",
  },
  {
    id: 99,
    referenceId: "B2B-PROD-0099",
    name: "Akai Fire",
    description: "Controller for FL Studio",
    currentUnitPrice: 199.99,
    currentProductDiscount: 0.0,
    manufacturerId: 9,
    productCategoryId: "B2B-PC-0012",
  },
  {
    id: 100,
    referenceId: "B2B-PROD-0100",
    name: "Akai LPK25 Wireless",
    description: "25-key Bluetooth MIDI keyboard",
    currentUnitPrice: 99.99,
    currentProductDiscount: 0.0,
    manufacturerId: 9,
    productCategoryId: "B2B-PC-0012",
  },
];

const seedProducts = () => Product.bulkCreate(products);

module.exports = { seedProducts };
