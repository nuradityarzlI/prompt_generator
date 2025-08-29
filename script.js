// =======================================================================
// DATA STORE LENGKAP
// =======================================================================
const PROMPT_OPTIONS = {
    model: {
        fields: ['sceneStyle', 'mainSubject', 'ethnicity', 'styling', 'expression', 'cameraAngle', 'lighting', 'background', 'mood', 'references', 'cameraLens'],
        fieldLabels: { sceneStyle: "Scene Style / Photography", mainSubject: "Main Subject", ethnicity: "Ethnicity / Skin Tone / Origin", styling: "Styling (Hair / Outfit / Makeup)", expression: "Expression / Gesture", cameraAngle: "Camera Angle & Framing", lighting: "Lighting", background: "Background", mood: "Mood & Aesthetic", references: "Visual References", cameraLens: "Camera Model + Lens Type" },
        conservative: { sceneStyle: ["editorial portrait", "studio portrait", "fashion lookbook", "beauty shot", "corporate headshot", "catalogue clean shot", "bridal studio session", "black & white studio headshot", "formal fashion editorial", "graduation portrait"], mainSubject: ["single female model", "single male model", "duo portrait", "business professional", "family/lifestyle group", "academic scholar", "classical dancer", "bride/groom", "executive profile", "politician headshot"], ethnicity: ["Caucasian light", "East Asian fair", "South Asian wheatish", "African deep", "Middle Eastern olive", "Nordic fair", "Mediterranean tan", "Native American warm", "Central European pale", "Sub-Saharan deep"], styling: ["natural makeup", "classic attire", "business suit", "casual wear", "flowing hair", "cultural formal dress", "tuxedo/ball gown", "neat bob haircut", "minimal jewelry", "everyday conservative style"], expression: ["soft smile", "contemplative look", "confident gaze", "gentle expression", "relaxed posture", "neutral elegance", "polite smile", "formal standing pose", "hand-folded posture", "classic calm presence"], cameraAngle: ["eye-level medium shot", "close-up portrait", "three-quarter body", "waist-up shot", "straight-on symmetry", "classic profile", "full-length classic", "balanced corporate framing", "group lineup straight-on", "symmetrical centered composition"], lighting: ["softbox key + fill", "natural window light", "golden hour backlight", "high-key studio", "balanced daylight", "three-point clean", "ring light glow", "clean white bounce", "warm golden indoor", "diffused key light"], background: ["seamless paper", "clean white studio", "neutral textured wall", "soft foliage", "classic drapery", "corporate office backdrop", "neutral gradient", "polished wood", "hotel wall", "library shelves"], mood: ["timeless editorial", "clean minimalist", "elegant sophistication", "professional polish", "understated beauty", "classical prestige", "documentary neutral", "heritage cultural pride", "corporate timeless", "commercial elegance"], references: ["Vogue", "Harper’s Bazaar", "WSJ", "Vanity Fair", "COS campaign", "Ralph Lauren ads", "Jil Sander minimal", "National Geographic portraits", "Fortune 500 campaigns", "Smithsonian archives"], cameraLens: ["Canon EOS R5 + 85mm", "Nikon Z8 + 70–200mm", "Sony A7R V + 50mm", "Fujifilm GFX 100S + 110mm", "Hasselblad X2D + 80mm", "Canon 6D + 50mm", "Nikon D850 + 85mm", "Sony A7 III + 70–200mm", "Hasselblad H6D + 100mm", "Fujifilm X-T4 + 35mm"] },
        balanced: { sceneStyle: ["lifestyle candid", "street fashion editorial", "cinematic portrait", "environmental portrait", "rooftop editorial", "café lifestyle set", "seaside fashion spread", "documentary style", "luxury commercial lookbook", "art gallery editorial set"], mainSubject: ["creative duo", "small group (3–4)", "performance artist", "fashion collective", "athlete editorial", "musician portrait", "influencer figure", "couple candid", "fashion blogger", "theatre troupe"], ethnicity: ["Latina/Latino medium", "Mixed heritage neutral", "Afro-Caribbean warm", "Eastern European pale", "Southeast Asian golden", "Turkish olive", "Brazilian golden", "Caribbean bronze", "Pacific Islander glow", "Pan-Asian neutral"], styling: ["bold makeup accents", "streetwear chic", "evening wear glamour", "retro-inspired fashion", "smart casual with layers", "sporty chic", "travel fashion", "minimalist editorial", "layered accessories", "contemporary tailoring"], expression: ["playful gesture", "elegant turn", "candid laugh", "confident walk", "casual interaction", "joyful look", "subtle flirt", "introspective glance", "natural hand-in-pocket", "dynamic stride"], cameraAngle: ["over-the-shoulder", "high-angle crop", "low-angle perspective", "lifestyle wide shot", "diagonal crop", "candid side framing", "tilted composition", "medium wide urban shot", "casual creative crop", "cinematic walk-by shot"], lighting: ["cinematic spotlight + fill", "moody soft shadow", "neon rim accent", "cloudy daylight diffuse", "candle glow", "mixed practicals", "urban streetlights", "reflective bounce", "colored gels accent", "warm ambient light"], background: ["urban street", "rooftop skyline", "café interior", "seaside rocks", "boutique store", "subway station", "industrial warehouse", "lifestyle home interior", "fashion runway", "contemporary architecture"], mood: ["cinematic moody", "vibrant commercial", "contemporary chic", "youthful playful", "luxury modern", "romantic editorial", "aspirational lifestyle", "stylish urban chic", "polished dynamic", "cinematic realism"], references: ["Mario Testino fashion", "Annie Leibovitz portraits", "A24 stills", "Zara lookbook", "Dior campaigns", "The Row luxury", "Prada resort shoots", "Gucci lifestyle", "Uniqlo editorial", "H&M commercial"], cameraLens: ["Canon 5D MkIV + 35mm", "Sony A7 IV + 24–70mm", "Nikon Z9 + 50mm", "Leica SL2 + 90mm", "Fujifilm X-T5 + 56mm", "Canon R5 + 35mm f/1.4", "Sony A7R V + 24–70mm", "Leica SL2 + 50mm Summilux", "Nikon Z9 + 24–120mm", "Fujifilm GFX 100 + 63mm"] },
        experimental: { sceneStyle: ["conceptual portrait", "surreal fashion editorial", "avant-garde beauty shot", "performance art documentation", "cyberpunk fantasy scene", "underwater conceptual portrait", "infrared portrait session", "mirror maze surreal shoot", "holographic fashion editorial", "glitch-inspired portrait"], mainSubject: ["androgynous figure", "conceptual character", "masked performer", "abstract human form", "augmented avatar", "mannequin hybrid", "multi-exposure identity", "choreographed ensemble", "cyborg-inspired model", "silhouette-only subject"], ethnicity: ["ambiguous ethnicity", "painted body/skin treatment", "digitally morphed features", "hybrid cultural mix", "translucent metallic skin", "UV-reactive paint", "holographic skin effect", "albino stylization", "cyber-synthetic skin tone", "surreal monochrome body paint"], styling: ["avant-garde makeup", "sculptural hair", "holographic styling", "liquid/surreal fashion", "cybernetic prosthetics", "gravity-defying hair", "sculptural textile outfit", "liquid latex wear", "3D printed attire", "fragmented mirror styling"], expression: ["intense stare", "extreme pose", "distorted gesture", "surreal gaze", "scream with blur", "levitating pose", "fragmented body twist", "mirror-hand reflection", "avant-garde theatrical stare", "otherworldly stillness"], cameraAngle: ["worm’s-eye extreme", "bird’s-eye overhead", "Dutch tilt", "fisheye distortion", "kaleidoscope overlay", "fragmented crop", "underwater half-submerged", "drone top-down", "reflection POV", "immersive distorted POV"], lighting: ["projection mapping", "harsh direct flash", "strobe freeze", "abstract shadow play", "silhouette backlight", "rotating projectors", "glitch strobes", "laser grid", "colored fog illumination", "thermal imaging treatment"], background: ["holographic chamber", "infinite mirror", "liquid surface", "abstract sculpture set", "surreal desert void", "glitch digital wall", "neon projection backdrop", "smoke-filled room", "conceptual architecture", "floating set design"], mood: ["avant-garde surreal", "dreamlike abstraction", "bold chaos", "glitch cyberpunk", "mythological surreal", "distorted theatrical", "conceptual abstraction", "raw expressive", "surreal hallucination", "high-fashion disruption"], references: ["Nick Knight SHOWstudio", "Tim Walker surreal", "Dazed Magazine", "Comme des Garçons visuals", "Balenciaga dystopian", "Vogue Italia experimental", "Helmut Newton bold", "i-D conceptual", "Björk visuals", "arthouse exhibition stills"], cameraLens: ["Phase One XF IQ4 + fisheye", "Canon R5C + tilt-shift 24mm", "RED Komodo + wide cine", "Sony Venice + anamorphic", "Blackmagic 6K + probe lens", "RED Komodo + 16mm cine", "Phase One XF IQ4 + fisheye 8mm", "Blackmagic URSA + vintage cine glass", "Sony A7R IV + 14mm ultra-wide", "Canon R5 + tilt-shift 50mm"] },
        vintage: { sceneStyle: ["Polaroid instant snapshot", "1970s lifestyle editorial", "1980s film fashion cover", "analog street portrait", "1990s magazine spread", "bohemian 70s outdoor set", "retro film star promo", "80s music video still", "90s fashion runway backstage", "Super 8mm style candid"], mainSubject: ["retro film star archetype", "bohemian couple", "90s supermodel inspiration", "Polaroid family portrait", "lifestyle retro muse", "70s runway muse", "vintage cinema actor", "80s glam rocker", "candid archival subject", "analog celebrity look"], ethnicity: ["Mediterranean tan (70s vibe)", "Scandinavian pale", "Afro 80s editorial look", "Indigenous retro representation", "pan-ethnic retro group", "vintage Hollywood golden look", "80s supermodel tones", "70s disco glam features", "Polaroid neutral cast", "archival global diversity"], styling: ["bohemian chic", "70s flared fashion", "80s power suit + bold makeup", "90s minimal grunge", "Polaroid candid casual", "retro disco attire", "classic Hollywood glamour", "denim 90s streetwear", "leather 80s rocker look", "vintage editorial chic"], expression: ["glamorous 80s stare", "candid Polaroid laughter", "bohemian free spirit", "nostalgic melancholy", "supermodel power gaze", "70s disco joy", "retro editorial calm", "90s casual confidence", "vintage lifestyle warmth", "archival candid"], cameraAngle: ["waist-up analog frame", "Polaroid straight-on", "70s standing full body", "80s soft-focus close-up", "90s magazine crop", "archival VHS angle", "candid snapshot framing", "vintage studio bust shot", "filmic slow zoom frame", "Super 8 jitter framing"], lighting: ["tungsten warm lamp", "incandescent bulb glow", "vintage studio flash", "continuous hot lights", "candlelit warmth", "Polaroid daylight harsh", "film-era umbrella flash", "halogen lamp vibe", "neon diner glow", "analog gradient wash"], background: ["retro diner tiles", "70s patterned wallpaper", "80s gradient studio backdrop", "wood-paneled living room", "Polaroid plain wall", "VHS home interior", "retro carpet studio", "disco floor backdrop", "analog tiled bathroom", "archival poster wall"], mood: ["nostalgic charm", "bohemian free spirit", "glamorous 80s gloss", "90s minimal cool", "analog film authenticity", "disco glam energy", "Polaroid candid mood", "archival retro gloss", "retro lifestyle glam", "timeless film-grain chic"], references: ["Richard Avedon classic", "Irving Penn Vogue", "Guy Bourdin 70s", "Herb Ritts 80s B&W", "Slim Aarons lifestyle", "Polaroid SX-70 ads", "Kodak film campaigns", "90s Calvin Klein", "Bruce Weber lifestyle", "MTV 80s/90s fashion"], cameraLens: ["Leica M6 + 50mm Summicron", "Nikon FM2 + 35mm AI-S", "Canon AE-1 + 50mm FD", "Pentax 67 + 105mm", "Mamiya RZ67 + 110mm", "Contax T2 + 38mm Zeiss", "Polaroid SX-70", "Hasselblad 500CM + 80mm", "Olympus OM-1 + 50mm", "Super 8mm film camera"] }
    },
    product: {
        fields: ['productType', 'material', 'surface', 'composition', 'lightingStyle', 'background', 'mood', 'extraElements', 'references', 'cameraLens'],
        fieldLabels: { productType: "Product Type", material: "Material / Texture", surface: "Surface / Setting", composition: "Composition Style", lightingStyle: "Lighting Style", background: "Background / Environment", mood: "Mood & Aesthetic", extraElements: "Extra Visual Elements", references: "Reference Style", cameraLens: "Camera & Lens" },
        conservative: { productType: ["skincare bottle", "perfume flacon", "luxury watch", "leather bag", "beverage can", "premium laptop", "jewelry ring", "fountain pen", "wine bottle", "classic book cover"], material: ["frosted glass", "polished metal", "matte plastic", "leather grain", "satin fabric", "glossy ceramic", "brushed steel", "clear crystal", "lacquer wood", "smooth marble"], surface: ["marble slab", "wooden desk", "acrylic pedestal", "velvet cloth", "neutral acrylic base", "luxury glass table", "seamless riser", "granite platform", "classic studio riser", "polished stone"], composition: ["hero single centered", "classic flat-lay", "trio lineup", "pyramid stack", "product with reflection", "catalog front-facing", "grid layout", "symmetrical duo", "elevated angle hero", "clean spotlight shot"], lightingStyle: ["clean catalog three-point", "daylight-balanced studio", "golden hour window light", "high-key seamless", "softbox gradient", "rim highlight", "balanced flash", "even soft fill", "commercial diffuse", "spotlight accent"], background: ["seamless white", "solid black", "neutral gray", "gradient backdrop", "velvet drape", "luxury stone wall", "studio beige", "soft pastel", "catalog neutral", "premium catalog backdrop"], mood: ["premium clean", "minimalist timeless", "professional polish", "heritage classic", "natural organic", "luxury timeless", "tech minimal", "refined elegance", "catalog polish", "understated prestige"], extraElements: ["subtle reflection", "catalog shadow", "natural highlight", "controlled sparkle", "faint mist", "clean specular glow", "halo light ring", "smooth gradient halo", "soft rim", "premium clean shine"], references: ["Rolex print ads", "Chanel perfume campaigns", "Tiffany jewelry catalog", "Apple clean product", "Muji minimal design", "Dior timeless ads", "Cartier luxury catalog", "Hermes timeless campaigns", "Montblanc lifestyle", "Hugo Boss classic ads"], cameraLens: ["Canon EOS R5 + 100mm macro", "Nikon Z7 + 105mm macro", "Sony A7R IV + 90mm macro", "Hasselblad X2D + 80mm", "Fujifilm GFX 100 + 120mm", "Canon 6D + 100mm", "Nikon D850 + 85mm", "Sony A7 III + 55mm", "Hasselblad H6D + 100mm", "Fujifilm X-T4 + 35mm"] },
        balanced: { productType: ["designer sneaker", "sunglasses", "premium headphones", "tote bag", "smartphone", "coffee takeaway cup", "fashion accessory", "smartwatch", "lifestyle mug", "travel luggage"], material: ["brushed aluminum", "glossy enamel", "woven textile", "transparent acrylic", "carbon fiber", "tempered glass", "velvet fabric", "anodized metal", "stone composite", "soft matte rubber"], surface: ["lifestyle bathroom counter", "industrial tabletop", "terrazzo floor", "colored plexiglass", "café wooden table", "lifestyle home desk", "subway tile counter", "concrete shelf", "pastel painted block", "boutique display"], composition: ["lifestyle in-hand", "diagonal framing", "side angled showcase", "close-up detail", "natural scatter layout", "stacked arrangement", "lifestyle with props", "dynamic crop", "casual over-the-table", "angled tilted setup"], lightingStyle: ["cinematic spotlight", "moody rim light", "neon accent glow", "cloudy daylight", "mixed warm + cool gels", "reflective bounce", "indirect soft glow", "urban streetlight mimic", "natural window daylight", "color block fill"], background: ["lifestyle bathroom", "urban desk", "rooftop daylight", "boutique store", "industrial interior", "colorful pastel blocks", "subway wall", "modern kitchen counter", "café table", "lifestyle living room"], mood: ["vibrant commercial", "lifestyle premium", "playful youthful", "cinematic stylish", "luxury contemporary", "aspirational modern", "trendy editorial", "casual lifestyle", "brand-forward energy", "glossy premium"], extraElements: ["splash water", "coffee steam", "flying petals", "fabric motion", "glowing accent gels", "subtle smoke haze", "lifestyle props", "scattered accessories", "natural liquid drops", "casual environmental props"], references: ["Nike e-comm", "Adidas commercial", "Samsung lifestyle", "Sephora campaigns", "Zara accessories", "COS minimal modern", "Prada fashion catalog", "H&M lifestyle ads", "Uniqlo clean commercial", "Sony stylish promo"], cameraLens: ["Canon 5D MkIV + 50mm", "Sony A7 IV + 24–70mm", "Nikon Z9 + 70–200mm", "Fujifilm X-T5 + 56mm", "Leica SL2 + 90mm", "Canon R5 + 35mm f/1.4", "Sony A7R V + 24–70mm", "Leica SL2 + 50mm Summilux", "Nikon Z9 + 24–120mm", "Panasonic S1R + 50mm"] },
        experimental: { productType: ["floating tech gadget", "fragmented sculpture object", "surreal cosmetic form", "liquid-shaped container", "holographic wearable", "AI-designed prototype", "levitating orb device", "bioluminescent capsule", "glitch-inspired gadget", "modular abstract product"], material: ["liquid chrome", "iridescent holographic", "translucent resin", "shifting textures", "bio-organic skin", "glitch reflective surface", "fractal crystalline", "fluid gel material", "neon reactive polymer", "morphing nanomaterial"], surface: ["water ripple tray", "mirrored infinity pedestal", "fractured glass platform", "levitating stage", "holographic cube riser", "neon acrylic pedestal", "digital projection floor", "smoke-filled stand", "liquid surface holder", "surreal floating stage"], composition: ["floating cluster", "exploded-view assembly", "fisheye distortion", "surreal collage", "fragmented layering", "levitating spiral", "multi-frame overlay", "kaleidoscope arrangement", "liquid morph display", "shattered composition"], lightingStyle: ["glitch strobes", "projection mapping", "harsh overexposure", "neon splash glow", "silhouette glow edges", "thermal light effect", "rotating colored beams", "hard flash freeze", "strobe rainbow split", "laser grid pattern"], background: ["surreal CGI void", "liquid mercury backdrop", "infinite mirror wall", "neon holographic set", "glitch projection wall", "digital desert void", "smoke-filled space", "abstract sculpture wall", "glowing cube chamber", "fragmented reality background"], mood: ["surreal avant-garde", "dreamlike conceptual", "edgy futuristic", "cyber-organic chaos", "glitch abstraction", "fragmented surreal", "alien industrial", "hyper-real fashion-tech", "bold dream-state", "impossible sci-fi vibe"], extraElements: ["shattered fragments", "liquid explosion", "holographic aura", "neon particle trails", "abstract projection overlays", "glitch fragments", "levitating debris", "glowing dust particles", "surreal fire sparks", "floating geometric props"], references: ["Balenciaga dystopian", "Comme des Garçons product art", "Dazed surreal sets", "Nick Knight SHOWstudio", "Tim Walker fantasy objects", "Björk product visuals", "Vogue Italia experimental ads", "conceptual gallery props", "fashion-tech art shoots", "cyber-installation campaigns"], cameraLens: ["Phase One XF IQ4 + tilt-shift", "RED Komodo + probe lens", "Sony Venice + anamorphic", "Blackmagic 6K + vintage cine glass", "Canon R5C + fisheye 14mm", "RED Helium + 18mm", "Phase One + macro tilt-shift", "Sony A7R IV + 15mm", "Canon C500 MkII + tilt-shift", "Blackmagic Pocket 6K + probe"] },
        vintage: { productType: ["vinyl record sleeve", "cassette tape player", "retro analog camera", "70s soda can", "typewriter machine", "Walkman cassette", "rotary phone", "instant Polaroid camera", "VHS tape", "vintage wrist radio"], material: ["bakelite plastic", "brushed aluminum", "matte painted tin", "corduroy fabric", "aged leather", "retro paper labels", "chrome-plated steel", "vinyl plastic gloss", "80s plastic neon", "analog print texture"], surface: ["checkered diner table", "vintage kitchen counter", "80s tiled bathroom", "wood-paneled desk", "shag carpet surface", "patterned retro rug", "Polaroid tabletop", "VHS home cabinet", "disco mirrored floor", "neon diner counter"], composition: ["Polaroid tabletop still-life", "70s print ad lineup", "80s catalog symmetry", "retro magazine spread", "candid desk arrangement", "analog casual placement", "archival commercial pose", "VHS screen grab shot", "lifestyle candid retro crop", "grainy ad product lineup"], lightingStyle: ["tungsten warm lamp", "incandescent bulb glow", "vintage studio flash umbrellas", "continuous hot light", "candlelit product", "Polaroid flash burst", "80s catalog gradient light", "neon diner sign glow", "VHS camcorder harsh flash", "retro gradient wash"], background: ["retro diner tiles", "wood-paneled room", "80s wallpaper", "Polaroid white wall", "shag carpet room", "disco neon backdrop", "tiled bathroom retro", "VHS home wall", "archival film set", "analog studio drape"], mood: ["nostalgic retro charm", "70s lifestyle gloss", "80s glamorous catalog", "90s minimal chic", "Polaroid candid vibe", "analog warm nostalgia", "disco glam aesthetic", "retro playful design", "MTV 90s advertising", "analog film texture mood"], extraElements: ["dust particles in light", "Polaroid frame overlay", "retro price tag", "vintage magazine text overlay", "film scratches", "VHS timestamp corner", "faded ad borders", "retro product box prop", "instant film aesthetic", "archival logo stamp"], references: ["Coca-Cola 70s print ads", "Polaroid SX-70 campaigns", "Kodak film catalog", "80s Sony Walkman ads", "90s Calvin Klein product shots", "retro Nike sneakers catalog", "Marlboro lifestyle ads", "Pepsi 80s neon poster", "VHS camcorder product still", "old Vogue retro spreads"], cameraLens: ["Nikon FM2 + 50mm AI-S", "Canon AE-1 + 50mm FD", "Leica M6 + 35mm Summicron", "Pentax 67 + 105mm", "Mamiya RZ67 + 110mm", "Contax T2 + 38mm", "Polaroid SX-70 instant", "Hasselblad 500CM + 80mm", "Olympus OM-1 + 50mm", "VHS camcorder lens"] }
    },
    film: {
        fields: ['genre', 'sceneType', 'characters', 'setting', 'timeOfDay', 'cameraMovement', 'mood', 'visualAesthetic', 'references', 'cameraLens', 'characterAnchor', 'wardrobeLock', 'permanentProps', 'hairMakeup', 'characterRelationship'],
        fieldLabels: { genre: "Genre", sceneType: "Scene Type", characters: "Character(s)", setting: "Setting / Location", timeOfDay: "Time of Day / Lighting", cameraMovement: "Camera Movement & Framing", mood: "Mood / Atmosphere", visualAesthetic: "Visual Aesthetic", references: "Reference Style", cameraLens: "Camera & Lens", characterAnchor: "Character Anchor / Identity", wardrobeLock: "Wardrobe Lock (Main Outfit)", permanentProps: "Permanent Props (Always Present)", hairMakeup: "Hair & Makeup Details", characterRelationship: "Character Relationship / Interaction Style" },
        conservative: { genre: ["period drama", "romantic comedy", "slice-of-life", "historical biopic", "family melodrama", "coming-of-age", "literary adaptation", "courtroom drama", "social realism", "classic love story"], sceneType: ["heartfelt dialogue", "family reunion", "meet-cute", "farewell scene", "classroom lesson", "dinner table", "park bench talk", "wedding vow", "reunion hug", "hospital bedside talk"], characters: ["protagonist monologue", "romantic duo", "family group", "mentor/student", "siblings", "village elder", "politician speech", "child with parent", "teacher & student", "grieving widow"], setting: ["suburban home", "countryside field", "café interior", "school classroom", "cozy street", "family living room", "church", "local library", "park", "city hall"], timeOfDay: ["morning daylight", "golden hour sunset", "candlelit dinner", "overcast afternoon", "lamplight night", "natural dusk", "fluorescent classroom", "firelit night", "daylight kitchen", "clear noon light"], cameraMovement: ["locked-off wide", "steady dolly-in", "symmetrical medium", "slow pan", "classic OTS", "tripod profile", "static two-shot", "crane reveal", "balanced tracking", "establishing wide"], mood: ["heartfelt sincerity", "hopeful calm", "bittersweet nostalgia", "serene intimacy", "professional restraint", "warm familial", "gentle melancholy", "tender romantic", "grounded realism", "solemn prestige"], visualAesthetic: ["classic 35mm film", "sepia warm palette", "glossy clean", "subtle grain", "timeless monochrome", "heritage color", "cinematic realism", "refined grading", "pastel neutrality", "natural warm tone"], references: ["Greta Gerwig naturalism", "Wong Kar-wai nostalgia", "Ozu stillness", "Linklater realism", "Kore-eda intimacy", "Kurosawa epic drama", "Ang Lee family drama", "James Ivory heritage", "Ron Howard sincerity", "Alfonso Cuarón realism"], cameraLens: ["ARRI Alexa Mini + 35mm", "Canon C300 MkIII + 85mm", "Sony FX3 + 50mm", "RED Helium + 40mm", "Leica SL Cine + 50mm", "ARRI Amira + 28mm", "Canon R5C cine + 35mm", "Sony A7S III + 24mm", "Blackmagic 6K + 35mm", "RED Raven + 50mm"], characterAnchor: ["Female, early 20s, youthful, bright expression", "Female, late 20s, elegant, calm expression", "Female, early 30s, thoughtful, melancholic", "Female, 40s, mature, strong presence", "Male, early 20s, energetic, curious", "Male, late 20s, stylish, confident", "Male, early 30s, introspective, quiet strength", "Male, 40s, weathered, kind eyes", "Male, 50s, authoritative, reflective"], wardrobeLock: ["Casual neutral (shirt + jeans)", "Business attire (suit, tie, dress shirt)", "Vintage (cardigan + blouse, muted tones)", "Formal evening (dress, tuxedo)", "Streetwear (hoodie, sneakers)", "Minimalist modern (monochrome outfit)", "Rustic/countryside (wool sweater, boots)", "Cultural/traditional attire (kimono, kebaya, sari, etc.)"], permanentProps: ["Coffee cup / tea cup", "Leather-bound journal / notebook", "Old book / manuscript", "Necklace / pendant", "Ring (visible on hand)", "Glasses (eyewear)", "Cigarette / lighter", "Handbag / satchel", "Camera", "Walking stick / cane"], hairMakeup: ["Hair: Shoulder-length, loose natural", "Hair: Long, wavy, styled", "Hair: Short, neat, side-part", "Hair: Bun / tied up", "Hair: Curly, voluminous", "Hair: Bald / shaved", "Makeup: Natural minimal", "Makeup: Bold (lipstick, eyeliner)", "Makeup: Matte finish", "Makeup: Vintage glam (red lips, soft curls)"], characterRelationship: ["Distant but caring", "Intimate but restrained", "Tense and confrontational", "Playful and lighthearted", "Professional and formal", "Secretive and guarded", "Melancholic and reflective"] },
        balanced: { genre: ["psychological thriller", "heist drama", "mystery adventure", "romantic drama", "political intrigue", "action suspense", "crime procedural", "dystopian near-future", "satire drama", "ensemble relationship film"], sceneType: ["rooftop confrontation", "tense negotiation", "chase sequence", "nightclub reveal", "office breakdown", "subway standoff", "festival chaos", "romantic balcony", "airport goodbye", "protest march"], characters: ["detective vs suspect", "small friend group", "rival conflict", "ensemble cast", "activist group", "athlete & coach", "journalist & informant", "soldier squad", "celebrity couple", "musician & fan"], setting: ["subway station", "rooftop skyline", "industrial warehouse", "luxury hotel", "office tower", "airport terminal", "concert hall", "sports arena", "protest square", "fashion runway"], timeOfDay: ["blue hour suspense", "neon midnight", "stormy dusk", "fluorescent office", "city skyline glow", "shadowy twilight", "nightlife bar glow", "streetlamp-lit scene", "colorful festival", "rooftop golden dusk"], cameraMovement: ["handheld tracking", "steadicam pursuit", "drone reveal", "push-in close-up", "crane lift", "car-mounted tracking", "whip pan", "circular pan", "over-the-shoulder follow", "wide crowd shot"], mood: ["tense suspense", "melancholic cinematic", "stylish noir", "playful lifestyle", "dynamic urban chic", "youthful romance", "gritty realism", "energetic festival", "political urgency", "aspirational hope"], visualAesthetic: ["teal & orange blockbuster", "muted pastel indie", "bleach bypass", "vibrant saturation", "cinematic urban", "romantic glow", "noir desaturation", "colorful realism", "lifestyle chic tone", "high-contrast drama"], references: ["Christopher Nolan suspense", "David Fincher noir", "Denis Villeneuve sci-fi realism", "Sofia Coppola minimalism", "Paul Thomas Anderson drama", "Ridley Scott epic", "Alfonso Cuarón hybrid", "Barry Jenkins poetic realism", "Bong Joon-ho satire", "Sam Mendes theatrical style"], cameraLens: ["Sony FX6 + 24–70mm", "RED Komodo + 50mm", "Canon C500 MkII + 35mm", "DJI Ronin 4D + 35mm", "ARRI Alexa LF + 47mm", "Sony Venice + 50mm prime", "Nikon Z9 cine + 28mm", "Blackmagic Pocket 6K + 85mm", "Canon R5C + 50mm", "Leica SL2 cine + 90mm"], characterAnchor: ["Female, early 20s, youthful, bright expression", "Female, late 20s, elegant, calm expression", "Female, early 30s, thoughtful, melancholic", "Female, 40s, mature, strong presence", "Male, early 20s, energetic, curious", "Male, late 20s, stylish, confident", "Male, early 30s, introspective, quiet strength", "Male, 40s, weathered, kind eyes", "Male, 50s, authoritative, reflective"], wardrobeLock: ["Casual neutral (shirt + jeans)", "Business attire (suit, tie, dress shirt)", "Vintage (cardigan + blouse, muted tones)", "Formal evening (dress, tuxedo)", "Streetwear (hoodie, sneakers)", "Minimalist modern (monochrome outfit)", "Rustic/countryside (wool sweater, boots)", "Cultural/traditional attire (kimono, kebaya, sari, etc.)"], permanentProps: ["Coffee cup / tea cup", "Leather-bound journal / notebook", "Old book / manuscript", "Necklace / pendant", "Ring (visible on hand)", "Glasses (eyewear)", "Cigarette / lighter", "Handbag / satchel", "Camera", "Walking stick / cane"], hairMakeup: ["Hair: Shoulder-length, loose natural", "Hair: Long, wavy, styled", "Hair: Short, neat, side-part", "Hair: Bun / tied up", "Hair: Curly, voluminous", "Hair: Bald / shaved", "Makeup: Natural minimal", "Makeup: Bold (lipstick, eyeliner)", "Makeup: Matte finish", "Makeup: Vintage glam (red lips, soft curls)"], consistencyToggle: ["ON", "OFF"], characterRelationship: ["Distant but caring", "Intimate but restrained", "Tense and confrontational", "Playful and lighthearted", "Professional and formal", "Secretive and guarded", "Melancholic and reflective"] },
        experimental: { genre: ["surreal horror", "nonlinear arthouse", "dreamlike sci-fi", "abstract ritual film", "symbolic mythology", "fragmented memory play", "metaphysical journey", "glitch reality fantasy", "ritualistic avant-garde", "chaotic post-human narrative"], sceneType: ["fragmented dream montage", "levitation ritual", "glitch corridor", "ritualistic chanting scene", "hallucination sequence", "nonlinear flash", "body clone reveal", "infinite mirror chamber", "surreal void confrontation", "soundless scream sequence"], characters: ["masked performer", "androgynous archetype", "symbolic ritual crowd", "faceless figure", "fragmented clones", "cyborg hybrid", "alien visitor", "shamanistic guide", "abstract human swarm", "dream double"], setting: ["surreal void", "collapsing CGI city", "infinite mirror maze", "underwater interior", "holographic chamber", "neon dream desert", "glitch tunnel", "floating island", "distorted forest", "abstract black box stage"], timeOfDay: ["glitch strobe light", "laser grids", "UV surreal glow", "projection textures", "silhouette firelight", "abstract color flicker", "inverted lighting", "shifting spotlight", "colored fog", "shadow-only illumination"], cameraMovement: ["Dutch tilt spiral", "fisheye POV", "kaleidoscope split screen", "worm’s-eye distortion", "reflection through glass", "inverted framing", "slow zoom crash", "fragmented montage", "surreal double exposure", "VR immersive shot"], mood: ["dreamlike surreal", "eerie unsettling", "chaotic abstract", "avant-garde ritual", "hyper-stylized bold", "violent raw", "meditative trance", "mythological awe", "uncanny emptiness", "psychedelic chaos"], visualAesthetic: ["negative inversion", "infrared palette", "glitch overlay", "overexposed wash", "surreal mixed-media", "distorted textures", "projection mapping overlays", "psychedelic colors", "dream abstraction", "digital fantasy blend"], references: ["Gaspar Noé surreal chaos", "Lars von Trier raw realism", "David Lynch dream logic", "Nick Knight SHOWstudio", "Tim Walker fantasy", "Alejandro Jodorowsky symbolic", "Harmony Korine fragmented", "Peter Greenaway baroque surrealism", "Shirin Neshat conceptual", "arthouse collective visuals"], cameraLens: ["Sony Venice + anamorphic", "RED Komodo + fisheye", "Canon C500 MkII + tilt-shift", "Blackmagic 6K + probe lens", "360 VR rig", "RED Komodo + 16mm wide", "Phase One + cinema back", "Canon R5C + 8mm fisheye", "Blackmagic URSA Mini + vintage glass", "experimental Lomo lenses"], characterAnchor: ["Female, early 20s, youthful, bright expression", "Female, late 20s, elegant, calm expression", "Female, early 30s, thoughtful, melancholic", "Female, 40s, mature, strong presence", "Male, early 20s, energetic, curious", "Male, late 20s, stylish, confident", "Male, early 30s, introspective, quiet strength", "Male, 40s, weathered, kind eyes", "Male, 50s, authoritative, reflective"], wardrobeLock: ["Casual neutral (shirt + jeans)", "Business attire (suit, tie, dress shirt)", "Vintage (cardigan + blouse, muted tones)", "Formal evening (dress, tuxedo)", "Streetwear (hoodie, sneakers)", "Minimalist modern (monochrome outfit)", "Rustic/countryside (wool sweater, boots)", "Cultural/traditional attire (kimono, kebaya, sari, etc.)"], permanentProps: ["Coffee cup / tea cup", "Leather-bound journal / notebook", "Old book / manuscript", "Necklace / pendant", "Ring (visible on hand)", "Glasses (eyewear)", "Cigarette / lighter", "Handbag / satchel", "Camera", "Walking stick / cane"], hairMakeup: ["Hair: Shoulder-length, loose natural", "Hair: Long, wavy, styled", "Hair: Short, neat, side-part", "Hair: Bun / tied up", "Hair: Curly, voluminous", "Hair: Bald / shaved", "Makeup: Natural minimal", "Makeup: Bold (lipstick, eyeliner)", "Makeup: Matte finish", "Makeup: Vintage glam (red lips, soft curls)"], consistencyToggle: ["ON", "OFF"], characterRelationship: ["Distant but caring", "Intimate but restrained", "Tense and confrontational", "Playful and lighthearted", "Professional and formal", "Secretive and guarded", "Melancholic and reflective"] },
        vintage: { genre: ["70s noir crime", "80s teen romance", "90s VHS horror", "retro music video", "grindhouse thriller", "spaghetti western", "70s political drama", "80s rom-com", "MTV 90s video style", "Super 8 documentary"], sceneType: ["VHS home video diary", "Polaroid montage", "80s sitcom dinner", "70s disco dance", "retro training montage", "drive-in cinema date", "VHS camcorder birthday party", "old music rehearsal", "vintage news broadcast", "90s skate session"], characters: ["70s rock band", "80s high school clique", "90s skater kid", "VHS family archive", "retro supermodel cast", "disco dancers", "cowboy drifters", "arcade kids", "retro politician", "retro sitcom family"], setting: ["neon diner", "VHS living room", "80s arcade", "retro gym hall", "drive-in cinema", "roller rink", "retro photo studio", "70s political rally stage", "disco club", "VHS classroom"], timeOfDay: ["tungsten interiors", "fluorescent arcade light", "VHS camcorder flash", "Polaroid daylight", "incandescent warm glow", "neon diner sign", "disco ball sparkle", "70s warm yellow stage light", "retro gradient backdrop", "VHS spotlight wash"], cameraMovement: ["handheld camcorder shake", "VHS crash zoom", "Polaroid static frame", "70s slow zoom", "Super 8 jitter pan", "dolly zoom 80s thriller", "shoulder-mounted Betacam", "retro sitcom multi-cam", "VHS tilt framing", "analog crane move"], mood: ["nostalgic analog charm", "VHS eerie lo-fi", "retro glam", "playful cheesy vibe", "documentary realism", "disco energy", "80s heartfelt melodrama", "70s political tension", "90s indie film vibe", "Polaroid warmth"], visualAesthetic: ["VHS static grain", "Polaroid faded color", "Kodachrome 70s palette", "80s glossy ad look", "90s music video style", "analog documentary tone", "archival warm sepia", "disco neon glow", "retro magazine color block", "Super 8 film grain"], references: ["Brian De Palma thrillers", "John Hughes teen films", "Wim Wenders road movies", "early Spike Lee", "80s MTV music videos", "70s Italian giallo", "French New Wave echoes", "Richard Donner 80s blockbusters", "VHS-era horror (Troma)", "Fellini retro surrealism"], cameraLens: ["Super 8mm film camera", "VHS camcorder (Sony Handycam)", "Betacam SP", "Bolex 16mm", "Panasonic M7 VHS shoulder cam", "Polaroid instant film recorder", "Arriflex 435 (70s)", "Mitchell BNCR (classic Hollywood)", "Hi8 camcorder", "analog 35mm Panavision"], characterAnchor: ["Female, early 20s, youthful, bright expression", "Female, late 20s, elegant, calm expression", "Female, early 30s, thoughtful, melancholic", "Female, 40s, mature, strong presence", "Male, early 20s, energetic, curious", "Male, late 20s, stylish, confident", "Male, early 30s, introspective, quiet strength", "Male, 40s, weathered, kind eyes", "Male, 50s, authoritative, reflective"], wardrobeLock: ["Casual neutral (shirt + jeans)", "Business attire (suit, tie, dress shirt)", "Vintage (cardigan + blouse, muted tones)", "Formal evening (dress, tuxedo)", "Streetwear (hoodie, sneakers)", "Minimalist modern (monochrome outfit)", "Rustic/countryside (wool sweater, boots)", "Cultural/traditional attire (kimono, kebaya, sari, etc.)"], permanentProps: ["Coffee cup / tea cup", "Leather-bound journal / notebook", "Old book / manuscript", "Necklace / pendant", "Ring (visible on hand)", "Glasses (eyewear)", "Cigarette / lighter", "Handbag / satchel", "Camera", "Walking stick / cane"], hairMakeup: ["Hair: Shoulder-length, loose natural", "Hair: Long, wavy, styled", "Hair: Short, neat, side-part", "Hair: Bun / tied up", "Hair: Curly, voluminous", "Hair: Bald / shaved", "Makeup: Natural minimal", "Makeup: Bold (lipstick, eyeliner)", "Makeup: Matte finish", "Makeup: Vintage glam (red lips, soft curls)"], consistencyToggle: ["ON", "OFF"], characterRelationship: ["Distant but caring", "Intimate but restrained", "Tense and confrontational", "Playful and lighthearted", "Professional and formal", "Secretive and guarded", "Melancholic and reflective"] }
    },
    special: {
        humanInShot: {
            fields: ['personRole', 'count', 'ethnicity', 'visiblePart', 'interaction', 'expression', 'styling'],
            fieldLabels: { personRole: 'Person Role', count: 'Count', ethnicity: 'Ethnicity/Skin Tone', visiblePart: 'Visible Part', interaction: 'Interaction', expression: 'Expression', styling: 'Styling' },
            options: {
                personRole: ['Hand model', 'Partial torso', 'Full model'],
                count: ['1', '2', '3'],
                ethnicity: ["Latina/Latino medium", "Mixed heritage neutral", "Afro-Caribbean warm", "East Asian fair", "South Asian wheatish", "Caucasian light"],
                visiblePart: ['hands only', 'hands + forearms', 'hands + torso', 'face + hands', 'Full body'],
                interaction: ['holding product', 'using product', 'placing product', 'passing product', 'wearing product'],
                expression: ['neutral focus', 'gentle satisfaction', 'playful curiosity', 'luxurious calm', 'professional confidence']
            }
        }
    }
};

