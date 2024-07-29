const { ProductCategory } = require('../models');

const productCategories = [
    {
        "referenceId": "B2B-PC-0001",
        "name": "LAPTOPS",
        "description": "Laptops for music production."
    },
    {
        "referenceId": "B2B-PC-0002",
        "name": "ELECTRIC_GUITARS",
        "description": "Electric guitars."
    },
    {
        "referenceId": "B2B-PC-0003",
        "name": "ACOUSTIC_GUITARS",
        "description": "Acoustic guitars."
    },
    {
        "referenceId": "B2B-PC-0004",
        "name": "BASS_GUITARS",
        "description": "Bass guitars."
    },
    {
        "referenceId": "B2B-PC-0005",
        "name": "ELECTRIC_BASSES",
        "description": "Electric bass guitars."
    },
    {
        "referenceId": "B2B-PC-0006",
        "name": "ACOUSTIC_BASSES",
        "description": "Acoustic bass guitars."
    },
    {
        "referenceId": "B2B-PC-0007",
        "name": "DRUM_KITS",
        "description": "Complete drum kits."
    },
    {
        "referenceId": "B2B-PC-0008",
        "name": "SNARE_DRUMS",
        "description": "Snare drums."
    },
    {
        "referenceId": "B2B-PC-0009",
        "name": "CYMBALS",
        "description": "Cymbals for drum kits."
    },
    {
        "referenceId": "B2B-PC-0010",
        "name": "ELECTRONIC_DRUMS",
        "description": "Electronic drum kits."
    },
    {
        "referenceId": "B2B-PC-0011",
        "name": "KEYBOARDS",
        "description": "Musical keyboards."
    },
    {
        "referenceId": "B2B-PC-0012",
        "name": "SYNTHESIZERS",
        "description": "Synthesizers."
    },
    {
        "referenceId": "B2B-PC-0013",
        "name": "PIANOS",
        "description": "Acoustic and digital pianos."
    },
    {
        "referenceId": "B2B-PC-0014",
        "name": "MIDI_CONTROLLERS",
        "description": "MIDI controllers."
    },
    {
        "referenceId": "B2B-PC-0015",
        "name": "AMPLIFIERS",
        "description": "Amplifiers for instruments."
    },
    {
        "referenceId": "B2B-PC-0016",
        "name": "GUITAR_AMPS",
        "description": "Amplifiers for guitars."
    },
    {
        "referenceId": "B2B-PC-0017",
        "name": "BASS_AMPS",
        "description": "Amplifiers for bass guitars."
    },
    {
        "referenceId": "B2B-PC-0018",
        "name": "MICROPHONES",
        "description": "Microphones for recording and live sound."
    },
    {
        "referenceId": "B2B-PC-0019",
        "name": "VOCAL_MICROPHONES",
        "description": "Microphones for vocals."
    },
    {
        "referenceId": "B2B-PC-0020",
        "name": "INSTRUMENT_MICROPHONES",
        "description": "Microphones for instruments."
    },
    {
        "referenceId": "B2B-PC-0021",
        "name": "STUDIO_MONITORS",
        "description": "Studio monitor speakers."
    },
    {
        "referenceId": "B2B-PC-0022",
        "name": "HEADPHONES",
        "description": "Studio and live headphones."
    },
    {
        "referenceId": "B2B-PC-0023",
        "name": "AUDIO_INTERFACES",
        "description": "Audio interfaces for recording."
    },
    {
        "referenceId": "B2B-PC-0024",
        "name": "MIXERS",
        "description": "Audio mixers for recording and live sound."
    },
    {
        "referenceId": "B2B-PC-0025",
        "name": "EFFECTS_PEDALS",
        "description": "Effects pedals for guitars and basses."
    },
    {
        "referenceId": "B2B-PC-0026",
        "name": "REVERB_PEDALS",
        "description": "Reverb pedals."
    },
    {
        "referenceId": "B2B-PC-0027",
        "name": "DELAY_PEDALS",
        "description": "Delay pedals."
    },
    {
        "referenceId": "B2B-PC-0028",
        "name": "LOOPERS",
        "description": "Loopers and looping pedals."
    },
    {
        "referenceId": "B2B-PC-0029",
        "name": "DJ_EQUIPMENT",
        "description": "DJ equipment and accessories."
    },
    {
        "referenceId": "B2B-PC-0030",
        "name": "TURNTABLES",
        "description": "DJ turntables."
    },
    {
        "referenceId": "B2B-PC-0031",
        "name": "MIXER_CONSOLES",
        "description": "Mixer consoles for DJs."
    },
    {
        "referenceId": "B2B-PC-0032",
        "name": "CONTROLLERS",
        "description": "DJ controllers."
    },
    {
        "referenceId": "B2B-PC-0033",
        "name": "LIGHTING",
        "description": "Stage and DJ lighting."
    },
    {
        "referenceId": "B2B-PC-0034",
        "name": "STAGE_LIGHTS",
        "description": "Stage lighting equipment."
    },
    {
        "referenceId": "B2B-PC-0035",
        "name": "PA_SYSTEMS",
        "description": "Public Address (PA) systems."
    },
    {
        "referenceId": "B2B-PC-0036",
        "name": "SPEAKERS",
        "description": "Speakers for PA systems."
    },
    {
        "referenceId": "B2B-PC-0037",
        "name": "SUBWOOFERS",
        "description": "Subwoofers for PA systems."
    },
    {
        "referenceId": "B2B-PC-0038",
        "name": "MIXING_CONSOLES",
        "description": "Mixing consoles for live sound."
    },
    {
        "referenceId": "B2B-PC-0039",
        "name": "RACK_MOUNTS",
        "description": "Rack mount equipment."
    },
    {
        "referenceId": "B2B-PC-0040",
        "name": "CABLES",
        "description": "Cables for instruments and audio equipment."
    },
    {
        "referenceId": "B2B-PC-0041",
        "name": "INSTRUMENT_CABLES",
        "description": "Cables for instruments."
    },
    {
        "referenceId": "B2B-PC-0042",
        "name": "MICROPHONE_CABLES",
        "description": "Cables for microphones."
    },
    {
        "referenceId": "B2B-PC-0043",
        "name": "PATCH_CABLES",
        "description": "Patch cables for audio equipment."
    },
    {
        "referenceId": "B2B-PC-0044",
        "name": "STANDS",
        "description": "Stands for instruments and microphones."
    },
    {
        "referenceId": "B2B-PC-0045",
        "name": "GUITAR_STANDS",
        "description": "Stands for guitars."
    },
    {
        "referenceId": "B2B-PC-0046",
        "name": "MICROPHONE_STANDS",
        "description": "Stands for microphones."
    },
    {
        "referenceId": "B2B-PC-0047",
        "name": "SHEET_MUSIC",
        "description": "Sheet music and songbooks."
    },
    {
        "referenceId": "B2B-PC-0048",
        "name": "TUNERS",
        "description": "Instrument tuners."
    },
    {
        "referenceId": "B2B-PC-0049",
        "name": "METRONOMES",
        "description": "Metronomes for practice."
    },
    {
        "referenceId": "B2B-PC-0050",
        "name": "PEDAL_BOARDS",
        "description": "Pedal boards for guitar effects."
    },
    {
        "referenceId": "B2B-PC-0051",
        "name": "MUSIC_SOFTWARE",
        "description": "Software for music production."
    }
    
]

const seedProductCategories = () => ProductCategory.bulkCreate(productCategories);

module.exports = { seedProductCategories };