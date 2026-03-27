/**
 * SATISFACTORY PLUS - Official Guide
 * Main Application JavaScript
 * Version: 1.0.0
 */

// ============================================
// DATA: Recipes (S+ Mod Data)
// ============================================
const SPLUS_DATA = {
    version: '1.2.3',
    items: [
        { id: 'iron_ingot', name: 'Iron Ingot', tier: 1, category: 'basics' },
        { id: 'copper_ingot', name: 'Copper Ingot', tier: 1, category: 'basics' },
        { id: 'iron_plate', name: 'Iron Plate', tier: 1, category: 'basics' },
        { id: 'copper_plate', name: 'Copper Plate', tier: 1, category: 'basics' },
        { id: 'iron_rod', name: 'Iron Rod', tier: 1, category: 'basics' },
        { id: 'copper_rod', name: 'Copper Rod', tier: 1, category: 'basics' },
        { id: 'wire', name: 'Wire', tier: 1, category: 'basics' },
        { id: 'cable', name: 'Cable', tier: 1, category: 'basics' },
        { id: 'concrete', name: 'Concrete', tier: 1, category: 'basics' },
        { id: 'rotor', name: 'Rotor', tier: 2, category: 'intermediate' },
        { id: 'screw', name: 'Screw', tier: 1, category: 'basics' },
        { id: 'modular_frame', name: 'Modular Frame', tier: 2, category: 'intermediate' },
        { id: 'reinforced_plate', name: 'Reinforced Iron Plate', tier: 2, category: 'intermediate' },
        { id: 'steel_ingot', name: 'Steel Ingot', tier: 3, category: 'intermediate' },
        { id: 'steel_plate', name: 'Steel Plate', tier: 3, category: 'intermediate' },
        { id: 'steel_pipe', name: 'Steel Pipe', tier: 3, category: 'intermediate' },
        { id: 'steel_beam', name: 'Steel Beam', tier: 4, category: 'intermediate' },
        { id: 'aluminum_ingot', name: 'Aluminum Ingot', tier: 7, category: 'advanced' },
        { id: 'aluminum_plate', name: 'Aluminum Plate', tier: 7, category: 'advanced' },
        { id: 'titanium_ingot', name: 'Titanium Ingot', tier: 8, category: 'advanced' },
        { id: 'uranium', name: 'Uranium', tier: 8, category: 'nuclear' },
        { id: 'enriched_uranium', name: 'Enriched Uranium', tier: 8, category: 'nuclear' },
        { id: 'nuclear_fuel', name: 'Nuclear Fuel Rod', tier: 8, category: 'nuclear' },
        { id: 'plastic', name: 'Plastic', tier: 5, category: 'intermediate' },
        { id: 'rubber', name: 'Rubber', tier: 5, category: 'intermediate' },
        { id: 'circuit', name: 'Circuit Board', tier: 5, category: 'advanced' },
        { id: 'crystal_oscillator', name: 'Crystal Oscillator', tier: 6, category: 'advanced' },
        { id: 'motor', name: 'Motor', tier: 6, category: 'advanced' },
        { id: 'turbo_motor', name: 'Turbo Motor', tier: 7, category: 'advanced' },
        { id: 'brass_ingot', name: 'Brass Ingot', tier: 2, category: 'intermediate' },
        { id: 'bronze_ingot', name: 'Bronze Ingot', tier: 2, category: 'intermediate' },
        { id: 'aurovite', name: 'Aurovite', tier: 3, category: 'intermediate' },
        { id: 'kyalite', name: 'Kyalite', tier: 6, category: 'advanced' },
        { id: 'cryolite', name: 'Cryolite', tier: 7, category: 'advanced' },
        { id: 'satmonium', name: 'Satmonium', tier: 5, category: 'intermediate' },
        { id: 'generator_module', name: 'Generator Module', tier: 6, category: 'advanced' },
        { id: 'emf_generator', name: 'EMF Generator', tier: 7, category: 'advanced' },
        { id: 'cotton_fabric', name: 'Cotton Fabric', tier: 5, category: 'intermediate' }
    ],
    
    recipes: {
        'iron_ingot': {
            name: 'Iron Ingot',
            tier: 1,
            machine: 'Smelter',
            time: 2,
            inputs: [{ item: 'Iron Ore', amount: 1 }],
            outputs: [{ item: 'Iron Ingot', amount: 1 }]
        },
        'copper_ingot': {
            name: 'Copper Ingot',
            tier: 1,
            machine: 'Smelter',
            time: 2,
            inputs: [{ item: 'Copper Ore', amount: 1 }],
            outputs: [{ item: 'Copper Ingot', amount: 1 }]
        },
        'iron_plate': {
            name: 'Iron Plate',
            tier: 1,
            machine: 'Constructor',
            time: 3,
            inputs: [{ item: 'Iron Ingot', amount: 3 }],
            outputs: [{ item: 'Iron Plate', amount: 2 }]
        },
        'copper_plate': {
            name: 'Copper Plate',
            tier: 1,
            machine: 'Constructor',
            time: 3,
            inputs: [{ item: 'Copper Ingot', amount: 3 }],
            outputs: [{ item: 'Copper Plate', amount: 2 }]
        },
        'iron_rod': {
            name: 'Iron Rod',
            tier: 1,
            machine: 'Constructor',
            time: 3,
            inputs: [{ item: 'Iron Ingot', amount: 1 }],
            outputs: [{ item: 'Iron Rod', amount: 1 }]
        },
        'wire': {
            name: 'Wire',
            tier: 1,
            machine: 'Constructor',
            time: 4,
            inputs: [{ item: 'Copper Ingot', amount: 2 }],
            outputs: [{ item: 'Wire', amount: 3 }]
        },
        'cable': {
            name: 'Cable',
            tier: 1,
            machine: 'Constructor',
            time: 4,
            inputs: [{ item: 'Wire', amount: 2 }],
            outputs: [{ item: 'Cable', amount: 1 }]
        },
        'concrete': {
            name: 'Concrete',
            tier: 1,
            machine: 'Constructor',
            time: 4,
            inputs: [{ item: 'Limestone', amount: 3 }],
            outputs: [{ item: 'Concrete', amount: 1 }]
        },
        'screw': {
            name: 'Screw',
            tier: 1,
            machine: 'Constructor',
            time: 3,
            inputs: [{ item: 'Iron Rod', amount: 1 }],
            outputs: [{ item: 'Screw', amount: 4 }]
        },
        'rotor': {
            name: 'Rotor',
            tier: 2,
            machine: 'Assembler',
            time: 6,
            inputs: [{ item: 'Iron Rod', amount: 4 }, { item: 'Screw', amount: 8 }],
            outputs: [{ item: 'Rotor', amount: 1 }]
        },
        'modular_frame': {
            name: 'Modular Frame',
            tier: 2,
            machine: 'Assembler',
            time: 12,
            inputs: [{ item: 'Iron Rod', amount: 6 }, { item: 'Screw', amount: 20 }, { item: 'Iron Plate', amount: 4 }],
            outputs: [{ item: 'Modular Frame', amount: 1 }]
        },
        'reinforced_plate': {
            name: 'Reinforced Iron Plate',
            tier: 2,
            machine: 'Assembler',
            time: 12,
            inputs: [{ item: 'Iron Plate', amount: 15 }, { item: 'Screw', amount: 28 }],
            outputs: [{ item: 'Reinforced Iron Plate', amount: 1 }]
        },
        'steel_ingot': {
            name: 'Steel Ingot',
            tier: 3,
            machine: 'Foundry',
            time: 4,
            inputs: [{ item: 'Iron Ore', amount: 3 }, { item: 'Coal', amount: 3 }],
            outputs: [{ item: 'Steel Ingot', amount: 1 }]
        },
        'steel_plate': {
            name: 'Steel Plate',
            tier: 3,
            machine: 'Constructor',
            time: 4,
            inputs: [{ item: 'Steel Ingot', amount: 3 }],
            outputs: [{ item: 'Steel Plate', amount: 2 }]
        },
        'steel_pipe': {
            name: 'Steel Pipe',
            tier: 3,
            machine: 'Constructor',
            time: 4,
            inputs: [{ item: 'Steel Ingot', amount: 2 }],
            outputs: [{ item: 'Steel Pipe', amount: 2 }]
        },
        'steel_beam': {
            name: 'Steel Beam',
            tier: 4,
            machine: 'Constructor',
            time: 8,
            inputs: [{ item: 'Steel Ingot', amount: 12 }],
            outputs: [{ item: 'Steel Beam', amount: 1 }]
        },
        'aluminum_ingot': {
            name: 'Aluminum Ingot',
            tier: 7,
            machine: 'Foundry',
            time: 4,
            inputs: [{ item: 'Aluminum Scrap', amount: 3 }, { item: 'Copper Ingot', amount: 1 }],
            outputs: [{ item: 'Aluminum Ingot', amount: 1 }]
        },
        'titanium_ingot': {
            name: 'Titanium Ingot',
            tier: 8,
            machine: 'Foundry',
            time: 6,
            inputs: [{ item: 'Titanium Ore', amount: 2 }, { item: 'Petroleum Coke', amount: 1 }],
            outputs: [{ item: 'Titanium Ingot', amount: 1 }]
        },
        'plastic': {
            name: 'Plastic',
            tier: 5,
            machine: 'Refinery',
            time: 4,
            inputs: [{ item: 'Crude Oil', amount: 3 }],
            outputs: [{ item: 'Plastic', amount: 2 }]
        },
        'rubber': {
            name: 'Rubber',
            tier: 5,
            machine: 'Refinery',
            time: 5,
            inputs: [{ item: 'Crude Oil', amount: 3 }],
            outputs: [{ item: 'Rubber', amount: 2 }]
        },
        'circuit': {
            name: 'Circuit Board',
            tier: 5,
            machine: 'Assembler',
            time: 8,
            inputs: [{ item: 'Copper Sheet', amount: 2 }, { item: 'Plastic', amount: 1 }],
            outputs: [{ item: 'Circuit Board', amount: 1 }]
        },
        'crystal_oscillator': {
            name: 'Crystal Oscillator',
            tier: 6,
            machine: 'Manufacturer',
            time: 20,
            inputs: [{ item: 'Quartz Crystal', amount: 12 }, { item: 'Cable', amount: 6 }, { item: 'Steel Plate', amount: 2 }],
            outputs: [{ item: 'Crystal Oscillator', amount: 1 }]
        },
        'motor': {
            name: 'Motor',
            tier: 6,
            machine: 'Assembler',
            time: 8,
            inputs: [{ item: 'Rotor', amount: 4 }, { item: 'Stator', amount: 2 }],
            outputs: [{ item: 'Motor', amount: 1 }]
        },
        'turbo_motor': {
            name: 'Turbo Motor',
            tier: 7,
            machine: 'Manufacturer',
            time: 24,
            inputs: [{ item: 'Motor', amount: 4 }, { item: 'Rubber', amount: 8 }, { item: 'Circuit Board', amount: 4 }, { item: 'Cable', amount: 12 }],
            outputs: [{ item: 'Turbo Motor', amount: 1 }]
        },
        'brass_ingot': {
            name: 'Brass Ingot',
            tier: 2,
            machine: 'Foundry',
            time: 4,
            inputs: [{ item: 'Copper Ore', amount: 2 }, { item: 'Zinc Ore', amount: 1 }],
            outputs: [{ item: 'Brass Ingot', amount: 2 }]
        },
        'bronze_ingot': {
            name: 'Bronze Ingot',
            tier: 2,
            machine: 'Foundry',
            time: 4,
            inputs: [{ item: 'Copper Ore', amount: 2 }, { item: 'Tin Ore', amount: 1 }],
            outputs: [{ item: 'Bronze Ingot', amount: 2 }]
        },
        'uranium': {
            name: 'Uranium Processing',
            tier: 8,
            machine: 'Centrifuge',
            time: 12,
            inputs: [{ item: 'Uranium Ore', amount: 10 }],
            outputs: [{ item: 'Uranium', amount: 1 }]
        },
        'enriched_uranium': {
            name: 'Enriched Uranium',
            tier: 8,
            machine: 'Centrifuge',
            time: 20,
            inputs: [{ item: 'Uranium', amount: 5 }, { item: 'Uranium Waste', amount: 5 }],
            outputs: [{ item: 'Enriched Uranium', amount: 1 }]
        },
        'nuclear_fuel': {
            name: 'Nuclear Fuel Rod',
            tier: 8,
            machine: 'Manufacturer',
            time: 60,
            inputs: [{ item: 'Enriched Uranium', amount: 5 }, { item: 'Steel Pipe', amount: 4 }, { item: 'Copper Sheet', amount: 4 }],
            outputs: [{ item: 'Nuclear Fuel Rod', amount: 1 }]
        },
        'generator_module': {
            name: 'Generator Module',
            tier: 6,
            machine: 'Assembler',
            time: 12,
            inputs: [{ item: 'Circuit Board', amount: 4 }, { item: 'Cable', amount: 8 }, { item: 'Steel Plate', amount: 4 }],
            outputs: [{ item: 'Generator Module', amount: 1 }]
        },
        'emf_generator': {
            name: 'EMF Generator',
            tier: 7,
            machine: 'Manufacturer',
            time: 30,
            inputs: [{ item: 'Generator Module', amount: 4 }, { item: 'Aluminum Plate', amount: 8 }, { item: 'Cable', amount: 16 }],
            outputs: [{ item: 'EMF Generator', amount: 1 }]
        },
        'cotton_fabric': {
            name: 'Cotton Fabric',
            tier: 5,
            machine: 'Loom',
            time: 6,
            inputs: [{ item: 'Cotton', amount: 10 }],
            outputs: [{ item: 'Cotton Fabric', amount: 2 }]
        }
    },
    
    stages: [
        {
            tier: 0,
            name: 'Foundations',
            icon: '🏗️',
            requirements: [
                { item: 'Iron Plate', amount: 20 },
                { item: 'Iron Rod', amount: 20 },
                { item: 'Wire', amount: 20 }
            ],
            unlocks: ['Hub Upgrade', 'Basic Buildings', 'Mk.1 Conveyor']
        },
        {
            tier: 1,
            name: 'Basic Ore Processing',
            icon: '⛏️',
            requirements: [
                { item: 'Iron Plate', amount: 100 },
                { item: 'Iron Rod', amount: 100 },
                { item: 'Wire', amount: 100 },
                { item: 'Cable', amount: 50 }
            ],
            unlocks: ['Constructor', 'Smelter', 'Mk.2 Conveyor']
        },
        {
            tier: 2,
            name: 'Power & Alloys',
            icon: '⚡',
            requirements: [
                { item: 'Rotor', amount: 25 },
                { item: 'Modular Frame', amount: 10 },
                { item: 'Brass Ingot', amount: 50 },
                { item: 'Bronze Ingot', amount: 50 }
            ],
            unlocks: ['Assembler', 'Foundry', 'Coal Power']
        },
        {
            tier: 3,
            name: 'Liquid Metals & Early Steel',
            icon: '🔥',
            requirements: [
                { item: 'Steel Ingot', amount: 100 },
                { item: 'Steel Plate', amount: 50 },
                { item: 'Steel Pipe', amount: 50 },
                { item: 'Aurovite', amount: 25 }
            ],
            unlocks: ['Foundry Mk.2', 'Steel Buildings', 'Advanced Smelting']
        },
        {
            tier: 4,
            name: 'Advanced Steel & Infrastructure',
            icon: '🏭',
            requirements: [
                { item: 'Steel Beam', amount: 50 },
                { item: 'Reinforced Plate', amount: 50 },
                { item: 'Modular Frame', amount: 50 }
            ],
            unlocks: ['Mk.3 Conveyor', 'Large Storage', 'Train System']
        },
        {
            tier: 5,
            name: 'Oil Processing',
            icon: '🛢️',
            requirements: [
                { item: 'Plastic', amount: 100 },
                { item: 'Rubber', amount: 100 },
                { item: 'Cotton Fabric', amount: 50 },
                { item: 'Satmonium', amount: 50 }
            ],
            unlocks: ['Refinery', 'Oil Extractor', 'Fuel Production']
        },
        {
            tier: 6,
            name: 'Advanced Ore & Magnetics',
            icon: '🧲',
            requirements: [
                { item: 'Motor', amount: 50 },
                { item: 'Circuit Board', amount: 100 },
                { item: 'Crystal Oscillator', amount: 25 },
                { item: 'Generator Module', amount: 25 },
                { item: 'Kyalite', amount: 50 }
            ],
            unlocks: ['Manufacturer', 'Magnetic Field', 'Advanced Electronics']
        },
        {
            tier: 7,
            name: 'Aluminum Processing',
            icon: '🔷',
            requirements: [
                { item: 'Aluminum Ingot', amount: 200 },
                { item: 'Aluminum Plate', amount: 100 },
                { item: 'Turbo Motor', amount: 25 },
                { item: 'EMF Generator', amount: 10 },
                { item: 'Cryolite', amount: 100 }
            ],
            unlocks: ['Aluminum Buildings', 'Advanced Power', 'Jetpack']
        },
        {
            tier: 8,
            name: 'Titanium & Nuclear',
            icon: '☢️',
            requirements: [
                { item: 'Titanium Ingot', amount: 200 },
                { item: 'Nuclear Fuel Rod', amount: 20 },
                { item: 'Enriched Uranium', amount: 50 }
            ],
            unlocks: ['Nuclear Power', 'Titanium Buildings', 'Endgame Content']
        },
        {
            tier: 9,
            name: 'Matter Conversion',
            icon: '🌌',
            requirements: [
                { item: 'Quantum Encoder', amount: 50 },
                { item: 'Matter Converter', amount: 25 }
            ],
            unlocks: ['Quantum Computing', 'Matter Manipulation', 'True Endgame']
        }
    ],
    
    schematics: [
        {
            id: 'basic_iron',
            name: 'Basic Iron Production',
            category: 'basics',
            icon: '🔩',
            description: 'Iron Ore → Ingot → Plate → Rod',
            tier: 1,
            items: ['Iron Ore', 'Iron Ingot', 'Iron Plate', 'Iron Rod']
        },
        {
            id: 'copper_wire',
            name: 'Copper Wire Chain',
            category: 'basics',
            icon: '⚡',
            description: 'Copper Ore → Ingot → Wire → Cable',
            tier: 1,
            items: ['Copper Ore', 'Copper Ingot', 'Wire', 'Cable']
        },
        {
            id: 'steel_production',
            name: 'Steel Production',
            category: 'intermediate',
            icon: '🏗️',
            description: 'Iron + Coal → Steel → Beams & Pipes',
            tier: 3,
            items: ['Iron Ore', 'Coal', 'Steel Ingot', 'Steel Plate', 'Steel Beam']
        },
        {
            id: 'aluminum_chain',
            name: 'Aluminum Processing',
            category: 'advanced',
            icon: '🔷',
            description: 'Bauxite → Alumina → Aluminum',
            tier: 7,
            items: ['Bauxite', 'Alumina', 'Aluminum Ingot', 'Aluminum Plate']
        },
        {
            id: 'nuclear_fuel',
            name: 'Nuclear Fuel Rods',
            category: 'nuclear',
            icon: '☢️',
            description: 'Uranium → Enriched → Fuel Rod',
            tier: 8,
            items: ['Uranium Ore', 'Uranium', 'Enriched Uranium', 'Nuclear Fuel Rod']
        },
        {
            id: 'plastic_rubber',
            name: 'Plastic & Rubber',
            category: 'intermediate',
            icon: '🛢️',
            description: 'Crude Oil → Plastic/Rubber',
            tier: 5,
            items: ['Crude Oil', 'Plastic', 'Rubber']
        },
        {
            id: 'motors',
            name: 'Motor Production',
            category: 'advanced',
            icon: '🔧',
            description: 'Rotor + Stator → Motor → Turbo Motor',
            tier: 6,
            items: ['Rotor', 'Stator', 'Motor', 'Turbo Motor']
        },
        {
            id: 'electronics',
            name: 'Electronics Chain',
            category: 'advanced',
            icon: '💾',
            description: 'Circuit Boards → Oscillators → Computers',
            tier: 6,
            items: ['Copper Sheet', 'Plastic', 'Circuit Board', 'Crystal Oscillator']
        }
    ],
    
    blueprints: [
        {
            id: 'bp_001',
            name: '3-2-1 Manifold',
            category: 'manifold',
            icon: '🔀',
            size: '16x8x4',
            downloads: 1250,
            author: 'FactoryMaster'
        },
        {
            id: 'bp_002',
            name: '4-Way Balancer',
            category: 'balancer',
            icon: '⚖️',
            size: '12x12x4',
            downloads: 980,
            author: 'BeltWizard'
        },
        {
            id: 'bp_003',
            name: 'Miner MK.3 Shell',
            category: 'miners',
            icon: '⛏️',
            size: '8x8x12',
            downloads: 2100,
            author: 'MinerPro'
        },
        {
            id: 'bp_004',
            name: 'Coal Power Plant',
            category: 'power',
            icon: '⚡',
            size: '32x24x16',
            downloads: 3500,
            author: 'PowerEngineer'
        },
        {
            id: 'bp_005',
            name: 'Nuclear Power Plant',
            category: 'power',
            icon: '☢️',
            size: '48x32x24',
            downloads: 2800,
            author: 'NukeBuilder'
        },
        {
            id: 'bp_006',
            name: 'Storage Array',
            category: 'storage',
            icon: '📦',
            size: '24x16x8',
            downloads: 1650,
            author: 'StorageKing'
        },
        {
            id: 'bp_007',
            name: 'Oil Refinery Setup',
            category: 'manifold',
            icon: '🛢️',
            size: '40x20x12',
            downloads: 2200,
            author: 'OilBaron'
        },
        {
            id: 'bp_008',
            name: 'Aluminum Smelter',
            category: 'miners',
            icon: '🔷',
            size: '20x16x10',
            downloads: 1400,
            author: 'MetalWorker'
        }
    ]
};