// =======================================================================
// GLOBAL STATE MANAGEMENT
// =======================================================================
let state = {};

function initializeState() {
    const initialFormState = {};
    ['model', 'product', 'film'].forEach(m => {
        initialFormState[m] = {};
        if (PROMPT_OPTIONS[m]) {
            PROMPT_OPTIONS[m].fields.forEach(f => {
                initialFormState[m][f] = { select: '', custom: '' };
            });
        }
    });

    const initialHumanState = { enabled: false };
    PROMPT_OPTIONS.special.humanInShot.fields.forEach(field => {
        if (field === 'styling') { initialHumanState[field] = { custom: '' }; } 
        else { initialHumanState[field] = { select: PROMPT_OPTIONS.special.humanInShot.options[field][0], custom: '' }; }
    });

    const initialLockState = {};
    ['model', 'product', 'film', 'product_human'].forEach(m => {
        initialLockState[m] = {};
    });

    state = {
        mode: 'model',
        intensity: 'conservative',
        outputs: null,
        isLoading: { suggest: false, generate: false, variations: false },
        promptVariations: { original: null, variations: [] },
        formState: initialFormState,
        lockedFields: initialLockState,
        humanState: initialHumanState,
        filmState: { numScenes: 1, linkScenes: true },
        openAccordionScene: 0,
    };
    
    updateDefaults();
}

