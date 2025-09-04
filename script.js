const PROMPT_OPTIONS = {
    model: {
        fields: ['sceneStyle', 'mainSubject', 'ethnicity', 'styling', 'expression', 'actionVerb', 'cameraAngle', 'lighting', 'background', 'mood', 'composition', 'focusTechnique', 'colorPalette', 'filmStock', 'postProcessing', 'atmosphere', 'references', 'cameraLens','aspectRatio'],
        fieldLabels: { 
            sceneStyle: "Scene Style / Photography", 
            mainSubject: "Main Subject", 
            ethnicity: "Ethnicity / Skin Tone / Origin", 
            styling: "Styling (Hair / Outfit / Makeup)", 
            expression: "Expression / Gesture", 
            actionVerb: "Action / Gerakan (Untuk Video)", 
            cameraAngle: "Camera Angle & Framing", 
            lighting: "Lighting", 
            background: "Background", 
            mood: "Mood & Aesthetic", 
            composition: "Composition",
            focusTechnique: "Focus & Depth of Field",
            colorPalette: "Color Palette",
            filmStock: "Texture & Grain",
            postProcessing: "Post-Processing Style",
            atmosphere: "Atmosphere",
            references: "Visual References", 
            cameraLens: "Camera Model + Lens Type",
            aspectRatio: "Aspect Ratio",
            customKey: "Custom Key (Elemen Wajib)" 
        },
        conservative: { 
            sceneStyle: ["editorial portrait", "studio portrait", "fashion lookbook", "beauty shot", "corporate headshot", "catalogue clean shot", "bridal studio session", "black & white studio headshot", "formal fashion editorial", "graduation portrait"], 
            mainSubject: ["single female model", "single male model", "duo portrait", "business professional", "family/lifestyle group", "academic scholar", "classical dancer", "bride/groom", "executive profile", "politician headshot"], 
            ethnicity: ["Caucasian light", "East Asian fair", "South Asian wheatish", "African deep", "Middle Eastern olive", "Nordic fair", "Mediterranean tan", "Native American warm", "Central European pale", "Sub-Saharan deep"], 
            styling: ["natural makeup", "classic attire", "business suit", "casual wear", "flowing hair", "cultural formal dress", "tuxedo/ball gown", "neat bob haircut", "minimal jewelry", "everyday conservative style"], 
            expression: ["soft smile", "contemplative look", "confident gaze", "gentle expression", "relaxed posture", "neutral elegance", "polite smile", "formal standing pose", "hand-folded posture", "classic calm presence"], 
            actionVerb: ["slowly looks up at the camera", "takes a gentle, calming breath", "subtly adjusts their collar or tie", "a neutral expression slowly forms into a smile", "blinks slowly and thoughtfully", "tilts head slightly with curiosity", "maintains steady eye contact", "gently touches their face", "rests chin on hand thoughtfully", "a subtle, polite nod"],
            cameraAngle: ["eye-level medium shot", "close-up portrait", "three-quarter body", "waist-up shot", "straight-on symmetry", "classic profile", "full-length classic", "balanced corporate framing", "group lineup straight-on", "symmetrical centered composition"], 
            lighting: ["softbox key + fill", "natural window light", "golden hour backlight", "high-key studio", "balanced daylight", "three-point clean", "ring light glow", "clean white bounce", "warm golden indoor", "diffused key light"], 
            background: ["seamless paper", "clean white studio", "neutral textured wall", "soft foliage", "classic drapery", "corporate office backdrop", "neutral gradient", "polished wood", "hotel wall", "library shelves"], 
            mood: ["timeless editorial", "clean minimalist", "elegant sophistication", "professional polish", "understated beauty", "classical prestige", "documentary neutral", "heritage cultural pride", "corporate timeless", "commercial elegance"], 
            composition: ["rule of thirds", "centered", "symmetrical", "minimalist composition", "golden ratio", "head and shoulders", "profile view", "formal portrait", "environmental context", "clean background"],
            focusTechnique: ["sharp focus on eyes", "soft focus background", "shallow depth of field", "deep focus", "f/1.8 aperture effect", "f/8 aperture effect", "everything in focus", "selective focus on face", "bokeh background", "crisp focus on subject"],
            colorPalette: ["neutral tones", "monochromatic black & white", "muted color palette", "warm tones", "cool tones", "earthy tones", "pastel colors", "high-contrast B&W", "sepia tone", "natural skin tones"],
            filmStock: ["crisp digital", "subtle grain", "smooth digital", "fine grain texture", "Ilford HP5 look", "Kodak Portra 400 look", "no grain", "high-definition", "medium format look", "clean sensor look"],
            postProcessing: ["lightroom clean edit", "natural retouching", "contrast enhancement", "sharpening", "dodge and burn", "color correction", "desaturated look", "warmth added", "vignette", "blemish removal"],
            atmosphere: ["calm and composed", "professional and serious", "warm and inviting", "serene and quiet", "thoughtful and introspective", "elegant and poised", "trustworthy", "dignified", "peaceful", "approachable"],
            references: ["Vogue", "Harper’s Bazaar", "WSJ", "Vanity Fair", "COS campaign", "Ralph Lauren ads", "Jil Sander minimal", "National Geographic portraits", "Fortune 500 campaigns", "Smithsonian archives"], 
            cameraLens: ["Canon EOS R5 + 85mm", "Nikon Z8 + 70–200mm", "Sony A7R V + 50mm", "Fujifilm GFX 100S + 110mm", "Hasselblad X2D + 80mm", "Canon 6D + 50mm", "Nikon D850 + 85mm", "Sony A7 III + 70–200mm", "Hasselblad H6D + 100mm", "Fujifilm X-T4 + 35mm"],
            aspectRatio: ["1:1 (Square)", "4:5 (Portrait)", "16:9 (Landscape)", "9:16 (Vertical)"]
        },
        balanced: { 
            sceneStyle: ["lifestyle candid", "street fashion editorial", "cinematic portrait", "environmental portrait", "rooftop editorial", "café lifestyle set", "seaside fashion spread", "documentary style", "luxury commercial lookbook", "art gallery editorial set"], 
            mainSubject: ["creative duo", "small group (3–4)", "performance artist", "fashion collective", "athlete editorial", "musician portrait", "influencer figure", "couple candid", "fashion blogger", "theatre troupe"], 
            ethnicity: ["Latina/Latino medium", "Mixed heritage neutral", "Afro-Caribbean warm", "Eastern European pale", "Southeast Asian golden", "Turkish olive", "Brazilian golden", "Caribbean bronze", "Pacific Islander glow", "Pan-Asian neutral"], 
            styling: ["bold makeup accents", "streetwear chic", "evening wear glamour", "retro-inspired fashion", "smart casual with layers", "sporty chic", "travel fashion", "minimalist editorial", "layered accessories", "contemporary tailoring"], 
            expression: ["playful gesture", "elegant turn", "candid laugh", "confident walk", "casual interaction", "joyful look", "subtle flirt", "introspective glance", "natural hand-in-pocket", "dynamic stride"], 
            actionVerb: ["turns to face the camera", "walks into frame and stops", "laughs candidly then looks at the lens", "brushes hair away from their face", "interacts with a prop naturally", "leans forward with interest", "looks over their shoulder", "adjusts their jacket", "takes a sip of coffee", "gestures while talking"],
            cameraAngle: ["over-the-shoulder", "high-angle crop", "low-angle perspective", "lifestyle wide shot", "diagonal crop", "candid side framing", "tilted composition", "medium wide urban shot", "casual creative crop", "cinematic walk-by shot"], 
            lighting: ["cinematic spotlight + fill", "moody soft shadow", "neon rim accent", "cloudy daylight diffuse", "candle glow", "mixed practicals", "urban streetlights", "reflective bounce", "colored gels accent", "warm ambient light"], 
            background: ["urban street", "rooftop skyline", "café interior", "seaside rocks", "boutique store", "subway station", "industrial warehouse", "lifestyle home interior", "fashion runway", "contemporary architecture"], 
            mood: ["cinematic moody", "vibrant commercial", "contemporary chic", "youthful playful", "luxury modern", "romantic editorial", "aspirational lifestyle", "stylish urban chic", "polished dynamic", "cinematic realism"], 
            composition: ["leading lines", "frame within a frame", "asymmetrical balance", "dynamic symmetry", "negative space", "rule of odds", "fill the frame", "foreground interest", "pattern and repetition", "breaking the rules"],
            focusTechnique: ["shallow depth of field (bokeh)", "rack focus effect", "subject in sharp focus, background blurred", "motion blur in background", "split diopter effect", "lens flare focus", "soft focus aesthetic", "deep focus with wide lens", "focus tracking on subject", "manual focus look"],
            colorPalette: ["teal and orange", "vibrant pastels", "cinematic color grade", "warm and cool contrast", "neon colors", "desaturated urban tones", "golden hour palette", "bold primary colors", "analogous colors", "complementary colors"],
            filmStock: ["Kodak Portra 400 grain", "Fuji Superia look", "cinematic digital (Arri Alexa look)", "light film grain", "35mm film texture", "clean digital with high dynamic range", "vintage Ektachrome", "lomo film effect", "disposable camera look", "sharp medium format digital"],
            postProcessing: ["VSCO filter look", "cinematic LUT applied", "bleach bypass effect", "high saturation and contrast", "split toning (shadows/highlights)", "frequency separation skin retouching", "dehaze and clarity boost", "cross-processed look", "glow and bloom effect", "lens distortion correction"],
            atmosphere: ["energetic and bustling", "melancholy and cinematic", "intimate and candid", "dreamy and romantic", "gritty and urban", "sun-drenched and carefree", "mysterious and moody", "vibrant and alive", "quiet and observational", "aspirational and luxurious"],
            references: ["Mario Testino fashion", "Annie Leibovitz portraits", "A24 stills", "Zara lookbook", "Dior campaigns", "The Row luxury", "Prada resort shoots", "Gucci lifestyle", "Uniqlo editorial", "H&M commercial"], 
            cameraLens: ["Canon 5D MkIV + 35mm", "Sony A7 IV + 24–70mm", "Nikon Z9 + 50mm", "Leica SL2 + 90mm", "Fujifilm X-T5 + 56mm", "Canon R5 + 35mm f/1.4", "Sony A7R V + 24–70mm", "Leica SL2 + 50mm Summilux", "Nikon Z9 + 24–120mm", "Fujifilm GFX 100 + 63mm"],
            aspectRatio: ["1:1 (Square)", "4:5 (Portrait)", "16:9 (Landscape)", "9:16 (Vertical)"]
        },
        experimental: { 
            sceneStyle: ["conceptual portrait", "surreal fashion editorial", "avant-garde beauty shot", "performance art documentation", "cyberpunk fantasy scene", "underwater conceptual portrait", "infrared portrait session", "mirror maze surreal shoot", "holographic fashion editorial", "glitch-inspired portrait"], 
            mainSubject: ["androgynous figure", "conceptual character", "masked performer", "abstract human form", "augmented avatar", "mannequin hybrid", "multi-exposure identity", "choreographed ensemble", "cyborg-inspired model", "silhouette-only subject"], 
            ethnicity: ["ambiguous ethnicity", "painted body/skin treatment", "digitally morphed features", "hybrid cultural mix", "translucent metallic skin", "UV-reactive paint", "holographic skin effect", "albino stylization", "cyber-synthetic skin tone", "surreal monochrome body paint"], 
            styling: ["avant-garde makeup", "sculptural hair", "holographic styling", "liquid/surreal fashion", "cybernetic prosthetics", "gravity-defying hair", "sculptural textile outfit", "liquid latex wear", "3D printed attire", "fragmented mirror styling"], 
            expression: ["intense stare", "extreme pose", "distorted gesture", "surreal gaze", "scream with blur", "levitating pose", "fragmented body twist", "mirror-hand reflection", "avant-garde theatrical stare", "otherworldly stillness"], 
            actionVerb: ["body glitches or fragments slightly", "levitates slowly off the ground", "face morphs between two expressions", "shatters like glass and reforms", "opens eyes to reveal glowing irises", "surrounded by floating particles", "liquid drips from fingertips", "body dissolves into smoke", "a second self emerges", "moves in reverse"],
            cameraAngle: ["worm’s-eye extreme", "bird’s-eye overhead", "Dutch tilt", "fisheye distortion", "kaleidoscope overlay", "fragmented crop", "underwater half-submerged", "drone top-down", "reflection POV", "immersive distorted POV"], 
            lighting: ["projection mapping", "harsh direct flash", "strobe freeze", "abstract shadow play", "silhouette backlight", "rotating projectors", "glitch strobes", "laser grid", "colored fog illumination", "thermal imaging treatment"], 
            background: ["holographic chamber", "infinite mirror", "liquid surface", "abstract sculpture set", "surreal desert void", "glitch digital wall", "neon projection backdrop", "smoke-filled room", "conceptual architecture", "floating set design"], 
            mood: ["avant-garde surreal", "dreamlike abstraction", "bold chaos", "glitch cyberpunk", "mythological surreal", "distorted theatrical", "conceptual abstraction", "raw expressive", "surreal hallucination", "high-fashion disruption"], 
            composition: ["chaotic", "fragmented", "impossible geometry", "symmetry breaking", "golden spiral", "dizzying perspective", "layered and transparent", "subversive framing", "glitched composition", "anamorphic illusion"],
            focusTechnique: ["tilt-shift effect", "lens-whacking / freelensing", "extreme bokeh", "pinhole camera focus", "intentional motion blur", "out-of-focus subject", "focus on reflection only", "vaseline on lens effect", "deep focus with distortion", "split-field focus"],
            colorPalette: ["infrared photography colors", "glitchy RGB split", "monochromatic with one spot color", "inverted colors", "thermal imaging palette", "UV blacklight colors", "dissonant color clashes", "acidic neons", "holographic iridescent colors", "oversaturated film look"],
            filmStock: ["heavy data moshing", "VHS glitch effect", "damaged film look", "thermal sensor texture", "CCTV footage grain", "infrared film grain", "experimental chemical processing", "digital noise and artifacts", "holographic texture overlay", "liquid light show effect"],
            postProcessing: ["pixel sorting", "databending", "color channel shifting", "solarization effect", "heavy compositing", "surreal photo-manipulation", "anamorphic lens flare", "fractal rendering", "generative fill", "AI-inpainting"],
            atmosphere: ["unsettling and uncanny", "chaotic and energetic", "dreamlike and ethereal", "dystopian and cold", "psychedelic and disorienting", "meditative and abstract", "transcendent and spiritual", "glitchy and technological", "raw and visceral", "sublime and awe-inspiring"],
            references: ["Nick Knight SHOWstudio", "Tim Walker surreal", "Dazed Magazine", "Comme des Garçons visuals", "Balenciaga dystopian", "Vogue Italia experimental", "Helmut Newton bold", "i-D conceptual", "Björk visuals", "arthouse exhibition stills"], 
            cameraLens: ["Phase One XF IQ4 + fisheye", "Canon R5C + tilt-shift 24mm", "RED Komodo + wide cine", "Sony Venice + anamorphic", "Blackmagic 6K + probe lens", "RED Komodo + 16mm cine", "Phase One XF IQ4 + fisheye 8mm", "Blackmagic URSA + vintage cine glass", "Sony A7R IV + 14mm ultra-wide", "Canon R5 + tilt-shift 50mm"],
            aspectRatio: ["9:16 (Vertical)", "16:9 (Widescreen Cinema)", "1:1 (Square)", "4:5 (Tall)"]
        },
        vintage: { 
            sceneStyle: ["Polaroid instant snapshot", "1970s lifestyle editorial", "1980s film fashion cover", "analog street portrait", "1990s magazine spread", "bohemian 70s outdoor set", "retro film star promo", "80s music video still", "90s fashion runway backstage", "Super 8mm style candid"], 
            mainSubject: ["retro film star archetype", "bohemian couple", "90s supermodel inspiration", "Polaroid family portrait", "lifestyle retro muse", "70s runway muse", "vintage cinema actor", "80s glam rocker", "candid archival subject", "analog celebrity look"], 
            ethnicity: ["Mediterranean tan (70s vibe)", "Scandinavian pale", "Afro 80s editorial look", "Indigenous retro representation", "pan-ethnic retro group", "vintage Hollywood golden look", "80s supermodel tones", "70s disco glam features", "Polaroid neutral cast", "archival global diversity"], 
            styling: ["bohemian chic", "70s flared fashion", "80s power suit + bold makeup", "90s minimal grunge", "Polaroid candid casual", "retro disco attire", "classic Hollywood glamour", "denim 90s streetwear", "leather 80s rocker look", "vintage editorial chic"], 
            expression: ["glamorous 80s stare", "candid Polaroid laughter", "bohemian free spirit", "nostalgic melancholy", "supermodel power gaze", "70s disco joy", "retro editorial calm", "90s casual confidence", "vintage lifestyle warmth", "archival candid"], 
            actionVerb: ["takes a drag from a cigarette", "slowly puts on sunglasses", "flips through a vinyl record", "a candid moment of laughter freezes into a pose", "adjusts a classic fedora hat", "looks into the camera as if it's a mirror", "develops a polaroid in hand", "puts a cassette in a walkman", "dials a rotary phone", "a slow, glamorous turn"],
            cameraAngle: ["waist-up analog frame", "Polaroid straight-on", "70s standing full body", "80s soft-focus close-up", "90s magazine crop", "archival VHS angle", "candid snapshot framing", "vintage studio bust shot", "filmic slow zoom frame", "Super 8 jitter framing"], 
            lighting: ["tungsten warm lamp", "incandescent bulb glow", "vintage studio flash", "continuous hot lights", "candlelit warmth", "Polaroid daylight harsh", "film-era umbrella flash", "halogen lamp vibe", "neon diner glow", "analog gradient wash"], 
            background: ["retro diner tiles", "70s patterned wallpaper", "80s gradient studio backdrop", "wood-paneled living room", "Polaroid plain wall", "VHS home interior", "retro carpet studio", "disco floor backdrop", "analog tiled bathroom", "archival poster wall"], 
            mood: ["nostalgic charm", "bohemian free spirit", "glamorous 80s gloss", "90s minimal cool", "analog film authenticity", "disco glam energy", "Polaroid candid mood", "archival retro gloss", "retro lifestyle glam", "timeless film-grain chic"], 
            composition: ["classic Hollywood framing", "snapshot aesthetic", "album cover art", "magazine layout style", "centered Polaroid frame", "dynamic 70s angle", "80s power pose", "90s minimalist chic", "found footage look", "rule of thirds with grain"],
            focusTechnique: ["soft focus", "manual focus miss", "deep focus (70s film)", "dreamy haze", "sharp center, soft edges", "Petzval lens swirl bokeh", "zone focusing street style", "split focus on two subjects", "rack focus with a zoom", "everything slightly soft"],
            colorPalette: ["faded Polaroid colors", "Kodachrome 64", "Ektachrome blues", "Technicolor saturation", "warm sepia tones", "gritty 70s colors", "vibrant 80s neon", "desaturated 90s grunge", "aged paper tones", "cross-processed colors"],
            filmStock: ["Polaroid SX-70 film", "Kodak Tri-X 400 grain", "Super 8mm film grain", "VHS tape artifacts", "16mm film grain", "dust and scratches", "light leaks", "expired film look", "Betacam tape quality", "half-frame camera look"],
            postProcessing: ["chemical stains and dust", "vignetting", "pushed film look", "film border overlay", "reticulation", "dodging and burning (darkroom style)", "color shifts from aging", "scanner texture", "grain overlay", "authentic light leaks"],
            atmosphere: ["nostalgic and warm", "cool and detached (90s)", "energetic and glamorous (80s)", "free-spirited and earthy (70s)", "dreamy and melancholic", "authentic and raw", "cinematic and timeless", "intimate and personal", "gritty and real", "sun-soaked and hazy"],
            references: ["Richard Avedon classic", "Irving Penn Vogue", "Guy Bourdin 70s", "Herb Ritts 80s B&W", "Slim Aarons lifestyle", "Polaroid SX-70 ads", "Kodak film campaigns", "90s Calvin Klein", "Bruce Weber lifestyle", "MTV 80s/90s fashion"], 
            cameraLens: ["Leica M6 + 50mm Summicron", "Nikon FM2 + 35mm AI-S", "Canon AE-1 + 50mm FD", "Pentax 67 + 105mm", "Mamiya RZ67 + 110mm", "Contax T2 + 38mm Zeiss", "Polaroid SX-70", "Hasselblad 500CM + 80mm", "Olympus OM-1 + 50mm", "Super 8mm film camera"],
            aspectRatio: ["1:1 (Polaroid)", "4:5 (Vintage Portrait)", "16:9 (Film Still)", "9:16 (Tall Format)"]
        }
    },
    product: {
        fields: ['productType', 'material', 'surface', 'composition', 'lightingStyle', 'background', 'mood', 'compositionScale', 'shadowStyle', 'colorHarmony', 'motionEffect', 'advertisingStyle', 'references', 'cameraLens','aspectRatio'],
        fieldLabels: { 
            productType: "Product Type", 
            material: "Material / Texture", 
            surface: "Surface / Setting", 
            composition: "Composition Style", 
            lightingStyle: "Lighting Style", 
            background: "Background / Environment", 
            mood: "Mood & Aesthetic", 
            compositionScale: "Composition Scale",
            shadowStyle: "Shadow Style",
            colorHarmony: "Color Harmony",
            motionEffect: "Motion Effect (for Video)",
            advertisingStyle: "Advertising Style",
            references: "Reference Style", 
            cameraLens: "Camera & Lens",
            aspectRatio: "Aspect Ratio",
            customKey: "Custom Key (Elemen Wajib)"
        },
        conservative: { 
            productType: ["skincare bottle", "perfume flacon", "luxury watch", "leather bag", "beverage can", "premium laptop", "jewelry ring", "fountain pen", "wine bottle", "classic book cover"], 
            material: ["frosted glass", "polished metal", "matte plastic", "leather grain", "satin fabric", "glossy ceramic", "brushed steel", "clear crystal", "lacquer wood", "smooth marble"], 
            surface: ["marble slab", "wooden desk", "acrylic pedestal", "velvet cloth", "neutral acrylic base", "luxury glass table", "seamless riser", "granite platform", "classic studio riser", "polished stone"], 
            composition: ["hero single centered", "classic flat-lay", "trio lineup", "pyramid stack", "product with reflection", "catalog front-facing", "grid layout", "symmetrical duo", "elevated angle hero", "clean spotlight shot"], 
            lightingStyle: ["clean catalog three-point", "daylight-balanced studio", "golden hour window light", "high-key seamless", "softbox gradient", "rim highlight", "balanced flash", "even soft fill", "commercial diffuse", "spotlight accent"], 
            background: ["seamless white", "solid black", "neutral gray", "gradient backdrop", "velvet drape", "luxury stone wall", "studio beige", "soft pastel", "catalog neutral", "premium catalog backdrop"], 
            mood: ["premium clean", "minimalist timeless", "professional polish", "heritage classic", "natural organic", "luxury timeless", "tech minimal", "refined elegance", "catalog polish", "understated prestige"], 
            compositionScale: ["product centered full", "medium shot of product", "macro detail shot", "product in context (wide)", "slightly angled medium shot", "top-down flat-lay", "hero shot filling frame", "group shot of collection", "environmental product shot", "isometric view"],
            shadowStyle: ["soft drop shadow", "no shadow (floating look)", "subtle ambient occlusion", "gentle gradient shadow", "natural window light shadow", "product casting shadow on self", "clean, hard shadow", "long soft shadow", "diffused shadow", "reflective shadow on surface"],
            colorHarmony: ["monochromatic", "analogous colors", "neutral with accent color", "high-key white on white", "low-key dark on dark", "complementary colors", "split-complementary", "triadic color harmony", "achromatic (B&W)", "earth tones"],
            motionEffect: ["none, static shot", "slow 360 rotation", "gentle light sweep", "subtle dust particles floating", "a single water droplet falls", "slow zoom in on detail", "gentle focus pull", "steam rising slowly", "fabric gently waving", "camera slowly tilts up"],
            advertisingStyle: ["clean catalog shot", "luxury magazine ad", "minimalist e-commerce", "heritage brand print ad", "tech product launch style", "pharmaceutical clean", "beverage commercial look", "timeless jewelry ad", "automotive ad polish", "fashion accessory lookbook"],
            references: ["Rolex print ads", "Chanel perfume campaigns", "Tiffany jewelry catalog", "Apple clean product", "Muji minimal design", "Dior timeless ads", "Cartier luxury catalog", "Hermes timeless campaigns", "Montblanc lifestyle", "Hugo Boss classic ads"], 
            cameraLens: ["Canon EOS R5 + 100mm macro", "Nikon Z7 + 105mm macro", "Sony A7R IV + 90mm macro", "Hasselblad X2D + 80mm", "Fujifilm GFX 100 + 120mm", "Canon 6D + 100mm", "Nikon D850 + 85mm", "Sony A7 III + 55mm", "Hasselblad H6D + 100mm", "Fujifilm X-T4 + 35mm"],
            aspectRatio: ["1:1 (Square E-commerce)", "4:5 (Social Media Post)", "16:9 (Banner)", "9:16 (Story Ad)"]
        },
        balanced: { 
            productType: ["designer sneaker", "sunglasses", "premium headphones", "tote bag", "smartphone", "coffee takeaway cup", "fashion accessory", "smartwatch", "lifestyle mug", "travel luggage"], 
            material: ["brushed aluminum", "glossy enamel", "woven textile", "transparent acrylic", "carbon fiber", "tempered glass", "velvet fabric", "anodized metal", "stone composite", "soft matte rubber"], 
            surface: ["lifestyle bathroom counter", "industrial tabletop", "terrazzo floor", "colored plexiglass", "café wooden table", "lifestyle home desk", "subway tile counter", "concrete shelf", "pastel painted block", "boutique display"], 
            composition: ["diagonal framing", "side angled showcase", "close-up detail", "natural scatter layout", "stacked arrangement", "lifestyle with props", "dynamic crop", "casual over-the-table", "angled tilted setup"], 
            lightingStyle: ["cinematic spotlight", "moody rim light", "neon accent glow", "cloudy daylight", "mixed warm + cool gels", "reflective bounce", "indirect soft glow", "urban streetlight mimic", "natural window daylight", "color block fill"], 
            background: ["lifestyle bathroom", "urban desk", "rooftop daylight", "boutique store", "industrial interior", "colorful pastel blocks", "subway wall", "modern kitchen counter", "café table", "lifestyle living room"], 
            mood: ["vibrant commercial", "lifestyle premium", "playful youthful", "cinematic stylish", "luxury contemporary", "aspirational modern", "trendy editorial", "casual lifestyle", "brand-forward energy", "glossy premium"], 
            compositionScale: ["product in use by model", "lifestyle flat-lay", "environmental wide shot", "dynamic close-up on detail", "over-the-shoulder product view", "group of products in scene", "product on-the-go", "from the user's POV", "exploded view of components"],
            shadowStyle: ["long dramatic shadow (golden hour)", "hard graphic shadow", "caustic light reflections", "patterned shadow (from leaves, etc.)", "soft, moody shadow", "neon-colored shadow", "split lighting shadow", "reflective color bounce shadow", "no shadow, high-key", "backlit with shadow towards camera"],
            colorHarmony: ["bold complementary colors", "vibrant triadic", "analogous with a pop of contrast", "pastel on pastel", "neon on dark background", "monochromatic with texture", "desaturated with one vibrant color", "color blocking", "warm cinematic grade", "cool, moody tones"],
            motionEffect: ["dramatic water splash", "product dropping into water (slow-mo)", "smoke swirling around product", "fast pan with motion blur", "stop-motion animation style", "ingredients flying around product", "fabric rippling in the wind", "camera orbiting the product", "liquid pouring action", "light trails effect"],
            advertisingStyle: ["social media ad (e.g., Instagram)", "lifestyle brand campaign", "energetic beverage commercial", "trendy fashion e-comm", "modern tech ad", "influencer-style shot", "aspirational travel ad", "sports brand ad", "cosmetics campaign", "editorial magazine spread"],
            references: ["Nike e-comm", "Adidas commercial", "Samsung lifestyle", "Sephora campaigns", "Zara accessories", "COS minimal modern", "Prada fashion catalog", "H&M lifestyle ads", "Uniqlo clean commercial", "Sony stylish promo"], 
            cameraLens: ["Canon 5D MkIV + 50mm", "Sony A7 IV + 24–70mm", "Nikon Z9 + 70–200mm", "Fujifilm X-T5 + 56mm", "Leica SL2 + 90mm", "Canon R5 + 35mm f/1.4", "Sony A7R V + 24–70mm", "Leica SL2 + 50mm Summilux", "Nikon Z9 + 24–120mm", "Panasonic S1R + 50mm"],
            aspectRatio: ["4:5 (Instagram Feed)", "16:9 (Website Hero)", "1:1 (Carousel Post)", "9:16 (Reels/Shorts)"]
        },
        experimental: { 
            productType: ["floating tech gadget", "fragmented sculpture object", "surreal cosmetic form", "liquid-shaped container", "holographic wearable", "AI-designed prototype", "levitating orb device", "bioluminescent capsule", "glitch-inspired gadget", "modular abstract product"], 
            material: ["liquid chrome", "iridescent holographic", "translucent resin", "shifting textures", "bio-organic skin", "glitch reflective surface", "fractal crystalline", "fluid gel material", "neon reactive polymer", "morphing nanomaterial"], 
            surface: ["water ripple tray", "mirrored infinity pedestal", "fractured glass platform", "levitating stage", "holographic cube riser", "neon acrylic pedestal", "digital projection floor", "smoke-filled stand", "liquid surface holder", "surreal floating stage"], 
            composition: ["floating cluster", "exploded-view assembly", "fisheye distortion", "surreal collage", "fragmented layering", "levitating spiral", "multi-frame overlay", "kaleidoscope arrangement", "liquid morph display", "shattered composition"], 
            lightingStyle: ["glitch strobes", "projection mapping", "harsh overexposure", "neon splash glow", "silhouette glow edges", "thermal light effect", "rotating colored beams", "hard flash freeze", "strobe rainbow split", "laser grid pattern"], 
            background: ["surreal CGI void", "liquid mercury backdrop", "infinite mirror wall", "neon holographic set", "glitch projection wall", "digital desert void", "smoke-filled space", "abstract sculpture wall", "glowing cube chamber", "fragmented reality background"], 
            mood: ["surreal avant-garde", "dreamlike conceptual", "edgy futuristic", "cyber-organic chaos", "glitch abstraction", "fragmented surreal", "alien industrial", "hyper-real fashion-tech", "bold dream-state", "impossible sci-fi vibe"], 
            compositionScale: ["impossible macro shot", "product dwarfed by surreal environment", "infinite zoom-in (fractal)", "multi-perspective view", "anamorphic wide-screen", "product seen through a crystal", "microscopic texture view", "product as a planet in space", "fisheye extreme close-up", "worm's-eye view from below"],
            shadowStyle: ["no shadows, pure light", "shadow is a liquid pool", "glitching, fragmented shadow", "shadow projects a different image", "shadow is a solid object", "colored gel shadow", "shadow that moves independently", "inverse shadow (light)", "shadow made of particles", "long, distorted, surreal shadow"],
            colorHarmony: ["inverted colors", "RGB split effect", "thermal camera palette", "monochromatic with a glitching accent", "holographic spectrum", "dissonant, clashing colors", "UV blacklight reactive", "acidic color palette", "achromatic with light refraction", "color palette shifts over time"],
            motionEffect: ["product morphs into liquid", "explodes and reassembles", "glitches in and out of existence", "time-lapse of product decaying/growing", "surrounded by a particle vortex", "leaves a trail of light", "rotates on impossible axes", "camera flies through the product", "surface texture constantly shifts", "holographic projection emanates from product"],
            advertisingStyle: ["conceptual art installation", "dystopian sci-fi commercial", "surreal fashion film", "glitch art advertisement", "avant-garde magazine ad", "trippy music video product placement", "CGI tech demo", "dream sequence ad", "brutalist web design ad", "post-humanist campaign"],
            references: ["Balenciaga dystopian", "Comme des Garçons product art", "Dazed surreal sets", "Nick Knight SHOWstudio", "Tim Walker fantasy objects", "Björk product visuals", "Vogue Italia experimental ads", "conceptual gallery props", "fashion-tech art shoots", "cyber-installation campaigns"], 
            cameraLens: ["Phase One XF IQ4 + tilt-shift", "RED Komodo + probe lens", "Sony Venice + anamorphic", "Blackmagic 6K + vintage cine glass", "Canon R5C + fisheye 14mm", "RED Helium + 18mm", "Phase One + macro tilt-shift", "Sony A7R IV + 15mm", "Canon C500 MkII + tilt-shift", "Blackmagic Pocket 6K + probe"],
            aspectRatio: ["9:16 (Immersive Story)", "16:9 (Cinematic Ad)", "1:1 (Abstract)", "4:5 (Creative)"]
        },
        vintage: { 
            productType: ["vinyl record sleeve", "cassette tape player", "retro analog camera", "70s soda can", "typewriter machine", "Walkman cassette", "rotary phone", "instant Polaroid camera", "VHS tape", "vintage wrist radio"], 
            material: ["bakelite plastic", "brushed aluminum", "matte painted tin", "corduroy fabric", "aged leather", "retro paper labels", "chrome-plated steel", "vinyl plastic gloss", "80s plastic neon", "analog print texture"], 
            surface: ["checkered diner table", "vintage kitchen counter", "80s tiled bathroom", "wood-paneled desk", "shag carpet surface", "patterned retro rug", "Polaroid tabletop", "VHS home cabinet", "disco mirrored floor", "neon diner counter"], 
            composition: ["Polaroid tabletop still-life", "70s print ad lineup", "80s catalog symmetry", "retro magazine spread", "candid desk arrangement", "analog casual placement", "archival commercial pose", "VHS screen grab shot", "lifestyle candid retro crop", "grainy ad product lineup"], 
            lightingStyle: ["tungsten warm lamp", "incandescent bulb glow", "vintage studio flash umbrellas", "continuous hot light", "candlelit product", "Polaroid flash burst", "80s catalog gradient light", "neon diner sign glow", "VHS camcorder harsh flash", "retro gradient wash"], 
            background: ["retro diner tiles", "wood-paneled room", "80s wallpaper", "Polaroid white wall", "shag carpet room", "disco neon backdrop", "tiled bathroom retro", "VHS home wall", "archival film set", "analog studio drape"], 
            mood: ["nostalgic retro charm", "70s lifestyle gloss", "80s glamorous catalog", "90s minimal chic", "Polaroid candid vibe", "analog warm nostalgia", "disco glam aesthetic", "retro playful design", "MTV 90s advertising", "analog film texture mood"], 
            compositionScale: ["product in a vintage scene", "close-up on worn texture", "product on a store shelf (vintage)", "flat-lay with other retro items", "Polaroid of the product", "magazine ad layout", "old catalog style", "product seen on a vintage TV", "full table setting"],
            shadowStyle: ["harsh direct flash shadow", "long, warm tungsten shadow", "soft, grainy shadow", "no shadow, flat catalog look", "shadow from a window blind", "dappled light shadow", "neon sign casting shadow", "indistinct, dark room shadow", "shadow with film grain", "authentic, unstyled shadow"],
            colorHarmony: ["faded Kodachrome palette", "warm 70s earth tones", "vibrant 80s neons and pastels", "muted 90s grunge tones", "sepia-toned", "black and white with heavy grain", "cross-processed greens and magentas", "Technicolor saturation", "aged, yellowed paper tones", "Polaroid's unique color cast"],
            motionEffect: ["VHS tracking lines", "Super 8mm film jitter", "projector flicker effect", "lens flare from an old lens", "slow, grainy zoom-in", "record spinning on a turntable", "cassette tape unspooling", "Polaroid picture developing", "light leak transition", "film reel burn"],
            advertisingStyle: ["70s print magazine ad", "80s neon-drenched poster", "90s minimalist ad (like Calvin Klein)", "old Sears catalog page", "grainy TV commercial still", "Polaroid ad style", "lifestyle ad from the era", "product placement in a retro scene", "direct mail flyer style", "pre-internet era advertising"],
            references: ["Coca-Cola 70s print ads", "Polaroid SX-70 campaigns", "Kodak film catalog", "80s Sony Walkman ads", "90s Calvin Klein product shots", "retro Nike sneakers catalog", "Marlboro lifestyle ads", "Pepsi 80s neon poster", "VHS camcorder product still", "old Vogue retro spreads"], 
            cameraLens: ["Nikon FM2 + 50mm AI-S", "Canon AE-1 + 50mm FD", "Leica M6 + 35mm Summicron", "Pentax 67 + 105mm", "Mamiya RZ67 + 110mm", "Contax T2 + 38mm", "Polaroid SX-70 instant", "Hasselblad 500CM + 80mm", "Olympus OM-1 + 50mm", "VHS camcorder lens"],
            aspectRatio: ["1:1 (Vintage Catalog)", "4:5 (Old Magazine Ad)", "16:9 (Retro TV Ad)", "9:16 (Tall Print)"]
        }
    },
    film: {
        fields: ['genre', 'sceneType', 'characters', 'setting', 'timeOfDay', 'cameraMovement', 'actionVerb', 'mood', 'visualAesthetic', 'shotType', 'editingStyle', 'productionDesign', 'lensEffects', 'soundDesignCue', 'pacing', 'aspectRatio', 'references', 'cameraLens', 'characterAnchor', 'wardrobeLock', 'hairMakeup', 'aspectRatio', 'characterRelationship'],
        fieldLabels: { 
            genre: "Genre", 
            sceneType: "Scene Type", 
            characters: "Character(s)", 
            setting: "Setting / Location", 
            timeOfDay: "Time of Day / Lighting", 
            cameraMovement: "Camera Movement & Framing", 
            actionVerb: "Action / Gerakan", 
            mood: "Mood / Atmosphere", 
            visualAesthetic: "Visual Aesthetic", 
            shotType: "Shot Type",
            editingStyle: "Editing Style",
            productionDesign: "Production Design",
            lensEffects: "Lens Effects",
            soundDesignCue: "Sound Design Cue (for Mood)",
            pacing: "Pacing",
            aspectRatio: "Aspect Ratio",
            references: "Reference Style", 
            cameraLens: "Camera & Lens", 
            characterAnchor: "Character Anchor / Identity", 
            wardrobeLock: "Wardrobe Lock (Main Outfit)", 
            hairMakeup: "Hair & Makeup Details",
            aspectRatio: "Aspect Ratio",
            characterRelationship: "Character Relationship / Interaction Style",
            customKey: "Custom Key (Elemen Wajib)"
        },
        conservative: { 
            genre: ["period drama", "romantic comedy", "slice-of-life", "historical biopic", "family melodrama", "coming-of-age", "literary adaptation", "courtroom drama", "social realism", "classic love story"], 
            sceneType: ["heartfelt dialogue", "family reunion", "meet-cute", "farewell scene", "classroom lesson", "dinner table", "park bench talk", "wedding vow", "reunion hug", "hospital bedside talk"], 
            characters: ["protagonist monologue", "romantic duo", "family group", "mentor/student", "siblings", "village elder", "politician speech", "child with parent", "teacher & student", "grieving widow"], 
            setting: ["suburban home", "countryside field", "café interior", "school classroom", "cozy street", "family living room", "church", "local library", "park", "city hall"], 
            timeOfDay: ["morning daylight", "golden hour sunset", "candlelit dinner", "overcast afternoon", "lamplight night", "natural dusk", "fluorescent classroom", "firelit night", "daylight kitchen", "clear noon light"], 
            cameraMovement: ["locked-off wide", "steady dolly-in", "symmetrical medium", "slow pan", "classic OTS", "tripod profile", "static two-shot", "crane reveal", "balanced tracking", "establishing wide"], 
            actionVerb: ["writes a letter", "looks out a window", "arranges flowers in a vase", "takes a slow sip of tea", "opens an old book", "a gentle handshake", "a warm, reassuring hug", "wipes away a single tear", "nods in agreement", "places a hand on someone's shoulder"],
            mood: ["heartfelt sincerity", "hopeful calm", "bittersweet nostalgia", "serene intimacy", "professional restraint", "warm familial", "gentle melancholy", "tender romantic", "grounded realism", "solemn prestige"], 
            visualAesthetic: ["classic 35mm film", "sepia warm palette", "glossy clean", "subtle grain", "timeless monochrome", "heritage color", "cinematic realism", "refined grading", "pastel neutrality", "natural warm tone"], 
            shotType: ["establishing shot", "medium two-shot", "close-up", "medium shot", "wide shot", "over-the-shoulder shot", "master shot", "reaction shot", "insert shot (of an object)", "profile shot"],
            editingStyle: ["classic cut", "dissolve", "fade to black", "match cut", "invisible editing", "L-cut / J-cut", "shot reverse shot", "montage (short)", "cross-cutting", "long take"],
            productionDesign: ["historically accurate", "minimalist and clean", "cozy and cluttered (lived-in)", "formal and elegant", "rustic and natural", "suburban normal", "institutional (school, office)", "grand and opulent", "modest and humble", "naturalistic"],
            lensEffects: ["no effects, clean lens", "subtle lens flare", "soft focus for romantic mood", "deep focus", "natural bokeh", "clear, sharp focus", "gentle blooming on highlights", "anamorphic bokeh (subtle)", "breathing effect (subtle)", "perfectly clean image"],
            soundDesignCue: ["quiet room tone", "gentle classical music score", "sound of birds chirping", "ticking clock", "rain against the window", "crackling fireplace", "distant church bells", "clear dialogue", "footsteps on a wooden floor", "turning pages of a book"],
            pacing: ["slow and deliberate", "gentle rhythm", "leisurely", "calm and steady", "observational", "unhurried", "thoughtful", "graceful", "naturalistic timing", "real-time feel"],
            aspectRatio: ["1.85:1 (Standard Flat)", "1.37:1 (Academy Ratio)", "4:3 (Classic TV)", "1.66:1 (European Widescreen)", "2.00:1 (Univisium)", "custom narrow aspect ratio", "split screen (symmetrical)", "circular vignette", "soft-edged frame", "standard 16:9"],
            references: ["Greta Gerwig naturalism", "Wong Kar-wai nostalgia", "Ozu stillness", "Linklater realism", "Kore-eda intimacy", "Kurosawa epic drama", "Ang Lee family drama", "James Ivory heritage", "Ron Howard sincerity", "Alfonso Cuarón realism"], 
            cameraLens: ["ARRI Alexa Mini + 35mm", "Canon C300 MkIII + 85mm", "Sony FX3 + 50mm", "RED Helium + 40mm", "Leica SL Cine + 50mm", "ARRI Amira + 28mm", "Canon R5C cine + 35mm", "Sony A7S III + 24mm", "Blackmagic 6K + 35mm", "RED Raven + 50mm"], 
            characterAnchor: ["Female, early 20s, youthful, bright expression", "Female, late 20s, elegant, calm expression", "Female, early 30s, thoughtful, melancholic", "Female, 40s, mature, strong presence", "Male, early 20s, energetic, curious", "Male, late 20s, stylish, confident", "Male, early 30s, introspective, quiet strength", "Male, 40s, weathered, kind eyes", "Male, 50s, authoritative, reflective"], 
            wardrobeLock: ["Casual neutral (shirt + jeans)", "Business attire (suit, tie, dress shirt)", "Vintage (cardigan + blouse, muted tones)", "Formal evening (dress, tuxedo)", "Streetwear (hoodie, sneakers)", "Minimalist modern (monochrome outfit)", "Rustic/countryside (wool sweater, boots)", "Cultural/traditional attire (kimono, kebaya, sari, etc.)"], 
            hairMakeup: ["Hair: Shoulder-length, loose natural", "Hair: Long, wavy, styled", "Hair: Short, neat, side-part", "Hair: Bun / tied up", "Hair: Curly, voluminous", "Hair: Bald / shaved", "Makeup: Natural minimal", "Makeup: Bold (lipstick, eyeliner)", "Makeup: Matte finish", "Makeup: Vintage glam (red lips, soft curls)"],
            aspectRatio: ["16:9 (Widescreen)", "9:16 (Vertical Cinema)", "4:5 (Social Cut)", "1:1 (Square Frame)"],
            consistencyToggle: ["ON", "OFF"],
            characterRelationship: ["Distant but caring", "Intimate but restrained", "Tense and confrontational", "Playful and lighthearted", "Professional and formal", "Secretive and guarded", "Melancholic and reflective"],
            
        },
        balanced: { 
            genre: ["psychological thriller", "heist drama", "mystery adventure", "romantic drama", "political intrigue", "action suspense", "crime procedural", "dystopian near-future", "satire drama", "ensemble relationship film"], 
            sceneType: ["rooftop confrontation", "tense negotiation", "chase sequence", "nightclub reveal", "office breakdown", "subway standoff", "festival chaos", "romantic balcony", "airport goodbye", "protest march"], 
            characters: ["detective vs suspect", "small friend group", "rival conflict", "ensemble cast", "activist group", "athlete & coach", "journalist & informant", "soldier squad", "celebrity couple", "musician & fan"], 
            setting: ["subway station", "rooftop skyline", "industrial warehouse", "luxury hotel", "office tower", "airport terminal", "concert hall", "sports arena", "protest square", "fashion runway"], 
            timeOfDay: ["blue hour suspense", "neon midnight", "stormy dusk", "fluorescent office", "city skyline glow", "shadowy twilight", "nightlife bar glow", "streetlamp-lit scene", "colorful festival", "rooftop golden dusk"], 
            cameraMovement: ["handheld tracking", "steadicam pursuit", "drone reveal", "push-in close-up", "crane lift", "car-mounted tracking", "whip pan", "circular pan", "over-the-shoulder follow", "wide crowd shot"], 
            actionVerb: ["runs across a rooftop", "slams a folder on the table", "looks through binoculars", "pulls out a hidden object", "types furiously on a keyboard", "a tense handshake exchange", "chases someone through a crowd", "defuses a device", "makes a secret exchange", "has a heated argument"],
            mood: ["tense suspense", "melancholic cinematic", "stylish noir", "playful lifestyle", "dynamic urban chic", "youthful romance", "gritty realism", "energetic festival", "political urgency", "aspirational hope"], 
            visualAesthetic: ["teal & orange blockbuster", "muted pastel indie", "bleach bypass", "vibrant saturation", "cinematic urban", "romantic glow", "noir desaturation", "colorful realism", "lifestyle chic tone", "high-contrast drama"], 
            shotType: ["point-of-view (POV) shot", "dutch angle", "long tracking shot", "oners (long take)", "crash zoom", "snorricam shot", "reveal shot", "low angle hero shot", "high angle vulnerability shot", "aerial shot"],
            editingStyle: ["fast-paced cutting", "jump cut", "montage sequence", "slow-motion", "parallel editing", "graphic match", "smash cut", "whip pan transition", "fade to white", "iris out"],
            productionDesign: ["gritty and realistic urban", "sleek and modern minimalist", "near-future dystopian", "opulent luxury", "industrial and cold", "chaotic and lived-in", "stylish and curated", "neon-drenched noir", "naturalistic and organic", "corporate and sterile"],
            lensEffects: ["anamorphic lens flare", "rack focus", "focus pull", "lens breathing", "hazy bloom effect", "raindrops on lens", "intentional lens dirt/smudge", "dreamy soft filter", "vignetting to focus attention", "zoom lens compression"],
            soundDesignCue: ["tense, pulsing synth score", "bustling city ambience", "loud nightclub music", "inaudible muffled dialogue", "sudden, impactful sound effect", "character's heavy breathing", "non-diegetic music swells", "ominous drone", "cacophony of sounds", "sharp, jarring silence"],
            pacing: ["fast-paced and frantic", "tense and suspenseful", "dynamic and energetic", "alternating fast and slow", "driving and propulsive", "quick and rhythmic", "building to a crescendo", "relentless", "breathless", "punchy"],
            aspectRatio: ["2.39:1 (Anamorphic Widescreen)", "2:1 (common for streaming)", "16:9 (HD Video)", "alternating aspect ratios", "extreme letterboxing", "vertical 9:16 (for social)", "unconventional split screen", "dynamic aspect ratio changes", "super wide 3.55:1", "claustrophobic 1:1"],
            references: ["Christopher Nolan suspense", "David Fincher noir", "Denis Villeneuve sci-fi realism", "Sofia Coppola minimalism", "Paul Thomas Anderson drama", "Ridley Scott epic", "Alfonso Cuarón hybrid", "Barry Jenkins poetic realism", "Bong Joon-ho satire", "Sam Mendes theatrical style"], 
            cameraLens: ["Sony FX6 + 24–70mm", "RED Komodo + 50mm", "Canon C500 MkII + 35mm", "DJI Ronin 4D + 35mm", "ARRI Alexa LF + 47mm", "Sony Venice + 50mm prime", "Nikon Z9 cine + 28mm", "Blackmagic Pocket 6K + 85mm", "Canon R5C + 50mm", "Leica SL2 cine + 90mm"], 
            characterAnchor: ["Female, early 20s, youthful, bright expression", "Female, late 20s, elegant, calm expression", "Female, early 30s, thoughtful, melancholic", "Female, 40s, mature, strong presence", "Male, early 20s, energetic, curious", "Male, late 20s, stylish, confident", "Male, early 30s, introspective, quiet strength", "Male, 40s, weathered, kind eyes", "Male, 50s, authoritative, reflective"], 
            wardrobeLock: ["Casual neutral (shirt + jeans)", "Business attire (suit, tie, dress shirt)", "Vintage (cardigan + blouse, muted tones)", "Formal evening (dress, tuxedo)", "Streetwear (hoodie, sneakers)", "Minimalist modern (monochrome outfit)", "Rustic/countryside (wool sweater, boots)", "Cultural/traditional attire (kimono, kebaya, sari, etc.)"], 
            hairMakeup: ["Hair: Shoulder-length, loose natural", "Hair: Long, wavy, styled", "Hair: Short, neat, side-part", "Hair: Bun / tied up", "Hair: Curly, voluminous", "Hair: Bald / shaved", "Makeup: Natural minimal", "Makeup: Bold (lipstick, eyeliner)", "Makeup: Matte finish", "Makeup: Vintage glam (red lips, soft curls)"], 
            aspectRatio: ["16:9 (Widescreen)", "9:16 (Vertical Cinema)", "4:5 (Social Cut)", "1:1 (Square Frame)"],
            consistencyToggle: ["ON", "OFF"], 
            characterRelationship: ["Distant but caring", "Intimate but restrained", "Tense and confrontational", "Playful and lighthearted", "Professional and formal", "Secretive and guarded", "Melancholic and reflective"] 
        },
        experimental: { 
            genre: ["surreal horror", "nonlinear arthouse", "dreamlike sci-fi", "abstract ritual film", "symbolic mythology", "fragmented memory play", "metaphysical journey", "glitch reality fantasy", "ritualistic avant-garde", "chaotic post-human narrative"], 
            sceneType: ["fragmented dream montage", "levitation ritual", "glitch corridor", "ritualistic chanting scene", "hallucination sequence", "nonlinear flash", "body clone reveal", "infinite mirror chamber", "surreal void confrontation", "soundless scream sequence"], 
            characters: ["masked performer", "androgynous archetype", "symbolic ritual crowd", "faceless figure", "fragmented clones", "cyborg hybrid", "alien visitor", "shamanistic guide", "abstract human swarm", "dream double"], 
            setting: ["surreal void", "collapsing CGI city", "infinite mirror maze", "underwater interior", "holographic chamber", "neon dream desert", "glitch tunnel", "floating island", "distorted forest", "abstract black box stage"], 
            timeOfDay: ["glitch strobe light", "laser grids", "UV surreal glow", "projection textures", "silhouette firelight", "abstract color flicker", "inverted lighting", "shifting spotlight", "colored fog", "shadow-only illumination"], 
            cameraMovement: ["Dutch tilt spiral", "fisheye POV", "kaleidoscope split screen", "worm’s-eye distortion", "reflection through glass", "inverted framing", "slow zoom crash", "fragmented montage", "surreal double exposure", "VR immersive shot"], 
            actionVerb: ["shatters into a million pieces", "body dissolves into light particles", "moves in non-Euclidean ways", "a scream that distorts reality", "phase-shifts through a solid wall", "multiplies into several clones", "performs a ritualistic dance", "opens a portal", "communicates without speaking", "aging rapidly and in reverse"],
            mood: ["dreamlike surreal", "eerie unsettling", "chaotic abstract", "avant-garde ritual", "hyper-stylized bold", "violent raw", "meditative trance", "mythological awe", "uncanny emptiness", "psychedelic chaos"], 
            visualAesthetic: ["negative inversion", "infrared palette", "glitch overlay", "overexposed wash", "surreal mixed-media", "distorted textures", "projection mapping overlays", "psychedelic colors", "dream abstraction", "digital fantasy blend"], 
            shotType: ["abstract close-up", "impossible perspective", "subjective POV of non-human", "fourth-wall break", "multi-layered composite shot", "time-slice photography look", "slit-scan photography effect", "lensless photography look", "visual metaphor shot", "fractal zoom"],
            editingStyle: ["discontinuous editing", "graphic match (abstract)", "subliminal single-frame cuts", "non-linear narrative", "rhythmic cutting to sound", "visual poetry", "disorienting jump cuts", "datamoshing transitions", "extreme time remapping", "collapsing layers"],
            productionDesign: ["non-Euclidean architecture", "brutalist surrealism", "biomechanical sets", "liquid architecture", "minimalist void", "sentient environment", "glitching reality", "sets made of pure light", "retro-futuristic decay", "memory palace"],
            lensEffects: ["lens-whacking", "free-lensing", "prism filter effects", "kaleidoscope lens", "custom experimental lens", "liquid on lens", "broken lens effect", "extreme chromatic aberration", "anamorphic distortion", "breathing that distorts space"],
            soundDesignCue: ["deafening silence", "glitching audio", "ASMR-like textures", "atonal drone", "cacophony of overlapping voices", "a single, pure sine wave", "reversed audio", "sound that precedes the visual", "heartbeat rhythm", "white noise"],
            pacing: ["hypnotic and slow", "jarring and chaotic", "non-linear time", "cyclical / looping", "meditative and trance-like", "frenetic and explosive", "a single, long, unending moment", "fragmented and disjointed", "accelerating to infinity", "decelerating to a stop"],
            aspectRatio: ["constantly shifting aspect ratio", "extreme vertical aspect ratio", "multi-frame layout (grid)", "circular or other shape frame", "anamorphic with extreme distortion", "a tiny frame in a black void", "overlapping frames", "4:3 for claustrophobia", "polyvision (multiple screens)", "no frame (immersive)"],
            references: ["Gaspar Noé surreal chaos", "Lars von Trier raw realism", "David Lynch dream logic", "Nick Knight SHOWstudio", "Tim Walker fantasy", "Alejandro Jodorowsky symbolic", "Harmony Korine fragmented", "Peter Greenaway baroque surrealism", "Shirin Neshat conceptual", "arthouse collective visuals"], 
            cameraLens: ["Sony Venice + anamorphic", "RED Komodo + fisheye", "Canon C500 MkII + tilt-shift", "Blackmagic 6K + probe lens", "360 VR rig", "RED Komodo + 16mm wide", "Phase One + cinema back", "Canon R5C + 8mm fisheye", "Blackmagic URSA Mini + vintage glass", "experimental Lomo lenses"], 
            characterAnchor: ["Female, early 20s, youthful, bright expression", "Female, late 20s, elegant, calm expression", "Female, early 30s, thoughtful, melancholic", "Female, 40s, mature, strong presence", "Male, early 20s, energetic, curious", "Male, late 20s, stylish, confident", "Male, early 30s, introspective, quiet strength", "Male, 40s, weathered, kind eyes", "Male, 50s, authoritative, reflective"], 
            wardrobeLock: ["Casual neutral (shirt + jeans)", "Business attire (suit, tie, dress shirt)", "Vintage (cardigan + blouse, muted tones)", "Formal evening (dress, tuxedo)", "Streetwear (hoodie, sneakers)", "Minimalist modern (monochrome outfit)", "Rustic/countryside (wool sweater, boots)", "Cultural/traditional attire (kimono, kebaya, sari, etc.)"], 
            hairMakeup: ["Hair: Shoulder-length, loose natural", "Hair: Long, wavy, styled", "Hair: Short, neat, side-part", "Hair: Bun / tied up", "Hair: Curly, voluminous", "Hair: Bald / shaved", "Makeup: Natural minimal", "Makeup: Bold (lipstick, eyeliner)", "Makeup: Matte finish", "Makeup: Vintage glam (red lips, soft curls)"], 
            aspectRatio: ["16:9 (Widescreen)", "9:16 (Vertical Cinema)", "4:5 (Social Cut)", "1:1 (Square Frame)"],
            consistencyToggle: ["ON", "OFF"], 
            characterRelationship: ["Distant but caring", "Intimate but restrained", "Tense and confrontational", "Playful and lighthearted", "Professional and formal", "Secretive and guarded", "Melancholic and reflective"] 
        },
        vintage: { 
            genre: ["70s noir crime", "80s teen romance", "90s VHS horror", "retro music video", "grindhouse thriller", "spaghetti western", "70s political drama", "80s rom-com", "MTV 90s video style", "Super 8 documentary"], 
            sceneType: ["VHS home video diary", "Polaroid montage", "80s sitcom dinner", "70s disco dance", "retro training montage", "drive-in cinema date", "VHS camcorder birthday party", "old music rehearsal", "vintage news broadcast", "90s skate session"], 
            characters: ["70s rock band", "80s high school clique", "90s skater kid", "VHS family archive", "retro supermodel cast", "disco dancers", "cowboy drifters", "arcade kids", "retro politician", "retro sitcom family"], 
            setting: ["neon diner", "VHS living room", "80s arcade", "retro gym hall", "drive-in cinema", "roller rink", "retro photo studio", "70s political rally stage", "disco club", "VHS classroom"], 
            timeOfDay: ["tungsten interiors", "fluorescent arcade light", "VHS camcorder flash", "Polaroid daylight", "incandescent warm glow", "neon diner sign", "disco ball sparkle", "70s warm yellow stage light", "retro gradient backdrop", "VHS spotlight wash"], 
            cameraMovement: ["handheld camcorder shake", "VHS crash zoom", "Polaroid static frame", "70s slow zoom", "Super 8 jitter pan", "dolly zoom 80s thriller", "shoulder-mounted Betacam", "retro sitcom multi-cam", "VHS tilt framing", "analog crane move"], 
            actionVerb: ["puts a vinyl record on the player", "answers a rotary phone", "lights a cigarette in a smoky room", "skateboarding down a suburban street", "a cheesy thumbs-up to the camera", "dancing under a disco ball", "rewinding a cassette with a pencil", "adjusts TV antenna", "sprays hair with hairspray", "blows bubblegum"],
            mood: ["nostalgic analog charm", "VHS eerie lo-fi", "retro glam", "playful cheesy vibe", "documentary realism", "disco energy", "80s heartfelt melodrama", "70s political tension", "90s indie film vibe", "Polaroid warmth"], 
            visualAesthetic: ["VHS static grain", "Polaroid faded color", "Kodachrome 70s palette", "80s glossy ad look", "90s music video style", "analog documentary tone", "archival warm sepia", "disco neon glow", "retro magazine color block", "Super 8 film grain"], 
            shotType: ["grainy close-up", "static wide shot (sitcom style)", "handheld follow shot", "crash zoom", "authentic home video shot", "found footage POV", "posed music video shot", "archival news footage style", "candid snapshot moment", "slow zoom reveal"],
            editingStyle: ["hard cuts", "long cross-dissolves (70s)", "VHS-style glitch cuts", "montage with pop music", "wipe transitions", "fade in from black", "A/B roll editing", "cheesy star wipe", "split screen (70s)", "match cut on action"],
            productionDesign: ["wood paneling and shag carpets (70s)", "neon and chrome (80s)", "beige plastic and flannel (90s)", "authentic period-correct props", "intentionally cheap-looking set", "vintage advertising in background", "cluttered and lived-in", "minimalist for the era", "disco-era glam", "suburban teen bedroom"],
            lensEffects: ["soft focus / blooming highlights", "streaky lens flare", "vaseline on the lens effect", "zoom lens breathing", "low-quality VHS lens distortion", "grainy, low-light noise", "authentic film gate weave", "dust on the lens", "anamorphic flare (70s)", "dreamy diffusion filter"],
            soundDesignCue: ["vinyl record crackle", "cassette tape hiss", "8-bit video game sounds", "sitcom laugh track", "muffled dialogue from old TV", "80s synth-pop score", "70s funk music", "rotary phone ringing", "VHS tape motor whirring", "dial-up modem sounds"],
            pacing: ["leisurely 70s pacing", "fast-paced 80s montage", "slacker 90s pacing", "home video real-time feel", "documentary observational", "music video rhythm", "suspenseful slow-burn", "comedic timing", "erratic and jittery", "nostalgic and slow"],
            aspectRatio: ["4:3 (CRT Television)", "2.35:1 (70s Widescreen)", "1.85:1 (80s/90s Film)", "Super 8mm aspect ratio", "grainy 16mm aspect ratio", "rounded TV screen corners", "video camera viewfinder overlay", "split screen", "damaged film border", "authentic Polaroid frame"],
            references: ["Brian De Palma thrillers", "John Hughes teen films", "Wim Wenders road movies", "early Spike Lee", "80s MTV music videos", "70s Italian giallo", "French New Wave echoes", "Richard Donner 80s blockbusters", "VHS-era horror (Troma)", "Fellini retro surrealism"], 
            cameraLens: ["Super 8mm film camera", "VHS camcorder (Sony Handycam)", "Betacam SP", "Bolex 16mm", "Panasonic M7 VHS shoulder cam", "Polaroid instant film recorder", "Arriflex 435 (70s)", "Mitchell BNCR (classic Hollywood)", "Hi8 camcorder", "analog 35mm Panavision"], 
            characterAnchor: ["Female, early 20s, youthful, bright expression", "Female, late 20s, elegant, calm expression", "Female, early 30s, thoughtful, melancholic", "Female, 40s, mature, strong presence", "Male, early 20s, energetic, curious", "Male, late 20s, stylish, confident", "Male, early 30s, introspective, quiet strength", "Male, 40s, weathered, kind eyes", "Male, 50s, authoritative, reflective"], 
            wardrobeLock: ["Casual neutral (shirt + jeans)", "Business attire (suit, tie, dress shirt)", "Vintage (cardigan + blouse, muted tones)", "Formal evening (dress, tuxedo)", "Streetwear (hoodie, sneakers)", "Minimalist modern (monochrome outfit)", "Rustic/countryside (wool sweater, boots)", "Cultural/traditional attire (kimono, kebaya, sari, etc.)"], 
            hairMakeup: ["Hair: Shoulder-length, loose natural", "Hair: Long, wavy, styled", "Hair: Short, neat, side-part", "Hair: Bun / tied up", "Hair: Curly, voluminous", "Hair: Bald / shaved", "Makeup: Natural minimal", "Makeup: Bold (lipstick, eyeliner)", "Makeup: Matte finish", "Makeup: Vintage glam (red lips, soft curls)"], 
            aspectRatio: ["16:9 (Widescreen)", "9:16 (Vertical Cinema)", "4:5 (Social Cut)", "1:1 (Square Frame)"],
            consistencyToggle: ["ON", "OFF"], 
            characterRelationship: ["Distant but caring", "Intimate but restrained", "Tense and confrontational", "Playful and lighthearted", "Professional and formal", "Secretive and guarded", "Melancholic and reflective"] 
        }
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
    // ... (Fungsi ini sama seperti versi Stable Diffusion sebelumnya)
    const initialFormState = {};
    ['model', 'product', 'film'].forEach(m => { /* ... */ });
    const initialHumanState = { enabled: false };
    PROMPT_OPTIONS.special.humanInShot.fields.forEach(field => { /* ... */ });
    const initialLockState = {};
    ['model', 'product', 'film', 'product_human'].forEach(m => { /* ... */ });

    state = {
        mode: 'model', // Default kembali ke mode 'model'
        intensity: 'conservative',
        isLoading: { suggest: false, generateImage: false },
        formState: initialFormState,
        lockedFields: initialLockState,
        humanState: initialHumanState,
        filmState: { numScenes: 1, linkScenes: true },
        error: null,
        stableDiffusionApiKey: '',
        productImage: { data: null, file: null },
        humanImage: { data: null, file: null },
        generatedImages: [], // Diubah menjadi array untuk menampung multiple images (untuk film)
    };
    updateDefaults();
}

function updateDefaults() { /* ... (Fungsi ini tetap sama) ... */ }

// =======================================================================
// HELPER & COMPONENT FUNCTIONS
// =======================================================================
const capitalize = (s) => (s && typeof s === 'string' ? s.charAt(0).toUpperCase() + s.slice(1) : '');
function LockIcon(locked) { /* ... (Disingkat) ... */ }
function Tooltip(text) { /* ... (Disingkat) ... */ }
function SegmentedControl({ options, selected, id }) { /* ... (Fungsi ini tetap sama) ... */ }
function FormField({ id, mode, fieldId, label, options, value, customValue, isLocked = false }) { /* ... (Fungsi ini tetap sama) ... */ }
function ToggleSwitch({ id, label, checked }) { /* ... (Fungsi ini tetap sama) ... */ }
function ProductFormExtras() { /* ... (Fungsi ini tetap sama) ... */ }
function FilmFormExtras() { /* ... (Fungsi ini tetap sama) ... */ }

// --- UI BARU DAN YANG DIMODIFIKASI ---
function StableDiffusionKeyInput() { /* ... (Fungsi ini tetap sama) ... */ }
function ImageUploadSection() { /* ... (Fungsi ini tetap sama) ... */ }

// Modifikasi untuk menampilkan satu atau banyak gambar
function GeneratedImageSection({ images }) {
     return `
        <div class="mb-6">
            <h3 class="text-lg font-semibold text-gray-800 mb-2">Hasil Gambar</h3>
            <div class="p-4 bg-gray-100 rounded-lg grid grid-cols-1 md:grid-cols-${images.length > 1 ? '2' : '1'} gap-4">
                ${images.map((img, index) => `
                    <div class="text-center">
                        <p class="font-semibold mb-2">Scene ${index + 1}</p>
                        <img src="${img.url}" alt="${img.prompt}" class="max-w-full rounded-md shadow-lg mx-auto" />
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function clearFormAndOutputs() { /* ... (Fungsi ini tetap sama) ... */ }

function renderApp() {
    const root = document.getElementById('root');
    if (!root) return;

    const { mode, intensity, isLoading, generatedImages } = state;
    // ... (sisa deklarasi variabel sama)

    // ... (logika renderFields sama)

    let extrasHTML = '';
    // Tampilkan UI spesifik berdasarkan mode
    if (mode === 'product') {
        if (state.stableDiffusionApiKey) {
            extrasHTML += ImageUploadSection();
        }
        extrasHTML += ProductFormExtras();
    } else if (mode === 'film') {
        extrasHTML += FilmFormExtras();
    }
    // Mode 'model' tidak punya extrasHTML khusus

    let outputHTML = '';
    if (isLoading.generateImage) {
        outputHTML = `<div class="text-center p-10"><p class="text-gray-600" id="loading-status">Generating image(s) with Stable Diffusion... This may take a moment.</p></div>`;
    } else if (generatedImages && generatedImages.length > 0) {
        outputHTML = GeneratedImageSection({ images: generatedImages });
    }

    let errorHTML = '';
    if (state.error) { /* ... */ }

    const appHTML = `
        <div class="w-full max-w-4xl mx-auto p-4 sm:p-6">
            <main class="bg-white rounded-2xl shadow-xl p-6 sm:p-10">
                <div class="space-y-6">
                   <div>
                        <label class="text-sm font-semibold text-gray-700 mb-2 block">Mode</label>
                        ${SegmentedControl({ id: 'mode-selector', options: [{ value: 'model', label: 'Model Photography' }, { value: 'product', label: 'Product Photography' }, { value: 'film', label: 'Short Film Scene' }], selected: mode })}
                    </div>
                    </div>
                
                ${StableDiffusionKeyInput()}

                ${extrasHTML}

                <div class="mt-10 pt-6 border-t ...">
                    <button id="generate-image-btn" class="w-full ... ${isLoading.generateImage ? 'disabled' : ''}">
                        ${isLoading.generateImage ? 'Generating...' : 'Generate Image'}
                    </button>
                    </div>
            </main>
            ${errorHTML}
            ${outputHTML ? `<section class="mt-8 ...">${outputHTML}</section>` : ''}
        </div>
    `;
    root.innerHTML = appHTML;
    addEventListeners();
}

// =======================================================================
// EVENT LISTENERS & HANDLERS
// =======================================================================
function handleImageUpload(event, imageType) { /* ... (Fungsi ini tetap sama) ... */ }
function addEventListeners() { /* ... (Fungsi ini tetap sama, pastikan #generate-image-btn memanggil handleSubmit) ... */ }
function handleFormChange(e) { /* ... (Fungsi ini tetap sama) ... */ }
function handleLockToggle(e) { /* ... (Fungsi ini tetap sama) ... */ }
function handleToggleChange(e) { /* ... (Fungsi ini tetap sama) ... */ }
function getFinalValue(fieldState) { /* ... (Fungsi ini tetap sama) ... */ }

// --- FUNGSI API & SUBMIT YANG DIUBAH TOTAL ---

// Fungsi ini tetap ada untuk Suggest with AI (Groq) & membuat prompt film
async function callGenerateAPI(prompt) { /* ... (Fungsi ini tetap sama) ... */ }

// handleSubmit sekarang menangani SEMUA mode
async function handleSubmit() {
    if (!state.stableDiffusionApiKey) {
        alert("Please enter your Stability AI API Key.");
        return;
    }

    state.isLoading.generateImage = true;
    state.generatedImages = [];
    state.error = null;
    renderApp();

    const { mode, formState, humanState, filmState, productImage } = state;

    try {
        let textPrompts = [];

        // LANGKAH 1: Siapkan Prompt Teks berdasarkan Mode
        if (mode === 'product') {
            if (!productImage.file) {
                alert("Please upload a Product Image for Image-to-Image mode.");
                throw new Error("Product image is required for this mode.");
            }
            // Untuk mode produk, kita buat satu prompt dari form
            const sceneFields = ['sceneStyle', 'background', 'lighting', 'mood', 'composition', 'colorPalette', 'references'];
            let promptParts = sceneFields.map(id => getFinalValue(formState.product[id])).filter(Boolean);
            if (humanState.enabled) {
                const humanDesc = PROMPT_OPTIONS.special.humanInShot.fields.map(id => getFinalValue(humanState[id])).filter(Boolean).join(', ');
                if (humanDesc) promptParts.push(`A person in the shot, ${humanDesc}`);
            }
            textPrompts.push(promptParts.join(', '));

        } else if (mode === 'model' || mode === 'film') {
            // Untuk mode model & film, kita minta Groq untuk membuat prompt teks
            const fieldsToCombine = PROMPT_OPTIONS[mode].fields;
            const parameterString = fieldsToCombine.map(id => getFinalValue(formState[mode][id])).filter(Boolean).join(', ');
            
            const cleanAIText = (rawText) => rawText.replace(/```(plaintext|json)?\n?|```/g, '').trim();

            if(mode === 'film' && filmState.numScenes > 1) {
                // Minta beberapa prompt untuk film
                const filmPromptRequest = `Based on these keywords: "${parameterString}", write ${filmState.numScenes} connected text-to-image prompts for a short film scene. Separate each prompt with "---SCENE BREAK---".`;
                const rawPrompts = await callGenerateAPI(filmPromptRequest);
                if (rawPrompts) textPrompts = rawPrompts.split('---SCENE BREAK---').map(s => s.trim());
            } else {
                // Minta satu prompt untuk model atau film 1 adegan
                const singlePromptRequest = `Synthesize these keywords into a single, powerful text-to-image prompt paragraph: "${parameterString}"`;
                const singlePrompt = await callGenerateAPI(singlePromptRequest);
                if(singlePrompt) textPrompts.push(cleanAIText(singlePrompt));
            }
        }
        
        if (textPrompts.length === 0) throw new Error("Could not generate text prompts to start image generation.");

        // LANGKAH 2: Panggil API Stable Diffusion untuk setiap prompt
        let generatedImages = [];
        for (let i = 0; i < textPrompts.length; i++) {
            const loadingStatus = document.getElementById('loading-status');
            if(loadingStatus) loadingStatus.textContent = `Generating image ${i + 1} of ${textPrompts.length}...`;

            const formData = new FormData();
            const prompt = textPrompts[i];
            
            // Tentukan endpoint dan body berdasarkan mode
            let apiUrl, strengthParam;
            if (mode === 'product') {
                apiUrl = "https://api.stability.ai/v1/generation/stable-diffusion-v1-6/image-to-image";
                formData.append('init_image', productImage.file);
                formData.append('image_strength', 0.5); // Bisa disesuaikan
            } else {
                apiUrl = "https://api.stability.ai/v1/generation/stable-diffusion-v1-6/text-to-image";
            }
            
            formData.append('text_prompts[0]text', prompt);
            formData.append('text_prompts[0]weight', 1);
            formData.append('cfg_scale', 7);
            formData.append('samples', 1);
            formData.append('steps', 30);

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Accept': 'application/json', 'Authorization': `Bearer ${state.stableDiffusionApiKey}` },
                body: formData,
            });

            if (!response.ok) throw new Error(`Stability AI Error for Scene ${i+1}: ${await response.text()}`);
            
            const responseJSON = await response.json();
            const imageUrl = `data:image/png;base64,${responseJSON.artifacts[0].base64}`;
            generatedImages.push({ url: imageUrl, prompt: prompt });
        }
        
        state.generatedImages = generatedImages;

    } catch (error) {
        console.error("Image generation failed:", error);
        state.error = error.message;
    } finally {
        state.isLoading.generateImage = false;
        renderApp();
    }
}

async function handleAISuggest() { /* ... (Fungsi ini tetap sama) ... */ }

// =======================================================================
// INITIALIZE APP
// =======================================================================
document.addEventListener('DOMContentLoaded', () => {
    initializeState();
    renderApp();
});