// ============================================
// TRANSLATIONS
// ============================================
const TRANSLATIONS = {
    en: {
        nav_home: 'Home',
        nav_calculator: 'Calculator',
        nav_schematics: 'Schematics',
        nav_blueprints: 'Blueprints',
        nav_stages: 'Stages',
        nav_modinfo: 'Mod Info',
        nav_download: 'Download',
        hero_title: 'Satisfactory Plus',
        hero_subtitle: 'Complete guide for the ultimate overhaul mod — perfect factory experience',
        stat_items: 'Items',
        stat_recipes: 'Recipes',
        stat_tiers: 'Tiers (0-9)',
        stat_buildings: 'Buildings',
        btn_calculator: 'Open Calculator',
        btn_download: 'Download Mod',
        mod_brief: 'SF+ completely overhauls Satisfactory with redesigned progression Tier 0→9, new resources (Aurovite, Kyalite), rebalanced recipes, Refined Power integration, and single-player focused experience',
        calc_title: 'Production Calculator',
        calc_subtitle: 'Calculate production chains with S+ recipes',
        calc_target_item: 'Target Item',
        calc_target_rate: 'Production Rate (/min)',
        calc_tier_filter: 'Tier Filter',
        tier_all: 'All Tiers',
        btn_calculate: 'Calculate',
        btn_export_csv: 'Export CSV',
        btn_export_png: 'Export PNG',
        calc_results: 'Production Chain',
        calc_empty: 'Select an item and click Calculate',
        schem_title: 'Production Schematics',
        schem_subtitle: 'Visual diagrams for key production chains',
        schem_all: 'All',
        schem_basics: 'Basics',
        schem_intermediate: 'Intermediate',
        schem_advanced: 'Advanced',
        schem_nuclear: 'Nuclear',
        bp_title: 'Blueprints Library',
        bp_subtitle: 'Community builds and factory designs',
        bp_search_ph: 'Search blueprints...',
        bp_cat_all: 'All Categories',
        bp_cat_manifold: 'Manifolds',
        bp_cat_balancer: 'Balancers',
        bp_cat_miners: 'Miners',
        bp_cat_power: 'Power Plants',
        bp_cat_storage: 'Storage',
        stage_title: 'Progression Stages',
        stage_subtitle: 'Track your milestone progress (Tier 0-9)',
        stage_overview: 'Overall Progress',
        btn_reset_progress: 'Reset Progress',
        info_title: 'Mod Information',
        info_subtitle: 'Installation, changelog, and community',
        info_install: 'Installation',
        info_install_1: 'Install Satisfactory Mod Loader (SML) ^3.11.1',
        info_install_2: 'Install dependencies: KLib ^4.3.0, ModularUI 2.1.35',
        info_install_3: 'Install Refined Power ^4.0.43, FicsitFarming 4.2.34',
        info_install_4: 'Install Satisfactory Plus via SMR or ficsit.app',
        info_install_5: 'Start NEW save (incompatible with vanilla saves)',
        btn_ficsit: 'Download on Ficsit.app',
        info_dependencies: 'Dependencies',
        table_mod: 'Mod',
        table_version: 'Version',
        info_changelog: 'Latest Changelog (v1.2.3)',
        change_1: 'Added Alternate Recipe: EMF Generator',
        change_2: 'Added Alternate Recipe: Leached Alumina',
        change_3: 'Added recipe: Cotton Fabric',
        change_4: 'MAM Alien Technology tree reset',
        change_5: 'Balance updates for Tier 7-8',
        info_community: 'Community',
        comm_discord: 'KMods Discord',
        comm_reddit: 'r/SatisfactoryGame',
        comm_wiki: 'Official Wiki',
        comm_github: 'GitHub Repos',
        faq_title: 'FAQ',
        faq_q1: 'Where is Caterium?',
        faq_a1: 'Caterium nodes don\'t exist in SF+. Find Aurovite and analyze it in MAM to unlock Caterium-related content',
        faq_q2: 'Multiplayer support?',
        faq_a2: 'Multiplayer is NOT supported in Alpha phase. Attempting multiplayer will cause crashes',
        faq_q3: 'Compatible with vanilla saves?',
        faq_a3: 'No! This mod overhauls the entire game. All new games must play through the tutorial or the game will crash',
        faq_q4: 'How to unlock Ficsit Farming?',
        faq_a4: 'Explore the world and locate Dirt. Analyzing Dirt in the MAM unlocks the Ficsit Farming research tree',
        footer_desc: 'Unofficial community guide for Satisfactory Plus mod',
        footer_links: 'Quick Links',
        footer_credits: 'Credits',
        footer_disclaimer: 'Satisfactory Plus is created by KMods. All game content © Coffee Stain Studios.'
    },
    ru: {
        nav_home: 'Главная',
        nav_calculator: 'Калькулятор',
        nav_schematics: 'Схемы',
        nav_blueprints: 'Чертежи',
        nav_stages: 'Этапы',
        nav_modinfo: 'Инфо о моде',
        nav_download: 'Скачать',
        hero_title: 'Satisfactory Plus',
        hero_subtitle: 'Полный гид по overhaul моду — идеальная фабрика',
        stat_items: 'Предметы',
        stat_recipes: 'Рецепты',
        stat_tiers: 'Уровни (0-9)',
        stat_buildings: 'Здания',
        btn_calculator: 'Открыть калькулятор',
        btn_download: 'Скачать мод',
        mod_brief: 'SF+ полностью перерабатывает Satisfactory с новой прогрессией Tier 0→9, новыми ресурсами (Aurovite, Kyalite), сбалансированными рецептами, интеграцией Refined Power',
        calc_title: 'Калькулятор производства',
        calc_subtitle: 'Расчёт цепочек производства с рецептами S+',
        calc_target_item: 'Целевой предмет',
        calc_target_rate: 'Производство (/мин)',
        calc_tier_filter: 'Фильтр по уровню',
        tier_all: 'Все уровни',
        btn_calculate: 'Рассчитать',
        btn_export_csv: 'Экспорт CSV',
        btn_export_png: 'Экспорт PNG',
        calc_results: 'Цепочка производства',
        calc_empty: 'Выберите предмет и нажмите Рассчитать',
        schem_title: 'Схемы производства',
        schem_subtitle: 'Визуальные диаграммы ключевых цепочек',
        schem_all: 'Все',
        schem_basics: 'Базовые',
        schem_intermediate: 'Средние',
        schem_advanced: 'Продвинутые',
        schem_nuclear: 'Ядерные',
        bp_title: 'Библиотека чертежей',
        bp_subtitle: 'Постройки сообщества и дизайны фабрик',
        bp_search_ph: 'Поиск чертежей...',
        bp_cat_all: 'Все категории',
        bp_cat_manifold: 'Манифольды',
        bp_cat_balancer: 'Балансировщики',
        bp_cat_miners: 'Шахты',
        bp_cat_power: 'Электростанции',
        bp_cat_storage: 'Хранилища',
        stage_title: 'Этапы прогрессии',
        stage_subtitle: 'Отслеживайте прогресс этапов (Tier 0-9)',
        stage_overview: 'Общий прогресс',
        btn_reset_progress: 'Сбросить прогресс',
        info_title: 'Информация о моде',
        info_subtitle: 'Установка, changelog и сообщество',
        info_install: 'Установка',
        info_install_1: 'Установите Satisfactory Mod Loader (SML) ^3.11.1',
        info_install_2: 'Установите зависимости: KLib ^4.3.0, ModularUI 2.1.35',
        info_install_3: 'Установите Refined Power ^4.0.43, FicsitFarming 4.2.34',
        info_install_4: 'Установите Satisfactory Plus через SMR или ficsit.app',
        info_install_5: 'Начните НОВОЕ сохранение (несовместимо с vanilla)',
        btn_ficsit: 'Скачать на Ficsit.app',
        info_dependencies: 'Зависимости',
        table_mod: 'Мод',
        table_version: 'Версия',
        info_changelog: 'Последний Changelog (v1.2.3)',
        change_1: 'Добавлен рецепт: EMF Generator',
        change_2: 'Добавлен рецепт: Leached Alumina',
        change_3: 'Добавлен рецепт: Cotton Fabric',
        change_4: 'Сброс дерева MAM Alien Technology',
        change_5: 'Баланс обновления для Tier 7-8',
        info_community: 'Сообщество',
        comm_discord: 'KMods Discord',
        comm_reddit: 'r/SatisfactoryGame',
        comm_wiki: 'Официальная Wiki',
        comm_github: 'GitHub репозитории',
        faq_title: 'FAQ',
        faq_q1: 'Где Caterium?',
        faq_a1: 'Caterium узлов нет в SF+. Найдите Aurovite и изучите в MAM',
        faq_q2: 'Поддержка мультиплеера?',
        faq_a2: 'Мультиплеер НЕ поддерживается в Alpha. Попытка вызовет краши',
        faq_q3: 'Совместимо с vanilla сохранениями?',
        faq_a3: 'Нет! Мод полностью меняет игру. Нужно новое сохранение',
        faq_q4: 'Как разблокировать Ficsit Farming?',
        faq_a4: 'Найдите Dirt в мире. Анализ в MAM откроет дерево исследований',
        footer_desc: 'Неофициальный гайд сообщества для Satisfactory Plus',
        footer_links: 'Быстрые ссылки',
        footer_credits: 'Авторы',
        footer_disclaimer: 'Satisfactory Plus создан KMods. Контент игры © Coffee Stain Studios.'
    }
};