function updateDefaults() {
    const { mode, intensity, formState, lockedFields } = state;
    const newModeState = { ...formState[mode] };

    PROMPT_OPTIONS[mode].fields.forEach(field => {
        // PENTING: Jangan ubah field yang sedang dikunci (locked)
        if (lockedFields[mode]?.[field]) {
            return; // Lewati field ini dan lanjut ke field berikutnya
        }

        const options = PROMPT_OPTIONS[mode][intensity]?.[field] || [];
        const newDefault = options[0] || '';
        
        // Selalu set ke default baru & hapus teks custom
        newModeState[field].select = newDefault;
        newModeState[field].custom = ''; 
    });
    
    state.formState[mode] = newModeState;
}

// =======================================================================
// HELPER & COMPONENT FUNCTIONS
// =======================================================================
const capitalize = (s) => (s && typeof s === 'string' ? s.charAt(0).toUpperCase() + s.slice(1) : '');
function LockIcon(locked) { return `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">${locked ? `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />` : `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />`}</svg>`; }
function Tooltip(text) { return `<span class="group relative ml-2"><span class="flex items-center justify-center w-4 h-4 text-xs text-gray-500 border border-gray-400 rounded-full cursor-help">?</span><span class="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-48 p-2 text-xs text-white bg-gray-800 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">${text}</span></span>`; }

function SegmentedControl({ options, selected, id }) {
    return `<div id="${id}" class="flex p-1 bg-gray-100 rounded-lg">${options.map(({ value, label }) => `<button type="button" data-value="${value}" class="flex-1 py-2 px-1 text-sm font-semibold rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${selected === value ? 'bg-white text-gray-800 shadow-sm' : 'bg-transparent text-gray-500 hover:bg-gray-200'}">${label}</button>`).join('')}</div>`;
}

// GANTI SELURUH FUNGSI LAMA DENGAN VERSI BARU INI
function FormField({ id, mode, fieldId, label, options, value, customValue, isLocked = false }) {
    const hasValue = customValue.trim() || value;
    const showWarning = isLocked && !hasValue;
    return `<div class="mb-6"><div class="flex items-center justify-between mb-2"><label for="${id}-select" class="flex items-center text-sm font-semibold text-gray-700">${label}${Tooltip("Select a curated option or enter a custom value below.")}</label><button type="button" data-lock-mode="${mode}" data-lock-field="${fieldId}" class="lock-button p-1 rounded-full transition-colors ${isLocked ? 'text-blue-600 bg-blue-100' : 'text-gray-400 hover:bg-gray-200'}" title="Lock this value">${LockIcon(isLocked)}</button></div><select id="${id}-select" class="form-select w-full p-3 bg-gray-100 border border-gray-300 rounded-lg text-gray-800" ${isLocked ? 'disabled' : ''}><option value="" disabled ${!value || customValue.trim() ? 'selected' : ''} hidden>Select an option</option>${(options || []).map(opt => `<option value="${opt}" ${value === opt && !customValue.trim() ? 'selected' : ''}>${capitalize(opt)}</option>`).join('')}</select><input type="text" id="${id}-text" value="${customValue}" placeholder="Custom text (optional)" class="form-custom-text w-full p-3 bg-gray-100 border border-gray-300 rounded-lg text-gray-800 mt-2" ${isLocked ? 'readonly' : ''}>${showWarning ? `<p class="text-xs text-red-500 mt-1">Field is locked but has no value.</p>` : ''}</div>`;
}