// ============================================
// STATE MANAGEMENT
// ============================================
let currentLang = 'en';
let userProgress = {};

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initMermaid();
    initNavigation();
    initCalculator();
    initSchematics();
    initBlueprints();
    initStages();
    initLanguage();
    initPWA();
    loadUserProgress();
    updateProgressDisplay();
});

// ============================================
// MERMAID DIAGRAMS
// ============================================
function initMermaid() {
    mermaid.initialize({
        startOnLoad: false,
        theme: 'dark',
        themeVariables: {
            primaryColor: '#00d4ff',
            primaryTextColor: '#e8e8e8',
            primaryBorderColor: '#00d4ff',
            lineColor: '#7b2cbf',
            secondaryColor: '#1a1a2e',
            tertiaryColor: '#16213e'
        }
    });
}

// ============================================
// NAVIGATION
// ============================================
function initNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Mobile toggle
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
    
    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Active link highlighting
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.getAttribute('href').startsWith('#')) {
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// ============================================
// CALCULATOR
// ============================================
function initCalculator() {
    const targetItem = document.getElementById('targetItem');
    const calculateBtn = document.getElementById('calculateBtn');
    const exportCsvBtn = document.getElementById('exportCsvBtn');
    const exportPngBtn = document.getElementById('exportPngBtn');
    
    // Populate item dropdown
    SPLUS_DATA.items.forEach(item => {
        const option = document.createElement('option');
        option.value = item.id;
        option.textContent = item.name;
        targetItem.appendChild(option);
    });
    
    // Calculate button
    calculateBtn.addEventListener('click', () => {
        const itemId = targetItem.value;
        const rate = parseInt(document.getElementById('targetRate').value) || 60;
        const tierFilter = document.getElementById('tierFilter').value;
        
        if (!itemId) {
            showToast('Please select an item', 'error');
            return;
        }
        
        calculateProduction(itemId, rate, tierFilter);
    });
    
    // Export buttons
    exportCsvBtn.addEventListener('click', exportToCsv);
    exportPngBtn.addEventListener('click', exportToPng);
}

function calculateProduction(itemId, targetRate, tierFilter) {
    const resultsPanel = document.getElementById('calcResults');
    const statusEl = document.getElementById('calcStatus');
    const summaryEl = document.getElementById('calcSummary');
    
    const recipe = SPLUS_DATA.recipes[itemId];
    if (!recipe) {
        resultsPanel.innerHTML = '<div class="empty-state">Recipe not found</div>';
        statusEl.className = 'calc-status error';
        statusEl.textContent = 'Error';
        return;
    }
    
    // Filter by tier
    if (tierFilter !== 'all' && recipe.tier > parseInt(tierFilter)) {
        statusEl.className = 'calc-status error';
        statusEl.textContent = 'Item requires higher tier';
    }
    
    // Calculate production chain
    const chain = buildProductionChain(itemId, targetRate);
    
    // Render results
    let html = `
        <div class="calc-result-item header">
            <span>Item</span>
            <span>Rate/min</span>
            <span>Machines</span>
            <span>Inputs → Outputs</span>
        </div>
    `;
    
    chain.forEach(step => {
        const machines = Math.ceil(step.rate / (60 / recipe.time));
        const inputs = step.inputs.map(i => `${i.amount}/min ${i.item}`).join(', ');
        const outputs = step.outputs.map(o => `${o.amount}/min ${o.item}`).join(', ');
        
        html += `
            <div class="calc-result-item">
                <span class="item-name">${step.name}</span>
                <span class="rate">${step.rate}/min</span>
                <span class="machines">${machines}x ${recipe.machine}</span>
                <span class="io">${inputs} → ${outputs}</span>
            </div>
        `;
    });
    
    resultsPanel.innerHTML = html;
    statusEl.className = 'calc-status success';
    statusEl.textContent = 'Calculated';
    
    // Summary
    const totalMachines = chain.reduce((sum, step) => sum + Math.ceil(step.rate / (60 / recipe.time)), 0);
    summaryEl.innerHTML = `
        <strong>Total Machines:</strong> ${totalMachines}x ${recipe.machine}<br>
        <strong>Base Recipe Time:</strong> ${recipe.time}s<br>
        <strong>Tier:</strong> ${recipe.tier}
    `;
    
    // Store for export
    window.currentCalculation = { chain, recipe, targetRate };
}

function buildProductionChain(itemId, targetRate, visited = new Set()) {
    const chain = [];
    const recipe = SPLUS_DATA.recipes[itemId];
    
    if (!recipe || visited.has(itemId)) return chain;
    visited.add(itemId);
    
    const cyclesPerMinute = 60 / recipe.time;
    const machinesNeeded = targetRate / cyclesPerMinute;
    const actualRate = machinesNeeded * cyclesPerMinute;
    
    chain.push({
        name: recipe.name,
        rate: Math.round(actualRate),
        inputs: recipe.inputs.map(i => ({ item: i.item, amount: Math.round(i.amount * actualRate) })),
        outputs: recipe.outputs.map(o => ({ item: o.item, amount: Math.round(o.amount * actualRate) }))
    });
    
    // Recursively process inputs
    recipe.inputs.forEach(input => {
        const inputRecipe = SPLUS_DATA.recipes[input.item.toLowerCase().replace(/\s+/g, '_')];
        if (inputRecipe) {
            const inputRate = Math.round(input.amount * actualRate);
            const subChain = buildProductionChain(input.item.toLowerCase().replace(/\s+/g, '_'), inputRate, visited);
            chain.push(...subChain);
        }
    });
    
    return chain;
}

function exportToCsv() {
    if (!window.currentCalculation) {
        showToast('No calculation to export', 'error');
        return;
    }
    
    const { chain, targetRate } = window.currentCalculation;
    let csv = 'Item,Rate/Machines,Inputs,Outputs\n';
    
    chain.forEach(step => {
        const inputs = step.inputs.map(i => `${i.amount} ${i.item}`).join('; ');
        const outputs = step.outputs.map(o => `${o.amount} ${o.item}`).join('; ');
        csv += `"${step.name}","${step.rate}","${inputs}","${outputs}"\n`;
    });
    
    downloadFile(csv, 'production_chain.csv', 'text/csv');
    showToast('CSV exported!', 'success');
}

function exportToPng() {
    showToast('PNG export coming soon', 'info');
}

function downloadFile(content, filename, type) {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
}

// ============================================
// SCHEMATICS
// ============================================
function initSchematics() {
    const grid = document.getElementById('schematicsGrid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    // Render all schematics
    renderSchematics(SPLUS_DATA.schematics);
    
    // Filter functionality
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const category = btn.dataset.category;
            const filtered = category === 'all' 
                ? SPLUS_DATA.schematics 
                : SPLUS_DATA.schematics.filter(s => s.category === category);
            
            renderSchematics(filtered);
        });
    });
}