function ToggleSwitch({ id, label, checked }) {
    return `<label for="${id}" class="flex items-center cursor-pointer"><span class="mr-3 text-sm font-semibold text-gray-700">${label}</span><div class="relative"><input type="checkbox" id="${id}" class="sr-only toggle-switch" ${checked ? 'checked' : ''}><div class="block w-12 h-6 rounded-full transition ${checked ? 'bg-blue-500' : 'bg-gray-300'}"></div><div class="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition transform ${checked ? 'translate-x-6' : ''}"></div></div></label>`;
}

function OutputSection({ title, content }) {
     // Versi sederhana tanpa tombol dan logika variasi
     return `<div class="mb-6"><div class="flex justify-between items-center mb-2"><h3 class="text-lg font-semibold text-gray-800">${title}</h3><button data-copy-content="${content.replace(/"/g, '&quot;')}" class="copy-button px-3 py-1 text-xs font-semibold text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300 transition">Copy</button></div><p class="p-4 bg-gray-100 rounded-lg text-sm text-gray-700 whitespace-pre-wrap font-mono">${content}</p></div>`;
}

function SceneAccordion() {
    const { outputs, openAccordionScene } = state;
    return `
        <div>
            ${outputs.map((scene, index) => `
                <div class="border-b border-gray-200">
                    <button data-scene-index="${index}" class="accordion-toggle w-full flex justify-between items-center p-4 text-left font-semibold text-gray-800">
                        Scene ${index + 1}
                        <span>${openAccordionScene === index ? '−' : '+'}</span>
                    </button>
                    ${openAccordionScene === index ? `
                        <div class="p-4 bg-gray-50">
                            ${OutputSection({ title: "Text Prompt", content: scene.text })}
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                                ${OutputSection({ title: "Video Prompt (Long)", content: scene.videoLong })}
                                ${OutputSection({ title: "Video Prompt (Short)", content: scene.videoShort })}
                            </div>
                        </div>
                    ` : ''}
                </div>
            `).join('')}
        </div>
    `;
}

function ProductFormExtras() {
    const { humanState, lockedFields } = state;
    const config = PROMPT_OPTIONS.special.humanInShot;
    let fieldsHTML = '';
    if(humanState.enabled) {
        fieldsHTML = `<div class="mt-4 p-4 border border-gray-200 rounded-lg bg-gray-50 grid grid-cols-1 md:grid-cols-2 md:gap-x-8">${config.fields.map(fieldId => { if (fieldId === 'styling') { const isLocked = lockedFields.product_human?.styling; const customValue = humanState.styling?.custom || ''; return `<div class="mb-6" key="human-styling"><div class="flex items-center justify-between mb-2"><label for="human-styling-text" class="flex items-center text-sm font-semibold text-gray-700">Styling</label><button type="button" data-lock-mode="product_human" data-lock-field="styling" class="lock-button p-1 rounded-full transition-colors ${isLocked ? 'text-blue-600 bg-blue-100' : 'text-gray-400 hover:bg-gray-200'}">${LockIcon(isLocked)}</button></div><input type="text" id="human-styling-text" placeholder="e.g., minimalist silver rings" value="${customValue}" class="form-custom-text w-full p-3 bg-gray-100 border border-gray-300 rounded-lg" ${isLocked ? 'readonly' : ''}></div>`; } return FormField({ id: `human-${fieldId}`, mode: 'product_human', fieldId: fieldId, label: config.fieldLabels[fieldId], options: config.options[fieldId], value: humanState[fieldId]?.select || '', customValue: humanState[fieldId]?.custom || '', isLocked: lockedFields.product_human?.[fieldId] }); }).join('')}</div>`;
    }
    return `<div class="mt-6 border-t pt-6">${ToggleSwitch({id: 'human-in-shot-toggle', label: 'Human in Product Shot', checked: humanState.enabled})}${fieldsHTML}</div>`;
}

// GANTI SELURUH FUNGSI LAMA DENGAN VERSI BARU INI
function FilmFormExtras() {
    const { filmState } = state;
    return `
        <div class="mt-6 border-t pt-6">
            <div class="grid grid-cols-1 md:grid-cols-2 md:gap-x-8">
                <div>
                    <label for="film-numScenes" class="text-sm font-semibold text-gray-700 mb-2 block">Number of Scenes</label>
                    <select id="film-numScenes" class="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg">
                        <option value="1" ${filmState.numScenes === 1 ? 'selected' : ''}>1</option>
                        <option value="2" ${filmState.numScenes === 2 ? 'selected' : ''}>2</option>
                        <option value="3" ${filmState.numScenes === 3 ? 'selected' : ''}>3</option>
                    </select>
                </div>
                <div class="flex items-end mt-4 md:mt-0">
                    ${ToggleSwitch({id: 'film-linkScenes-toggle', label: 'Link scenes for continuity', checked: filmState.linkScenes})}
                </div>
            </div>
            <div class="mt-6">
                <label for="film-characterAnchor-text" class="text-sm font-semibold text-gray-700 mb-2 block">
                    Character Anchor / Key Visual Details
                    ${Tooltip("Tulis deskripsi detail karakter utama di sini untuk menjaga konsistensi di setiap adegan.")}
                </label>
                <textarea id="film-characterAnchor-text" rows="3" class="form-custom-text w-full p-3 bg-gray-100 border border-gray-300 rounded-lg" placeholder="Contoh: Anna, a 21 year old woman with sharp green eyes and a long black trench coat...">${state.formState.film.characterAnchor.custom || ''}</textarea>
            </div>
        </div>
    `;
}

function renderApp() {
    const root = document.getElementById('root');
    if (!root) return;
    const { mode, intensity, formState, isLoading, outputs, lockedFields } = state;
    const modeConfig = PROMPT_OPTIONS[mode];
    if (!modeConfig) return console.error("Invalid mode selected:", mode);
    const fields = modeConfig.fields;
    const middleIndex = Math.ceil(fields.length / 2);
    const leftFields = fields.slice(0, middleIndex);
    const rightFields = fields.slice(middleIndex);
    const renderFields = (fieldList) => fieldList.map(fieldId => FormField({ id: `${mode}-${fieldId}`, mode, fieldId, label: modeConfig.fieldLabels[fieldId], options: modeConfig[intensity]?.[fieldId], value: formState[mode]?.[fieldId]?.select || '', customValue: formState[mode]?.[fieldId]?.custom || '', isLocked: lockedFields[mode]?.[fieldId] })).join('');
    
    let extrasHTML = '';
    if (mode === 'product') extrasHTML = ProductFormExtras();
    if (mode === 'film') extrasHTML = FilmFormExtras();
    
    let outputHTML = '';
    if(outputs) {
        if (outputs.length > 1) { outputHTML = SceneAccordion(); } 
        else if (outputs.length === 1) {
            const scene = outputs[0];
            outputHTML = `
                <div>
                    ${OutputSection({ title: "Text Prompt", content: scene.text })}
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                        ${OutputSection({ title: "Video Prompt (Long)", content: scene.videoLong })}
                        ${OutputSection({ title: "Video Prompt (Short)", content: scene.videoShort })}
                    </div>
                </div>
            `;
        }
    }

    const appHTML = `
        <div class="w-full max-w-4xl mx-auto p-4 sm:p-6">
            <main class="bg-white rounded-2xl shadow-xl p-6 sm:p-10">
                
                <header class="text-center mb-8 relative">
                    <h1 class="text-2xl sm:text-3xl font-bold text-gray-800">Professional Visual Prompt Art Director</h1>
                    <p class="text-gray-500 mt-1">by HeyReena Studio</p>
                    
                    <button id="open-help-modal-btn" title="Cara Penggunaan" class="absolute top-0 right-0 p-2 text-gray-400 hover:text-blue-600 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.546-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                </header>
                <div class="space-y-6">
                    <div>
                        <label class="text-sm font-semibold text-gray-700 mb-2 block">Mode</label>
                        ${SegmentedControl({ id: 'mode-selector', options: [{ value: 'model', label: 'Model Photography' }, { value: 'product', label: 'Product Photography' }, { value: 'film', label: 'Short Film Scene' }], selected: mode })}
                    </div>
                    <div>
                        <label class="text-sm font-semibold text-gray-700 mb-2 block">Creative Intensity</label>
                        ${SegmentedControl({ id: 'intensity-selector', options: [{ value: 'conservative', label: 'Conservative' }, { value: 'balanced', label: 'Balanced' }, { value: 'experimental', label: 'Experimental' }, { value: 'vintage', label: 'Vintage/Retro' }], selected: intensity })}
                    </div>
                </div>
                <div class="mt-8 grid grid-cols-1 md:grid-cols-2 md:gap-x-8">
                    <div>${renderFields(leftFields)}</div>
                    <div>${renderFields(rightFields)}</div>
                </div>
                ${extrasHTML}
                <div class="mt-10 pt-6 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <button id="suggest-btn" class="w-full py-3 px-4 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition text-sm disabled:opacity-50" ${isLoading.suggest ? 'disabled' : ''}>${isLoading.suggest ? 'Thinking...' : 'Suggest with AI ✨'}</button>
                    <button id="generate-btn" class="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition text-sm disabled:opacity-50" ${isLoading.generate ? 'disabled' : ''}>${isLoading.generate ? 'Generating...' : 'Generate Prompts'}</button>
                    <button id="clear-btn" class="w-full py-3 px-4 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition text-sm">Clear All</button>
                </div>
            </main>
            ${outputHTML ? `<section class="mt-8 bg-white rounded-2xl shadow-xl p-6 sm:p-10">${outputHTML}</section>` : ''}
        </div>
    `;
    root.innerHTML = appHTML;
    addEventListeners();
}