function renderSchematics(schematics) {
    const grid = document.getElementById('schematicsGrid');
    grid.innerHTML = schematics.map(s => `
        <div class="schematic-card" data-category="${s.category}">
            <div class="schematic-preview">${s.icon}</div>
            <div class="schematic-content">
                <h3>${s.name}</h3>
                <p>${s.description}</p>
                <div class="schematic-tags">
                    <span class="schematic-tag">Tier ${s.tier}</span>
                    ${s.items.slice(0, 3).map(item => `<span class="schematic-tag">${item}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// ============================================
// BLUEPRINTS
// ============================================
function initBlueprints() {
    const grid = document.getElementById('blueprintsGrid');
    const searchInput = document.getElementById('bpSearch');
    const categorySelect = document.getElementById('bpCategory');
    
    renderBlueprints(SPLUS_DATA.blueprints);
    
    searchInput.addEventListener('input', filterBlueprints);
    categorySelect.addEventListener('change', filterBlueprints);
}

function renderBlueprints(blueprints) {
    const grid = document.getElementById('blueprintsGrid');
    grid.innerHTML = blueprints.map(bp => `
        <div class="blueprint-card">
            <div class="blueprint-thumbnail">
                ${bp.icon}
                <div class="blueprint-overlay">
                    <button class="btn btn-primary" onclick="downloadBlueprint('${bp.id}')">Download</button>
                </div>
            </div>
            <div class="blueprint-info">
                <h3>${bp.name}</h3>
                <div class="blueprint-meta">
                    <span>📐 ${bp.size}</span>
                    <span>⬇️ ${bp.downloads}</span>
                </div>
                <p style="color: var(--text-muted); font-size: 0.85rem;">by ${bp.author}</p>
                <button class="blueprint-download" onclick="downloadBlueprint('${bp.id}')">
                    Download .blueprint
                </button>
            </div>
        </div>
    `).join('');
}

function filterBlueprints() {
    const search = document.getElementById('bpSearch').value.toLowerCase();
    const category = document.getElementById('bpCategory').value;
    
    let filtered = SPLUS_DATA.blueprints;
    
    if (category !== 'all') {
        filtered = filtered.filter(bp => bp.category === category);
    }
    
    if (search) {
        filtered = filtered.filter(bp => 
            bp.name.toLowerCase().includes(search) ||
            bp.author.toLowerCase().includes(search)
        );
    }
    
    renderBlueprints(filtered);
}

function downloadBlueprint(id) {
    showToast(`Downloading blueprint: ${id}`, 'success');
    // In real implementation, this would download actual .blueprint file
}

// ============================================
// STAGES / PROGRESSION
// ============================================
function initStages() {
    const container = document.getElementById('stagesContainer');
    
    container.innerHTML = SPLUS_DATA.stages.map((stage, index) => `
        <div class="stage-card">
            <div class="stage-header" onclick="toggleStage(${index})">
                <div class="stage-title">
                    <span class="stage-icon">${stage.icon}</span>
                    <span>Tier ${stage.tier}: ${stage.name}</span>
                </div>
                <div class="stage-status">
                    <div class="stage-check ${userProgress[stage.tier] ? 'completed' : ''}" id="stageCheck${stage.tier}"></div>
                </div>
            </div>
            <div class="stage-content ${userProgress[stage.tier] ? 'active' : ''}" id="stageContent${stage.tier}">
                <div class="stage-requirements">
                    <h4>Requirements</h4>
                    <div class="requirements-list">
                        ${stage.requirements.map(r => `
                            <div class="requirement-item">
                                <span>${r.item}</span>
                                <span>${r.amount}x</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div class="stage-unlocks">
                    <h4>Unlocks</h4>
                    <div class="unlocks-list">
                        ${stage.unlocks.map(u => `<span class="unlock-item">${u}</span>`).join('')}
                    </div>
                </div>
                <button class="btn ${userProgress[stage.tier] ? 'btn-danger' : 'btn-success'}" 
                        onclick="toggleStageComplete(${stage.tier})" 
                        id="stageBtn${stage.tier}">
                    ${userProgress[stage.tier] ? 'Mark Incomplete' : 'Mark Complete'}
                </button>
            </div>
        </div>
    `).join('');
}

function toggleStage(index) {
    const stage = SPLUS_DATA.stages[index];
    const content = document.getElementById(`stageContent${stage.tier}`);
    content.classList.toggle('active');
}

function toggleStageComplete(tier) {
    userProgress[tier] = !userProgress[tier];
    saveUserProgress();
    initStages();
    updateProgressDisplay();
    showToast(`Tier ${tier} marked as ${userProgress[tier] ? 'complete' : 'incomplete'}`, 'success');
}

function updateProgressDisplay() {
    const completed = Object.values(userProgress).filter(v => v).length;
    const total = SPLUS_DATA.stages.length;
    const percentage = Math.round((completed / total) * 100);
    
    document.getElementById('progressFill').style.width = `${percentage}%`;
    document.getElementById('progressText').textContent = `${percentage}%`;
}

function loadUserProgress() {
    const saved = localStorage.getItem('splus_progress');
    if (saved) {
        userProgress = JSON.parse(saved);
    }
}

function saveUserProgress() {
    localStorage.setItem('splus_progress', JSON.stringify(userProgress));
}

document.getElementById('resetProgress')?.addEventListener('click', () => {
    if (confirm('Reset all progress?')) {
        userProgress = {};
        saveUserProgress();
        initStages();
        updateProgressDisplay();
        showToast('Progress reset', 'info');
    }
});

// ============================================
// LANGUAGE
// ============================================
function initLanguage() {
    const langToggle = document.getElementById('langToggle');
    
    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'ru' : 'en';
        updateLanguage();
    });
    
    // Load saved language
    const savedLang = localStorage.getItem('splus_lang');
    if (savedLang) {
        currentLang = savedLang;
        updateLanguage();
    }
}

function updateLanguage() {
    localStorage.setItem('splus_lang', currentLang);
    const t = TRANSLATIONS[currentLang];
    
    document.getElementById('langToggle').innerHTML = `
        <span class="flag">${currentLang === 'en' ? '🇬🇧' : '🇷🇺'}</span>
        <span class="lang-code">${currentLang.toUpperCase()}</span>
    `;
    
    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.dataset.lang;
        if (t[key]) {
            el.textContent = t[key];
        }
    });
    
    document.querySelectorAll('[data-lang-ph]').forEach(el => {
        const key = el.dataset.langPh;
        if (t[key]) {
            el.placeholder = t[key];
        }
    });
}

// ============================================
// PWA
// ============================================
function initPWA() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js')
            .then(() => console.log('Service Worker registered'))
            .catch(err => console.error('SW registration failed:', err));
    }
}

// ============================================
// TOAST NOTIFICATIONS
// ============================================
function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type} show`;
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ============================================
// UTILITY FUNCTIONS
// ============================================
window.downloadBlueprint = downloadBlueprint;
window.toggleStage = toggleStage;
window.toggleStageComplete = toggleStageComplete;