// =======================================================================
// EVENT LISTENERS & HANDLERS
// =======================================================================
function addEventListeners() {
    // === Kontrol Utama (Mode & Intensity) ===
    document.getElementById('mode-selector')?.addEventListener('click', e => { 
        const value = e.target.dataset.value; 
        if (value && state.mode !== value) { 
            state.mode = value; 
            updateDefaults(); 
            renderApp(); 
        } 
    });

    document.getElementById('intensity-selector')?.addEventListener('click', e => { 
        const value = e.target.dataset.value; 
        if (value && state.intensity !== value) { 
            state.intensity = value; 
            updateDefaults(); 
            renderApp(); 
        } 
    });

    // === Kontrol Form Dinamis ===
    document.querySelectorAll('.form-select').forEach(el => el.addEventListener('change', handleFormChange));
    document.querySelectorAll('.form-custom-text').forEach(el => el.addEventListener('input', handleFormChange));
    document.querySelectorAll('.lock-button').forEach(el => el.addEventListener('click', handleLockToggle));
    
    // === Kontrol Form Tambahan (Extras) ===
    document.querySelectorAll('.toggle-switch').forEach(el => el.addEventListener('change', handleToggleChange));
    document.getElementById('film-numScenes')?.addEventListener('change', e => { state.filmState.numScenes = Number(e.target.value); });
    document.getElementById('film-characterBio')?.addEventListener('input', e => { state.filmState.characterBio = e.target.value; });

    // === Tombol Aksi Utama ===
    document.getElementById('generate-btn')?.addEventListener('click', handleSubmit);
    document.getElementById('suggest-btn')?.addEventListener('click', handleAISuggest);
    document.getElementById('clear-btn')?.addEventListener('click', () => { 
        initializeState(); 
        renderApp(); 
    });
    
    // === Kontrol di Bagian Output ===
    document.querySelectorAll('.copy-button').forEach(button => {
        button.addEventListener('click', e => {
            const content = e.target.dataset.copyContent.replace(/&quot;/g, '"');
            navigator.clipboard.writeText(content).then(() => {
                e.target.textContent = 'Copied!';
                setTimeout(() => { e.target.textContent = 'Copy'; }, 2000);
            });
        });
    });

    document.querySelectorAll('.accordion-toggle').forEach(btn => {
        btn.addEventListener('click', e => {
            const index = Number(e.currentTarget.dataset.sceneIndex);
            state.openAccordionScene = state.openAccordionScene === index ? null : index;
            renderApp();
        });
    });

    // === Kontrol Pop-up Bantuan ===
    const helpModal = document.getElementById('help-modal');
    const openHelpBtn = document.getElementById('open-help-modal-btn');
    const closeHelpBtn = document.getElementById('close-help-modal-btn');

    openHelpBtn?.addEventListener('click', () => {
        helpModal?.classList.remove('hidden');
    });

    closeHelpBtn?.addEventListener('click', () => {
        helpModal?.classList.add('hidden');
    });

    helpModal?.addEventListener('click', (e) => {
        if (e.target.id === 'help-modal') {
            helpModal.classList.add('hidden');
        }
    });
}

function handleFormChange(e) {
    const target = e.target;
    const id = target.id.replace('-select', '').replace('-text', '');
    const [mode, ...fieldIdParts] = id.split('-');
    const fieldId = fieldIdParts.join('-');
    let stateSlice = (mode === 'human') ? state.humanState : state.formState[mode];
    if (!stateSlice || !stateSlice[fieldId]) return;
    if (target.classList.contains('form-select')) {
        stateSlice[fieldId].select = target.value;
        stateSlice[fieldId].custom = '';
        document.getElementById(`${id}-text`).value = '';
    } else {
        stateSlice[fieldId].custom = target.value;
        const selectEl = document.getElementById(`${id}-select`);
        if (selectEl) selectEl.value = '';
    }
}

function handleLockToggle(e) {
    const { lockMode, lockField } = e.currentTarget.dataset;
    state.lockedFields[lockMode][lockField] = !state.lockedFields[lockMode][lockField];
    renderApp();
}

function handleToggleChange(e) {
    const id = e.target.id;
    if(id === 'human-in-shot-toggle') { state.humanState.enabled = e.target.checked; } 
    else if (id === 'film-linkScenes-toggle') { state.filmState.linkScenes = e.target.checked; }
    renderApp();
}

async function callGeminiAPI(prompt, generationConfig = {}) {
    try {
        const response = await fetch('/api/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt, generationConfig }),
        });
        if (!response.ok) throw new Error(`API error: ${await response.text()}`);
        return await response.json().then(result => result?.candidates?.[0]?.content?.parts?.[0]?.text || null);
    } catch (error) {
        console.error("Error calling backend API:", error);
        alert("An error occurred. Please check the console for details.");
        return null;
    }
}

function getFinalValue(fieldState) { return fieldState.custom.trim() || fieldState.select; }

// GANTI SELURUH FUNGSI LAMA DENGAN VERSI FINAL INI
async function handleSubmit() {
    state.isLoading.generate = true;
    state.outputs = null;
    state.promptVariations = { original: null, variations: [] };
    renderApp();

    const { mode, formState, humanState, filmState } = state;
    const data = { ...state, ...filmState };
    PROMPT_OPTIONS[mode].fields.forEach(field => { data[field] = getFinalValue(formState[mode][field]); });
    if (mode === 'product' && humanState.enabled) {
        data.humanInShot = {};
        PROMPT_OPTIONS.special.humanInShot.fields.forEach(field => { data.humanInShot[field] = getFinalValue(humanState[field]); });
    }
    
    let parameterString = PROMPT_OPTIONS[mode].fields
        .filter(field => field !== 'characterAnchor')
        .map(field => `${PROMPT_OPTIONS[mode].fieldLabels[field]}: ${data[field]}`)
        .join(', ');

    if (data.humanInShot) {
        const humanParams = Object.entries(data.humanInShot).map(([key, value]) => `${PROMPT_OPTIONS.special.humanInShot.fieldLabels[key]}: ${value}`).join(', ');
        parameterString += `. Human in shot details: ${humanParams}`;
    }

    const cleanAIText = (rawText) => {
        if (!rawText) return '';
        let cleaned = rawText.replace(/^Here.*?:\s*\n*/i, '');
        cleaned = cleaned.split('\n\n')[0];
        // TAMBAHAN: Hapus tanda petik di awal dan akhir
        cleaned = cleaned.replace(/^"|"$|^\s*"/g, '').trim();
        return cleaned;
    };

    let textPrompts = [];
    
    if (data.mode === 'film') {
        const characterPrefix = filmState.characterBio.trim() ? `Main character is: ${filmState.characterBio.trim()}. ` : '';
        const baseInstruction = `You are a master cinematic concept artist. Your task is to synthesize the provided parameters into a powerful text-to-image prompt...`;

        if (filmState.numScenes > 1) {
            const finalPrompt = `${characterPrefix}${baseInstruction}\n\nBased on...: ${parameterString}, write ${filmState.numScenes} connected text-to-image prompts... Separate each prompt with "---SCENE BREAK---".`;
            let rawText = await callGeminiAPI(finalPrompt);
            if (rawText) {
                rawText = rawText.replace(/^Here.*?:\s*\n*/i, '').trim();
                textPrompts = rawText.split('---SCENE BREAK---').map(s => s.trim().replace(/^\s*\**\s*(?:Prompt|Scene)\s*\d+\s*:?\s*\**\s*/i, '').trim());
            }
        } else {
            const finalPrompt = `${characterPrefix}${baseInstruction}\n\nParameters: ${parameterString}.`;
            let rawText = await callGeminiAPI(finalPrompt);
            if (rawText) {
                textPrompts = [cleanAIText(rawText)];
            }
        }
    } else { 
        const finalPrompt = `You are a senior art director. Synthesize the following creative parameters into a single, concise paragraph: ${parameterString}.`;
        let rawText = await callGeminiAPI(finalPrompt);
        if (rawText) {
            textPrompts = [cleanAIText(rawText)];
        }
    }

    if (textPrompts.length > 0) {
        state.outputs = textPrompts.map(imagePrompt => {
            const videoPrompts = generateVideoPrompts(data, imagePrompt);
            return { text: imagePrompt, videoLong: videoPrompts.long, videoShort: videoPrompts.short };
        });
    }

    state.isLoading.generate = false;
    renderApp();
}

// GANTI SELURUH FUNGSI LAMA DENGAN VERSI FINAL DAN PALING BENAR INI
async function handleAISuggest() {
    state.isLoading.suggest = true;
    renderApp();
    
    try {
        const { mode, intensity, formState, lockedFields, humanState } = state;

        const labelToFieldIdMap = {};
        PROMPT_OPTIONS[mode].fields.forEach(fieldId => {
            labelToFieldIdMap[PROMPT_OPTIONS[mode].fieldLabels[fieldId]] = fieldId;
        });

        const lockedContext = {};
        const unlockedFieldsLabels = [];

        PROMPT_OPTIONS[mode].fields.forEach(fieldId => {
            if (lockedFields[mode]?.[fieldId]) {
                const label = PROMPT_OPTIONS[mode].fieldLabels[fieldId];
                lockedContext[label] = getFinalValue(formState[mode][fieldId]);
            } else {
                unlockedFieldsLabels.push(PROMPT_OPTIONS[mode].fieldLabels[fieldId]);
            }
        });

        let characterAnchorInstruction = '';
        let humanPromptPart = '';
        let unlockedHumanFieldsLabels = [];

        if (mode === 'film') {
            const characterAnchorLabel = PROMPT_OPTIONS.film.fieldLabels.characterAnchor;
            if (unlockedFieldsLabels.includes(characterAnchorLabel)) {
                characterAnchorInstruction = `
                    For the "Character Anchor / Key Visual Details" field, you MUST provide a detailed physical description of a new character. 
                    Invent a name, an approximate age, and at least three distinct visual features (e.g., hairstyle, facial features, iconic clothing). 
                    Do not give a concept, give a concrete visual description.
                `;
            }
        }

        if (mode === 'product' && humanState.enabled) {
            const humanConfig = PROMPT_OPTIONS.special.humanInShot;
            humanConfig.fields.forEach(fieldId => {
                 labelToFieldIdMap[humanConfig.fieldLabels[fieldId]] = fieldId;
            });
            if (!lockedContext['Human in Shot Details']) {
                lockedContext['Human in Shot Details'] = {};
            }
            humanConfig.fields.forEach(fieldId => {
                if (lockedFields.product_human?.[fieldId]) {
                    const label = humanConfig.fieldLabels[fieldId];
                    lockedContext['Human in Shot Details'][label] = getFinalValue(humanState[fieldId]);
                } else {
                    unlockedHumanFieldsLabels.push(humanConfig.fieldLabels[fieldId]);
                }
            });
            if (unlockedHumanFieldsLabels.length > 0) {
                humanPromptPart = `\nAdditionally, suggest values for the human model in the shot for these fields: ${unlockedHumanFieldsLabels.join(', ')}.`;
            }
        }

        const allUnlockedLabels = [...unlockedFieldsLabels, ...unlockedHumanFieldsLabels];

        const prompt = `
            You are an expert art director.
            Given the following locked parameters: ${JSON.stringify(lockedContext)}
            Suggest coherent values for the following unlocked fields.
            ${characterAnchorInstruction}
            ${humanPromptPart}
            Return your answer as a simple key-value list, with each item on a new line. Do not add any other text, explanation, or markdown.
            Here are the fields you need to suggest values for:
            ${allUnlockedLabels.join('\n')}
        `;
        
        const resultText = await callGeminiAPI(prompt);

        console.log("--- RAW AI RESPONSE ---");
        console.log(resultText);

        if (resultText) {
            const lines = resultText.split('\n');
            lines.forEach(line => {
                const parts = line.split(':');
                if (parts.length >= 2) {
                    const label = parts[0].trim();
                    const value = parts.slice(1).join(':').trim();
                    const fieldId = labelToFieldIdMap[label];
                    if (fieldId) {
                        let idPrefix = mode;
                        let stateSlice = state.formState[mode];
                        
                        // --- INI BAGIAN UTAMA PERBAIKANNYA ---
                        // Tambahkan pengecekan mode 'product' dan humanState.enabled
                        if (mode === 'product' && humanState.enabled && PROMPT_OPTIONS.special.humanInShot.fieldLabels[fieldId]) {
                            idPrefix = 'human';
                            stateSlice = state.humanState;
                        }

                        if (stateSlice && stateSlice[fieldId]) {
                            stateSlice[fieldId].custom = value;
                            stateSlice[fieldId].select = '';
                            
                            const inputElement = document.getElementById(`${idPrefix}-${fieldId}-text`);
                            if (inputElement) inputElement.value = value;
                            
                            const selectElement = document.getElementById(`${idPrefix}-${fieldId}-select`);
                            if (selectElement) selectElement.value = '';
                        }
                    }
                }
            });
        }
    } catch (e) {
        console.error("An error occurred during AI suggestion:", e);
        alert("Terjadi kesalahan saat memproses sugesti AI.");
    } finally {
        state.isLoading.suggest = false;
        const suggestBtn = document.getElementById('suggest-btn');
        if(suggestBtn) {
            suggestBtn.innerHTML = 'Suggest with AI ✨';
            suggestBtn.disabled = false;
        }
    }
}

// GANTI SELURUH FUNGSI LAMA DENGAN VERSI FINAL INI
function generateVideoPrompts(data, imagePrompt) {
    let long = '', short = '';

    // --- INI BAGIAN UTAMA PERBAIKANNYA ---
    // Kita ambil semua parameter yang relevan dari data
    const { cameraMovement, lighting, mood, sceneType, expression, cameraAngle } = data;

    if (data.mode === 'model') {
        // Format naratif untuk mode Model
        long = `Scene: ${imagePrompt} Camera: ${cameraAngle}. Lighting: ${lighting}. Aesthetic: ${mood}. Flow: The scene should depict a ${sceneType || 'portrait session'} and the character should show an expression of "${expression || 'subtle emotion'}".`;
        short = `The camera angle is ${cameraAngle}. The character shows an expression of "${expression}". The overall atmosphere is ${mood}.`;
    } else if (data.mode === 'product') {
        // Format naratif untuk mode Product
        const { composition, extraElements } = data;
        long = `Scene: ${imagePrompt} Camera: ${composition}. Lighting: ${lighting}. Effects: Add visual effects like ${extraElements}. Mood: ${mood}.`;
        short = `Animate this product shot with a ${composition} style. Add visual effects like ${extraElements}. The mood is ${mood}.`;
    } else if (data.mode === 'film') {
        // Format naratif untuk mode Film
        long = `Scene: ${imagePrompt} Camera: ${cameraMovement}. Lighting: ${lighting}. Aesthetic: ${mood}. Flow: The scene should depict a ${sceneType} and the character should show an expression of "${expression || 'subtle emotion'}".`;
        short = `The camera performs a ${cameraMovement}. The character shows an expression of "${expression}". The overall atmosphere is ${mood}.`;
    }
    
    return { long, short };
};

async function handleGenerateVariations(originalPrompt) {
    state.isLoading.variations = true;
    state.promptVariations = { original: originalPrompt, variations: [] };
    renderApp();
    const prompt = `You are a creative assistant. Given the art direction prompt, generate 3 distinct variations. Keep core elements but alter mood, details, or perspective. Return as a JSON array of strings.\n\nOriginal Prompt: "${originalPrompt}"`;
    const resultJson = await callGeminiAPI(prompt, { responseMimeType: "application/json" });
    if (resultJson) {
        try {
            const variations = JSON.parse(resultJson);
            state.promptVariations = { original: originalPrompt, variations };
        } catch (e) { console.error("Failed to parse variations:", e); }
    }
    state.isLoading.variations = false;
    renderApp();
}

// =======================================================================
// INITIALIZE APP
// =======================================================================
document.addEventListener('DOMContentLoaded', () => {
    initializeState();
    renderApp();
});
