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
        fieldDescriptions: {
            sceneStyle: "The overall visual genre of the photograph. Examples: 'editorial portrait' for a magazine style, or 'studio portrait' for a controlled studio shot.",
            mainSubject: "The primary focus of the image. This can be a single person, a group, or a specific character archetype.",
            ethnicity: "The subject's ethnic background, skin tone, or origin, ensuring accurate and desired representation.",
            styling: "The subject's appearance, including hair, outfit, and makeup. This is crucial for defining the character and theme.",
            expression: "The facial expression or body language of the subject, used to convey a specific emotion or mood.",
            actionVerb: "For video: The specific movement performed by the subject. This defines what is happening in the scene.",
            cameraAngle: "The position and viewpoint of the camera relative to the subject, such as 'eye-level' or 'low-angle' for a powerful look.",
            lighting: "The lighting setup for the scene, which creates mood and dimension. 'Softbox' lighting is flattering, while 'golden hour' is warm and dramatic.",
            background: "The environment behind the subject. It can range from a simple 'seamless paper' in a studio to a specific real-world location.",
            mood: "The overall emotional feeling or aesthetic of the image, like 'timeless editorial' or 'clean minimalist'.",
            composition: "The arrangement of visual elements within the frame. 'Rule of thirds' is a classic technique for balance.",
            focusTechnique: "How focus is used to direct the viewer's eye, such as 'shallow depth of field' to create a blurry background (bokeh).",
            colorPalette: "The dominant color scheme of the image, such as 'neutral tones' for a calm feel or 'monochromatic' for a unified look.",
            filmStock: "The texture and grain of the image, often simulating classic analog film like 'Kodak Portra 400' for a vintage aesthetic.",
            postProcessing: "The editing style applied after the photo is taken, such as 'natural retouching' or adding 'contrast enhancement'.",
            atmosphere: "The tangible feeling of the environment in the image. Is it 'calm and composed' or 'warm and inviting'?",
            references: "Inspiration from famous photographers, magazines, or brands to serve as a visual benchmark for the desired style.",
            cameraLens: "The simulated camera and lens used to achieve specific optical characteristics, like perspective and depth of field.",
            aspectRatio: "The proportional relationship between the image's width and height, e.g., '1:1' for a square format or '16:9' for widescreen."
        },
        conservative: { 
            sceneStyle: ["editorial portrait", "studio portrait", "fashion lookbook", "beauty shot", "corporate headshot", "catalogue clean shot", "bridal studio session", "black & white studio headshot", "formal fashion editorial", "graduation portrait", "vanity fair style", "business lifestyle", "classic full body portrait", "monochromatic studio", "fine art nude", "political campaign photo", "author headshot", "formal family portrait", "theatrical headshot", "passport photo style"],
            mainSubject: ["single female model", "single male model", "duo portrait", "business professional", "family/lifestyle group", "academic scholar", "classical dancer", "bride/groom", "executive profile", "politician headshot", "musician with instrument", "author", "artist in studio", "chef in kitchen", "doctor in uniform", "lawyer in office", "athlete posing", "elderly couple", "mother and child", "group of friends"],
            ethnicity: ["Caucasian light", "East Asian fair", "South Asian wheatish", "African deep", "Middle Eastern olive", "Nordic fair", "Mediterranean tan", "Native American warm", "Central European pale", "Sub-Saharan deep", "Japanese", "Korean", "Chinese", "Indian", "Nigerian", "Ethiopian", "Brazilian", "Russian", "English", "Australian Aboriginal"],
            styling: ["natural makeup", "classic attire", "business suit", "casual wear", "flowing hair", "cultural formal dress", "tuxedo/ball gown", "neat bob haircut", "minimal jewelry", "everyday conservative style", "cashmere sweater", "linen shirt", "tailored trousers", "silk blouse", "trench coat", "leather shoes", "vintage watch", "simple pearl necklace", "bespoke suit", "elegant evening dress"],
            expression: ["soft smile", "contemplative look", "confident gaze", "gentle expression", "relaxed posture", "neutral elegance", "polite smile", "formal standing pose", "hand-folded posture", "classic calm presence", "thoughtful frown", "slight head tilt", "serene", "joyful laughter", "serious and direct", "warm and inviting", "proud and accomplished", "graceful repose", "candid interaction", "pensive gaze"],
            actionVerb: ["slowly looks up at the camera", "takes a gentle, calming breath", "subtly adjusts their collar or tie", "a neutral expression slowly forms into a smile", "blinks slowly and thoughtfully", "tilts head slightly with curiosity", "maintains steady eye contact", "gently touches their face", "rests chin on hand thoughtfully", "a subtle, polite nod", "reads a book", "writes in a journal", "sips tea", "looks out a window", "arranges flowers", "plays a piano", "holds a pen", "buttons a jacket", "folds a newspaper", "clasps hands together"],
            cameraAngle: ["eye-level medium shot", "close-up portrait", "three-quarter body", "waist-up shot", "straight-on symmetry", "classic profile", "full-length classic", "balanced corporate framing", "group lineup straight-on", "symmetrical centered composition", "slightly high angle", "slightly low angle", "dutch angle", "over the shoulder", "point of view", "wide shot establishing scene", "extreme close-up on eyes", "two-shot", "master shot", "canted angle"],
            lighting: ["softbox key + fill", "natural window light", "golden hour backlight", "high-key studio", "balanced daylight", "three-point clean", "ring light glow", "clean white bounce", "warm golden indoor", "diffused key light", "Rembrandt lighting", "butterfly lighting", "split lighting", "loop lighting", "broad lighting", "short lighting", "clam shell lighting", "top lighting", "under lighting", "silhouette lighting"],
            background: ["seamless paper", "clean white studio", "neutral textured wall", "soft foliage", "classic drapery", "corporate office backdrop", "neutral gradient", "polished wood", "hotel wall", "library shelves", "art gallery", "museum", "university campus", "modern architecture", "city park", "beach at sunset", "mountain landscape", "rustic barn", "cozy cafe", "luxury apartment"],
            mood: ["timeless editorial", "clean minimalist", "elegant sophistication", "professional polish", "understated beauty", "classical prestige", "documentary neutral", "heritage cultural pride", "corporate timeless", "commercial elegance", "serene and peaceful", "warm and inviting", "dramatic and intense", "romantic and dreamy", "mysterious and enigmatic", "powerful and confident", "playful and energetic", "nostalgic and sentimental", "hopeful and optimistic", "melancholy and introspective"],
            composition: ["rule of thirds", "centered", "symmetrical", "minimalist composition", "golden ratio", "head and shoulders", "profile view", "formal portrait", "environmental context", "clean background", "leading lines", "framing", "fill the frame", "negative space", "pattern and repetition", "rule of odds", "depth of field", "juxtaposition", "balance", "diagonal lines"],
            focusTechnique: ["sharp focus on eyes", "soft focus background", "shallow depth of field", "deep focus", "f/1.8 aperture effect", "f/8 aperture effect", "everything in focus", "selective focus on face", "bokeh background", "crisp focus on subject", "rack focus", "follow focus", "zone focusing", "hyperfocal distance", "split diopter", "lens flare", "motion blur", "panning", "zoom burst", "freelensing"],
            colorPalette: ["neutral tones", "monochromatic black & white", "muted color palette", "warm tones", "cool tones", "earthy tones", "pastel colors", "high-contrast B&W", "sepia tone", "natural skin tones", "analogous colors", "complementary colors", "triadic colors", "split-complementary colors", "tetradic colors", "square colors", "vibrant colors", "desaturated colors", "high key", "low key"],
            filmStock: ["crisp digital", "subtle grain", "smooth digital", "fine grain texture", "Ilford HP5 look", "Kodak Portra 400 look", "no grain", "high-definition", "medium format look", "clean sensor look", "Kodak Gold 200", "Fuji Superia 400", "Ilford Delta 3200", "CineStill 800T", "Lomography Color Negative 400", "Agfa Vista 200", "Kodak Ektar 100", "Fuji Velvia 50", "Polaroid 600", "Instant film"],
            postProcessing: ["lightroom clean edit", "natural retouching", "contrast enhancement", "sharpening", "dodge and burn", "color correction", "desaturated look", "warmth added", "vignette", "blemish removal", "frequency separation", "split toning", "clarity adjustment", "dehaze", "noise reduction", "lens correction", "healing brush", "clone stamp", "liquify", "unsharp mask"],
            atmosphere: ["calm and composed", "professional and serious", "warm and inviting", "serene and quiet", "thoughtful and introspective", "elegant and poised", "trustworthy", "dignified", "peaceful", "approachable", "energetic and vibrant", "dramatic and moody", "dreamy and ethereal", "romantic and intimate", "mysterious and suspenseful", "powerful and commanding", "playful and lighthearted", "nostalgic and wistful", "hopeful and optimistic", "melancholy and somber"],
            references: ["Vogue", "Harper’s Bazaar", "WSJ", "Vanity Fair", "COS campaign", "Ralph Lauren ads", "Jil Sander minimal", "National Geographic portraits", "Fortune 500 campaigns", "Smithsonian archives", "Annie Leibovitz", "Richard Avedon", "Irving Penn", "Helmut Newton", "Peter Lindbergh", "Sebastião Salgado", "Henri Cartier-Bresson", "Ansel Adams", "Yousuf Karsh", "Steve McCurry"],
            cameraLens: ["Canon EOS R5 + 85mm", "Nikon Z8 + 70–200mm", "Sony A7R V + 50mm", "Fujifilm GFX 100S + 110mm", "Hasselblad X2D + 80mm", "Canon 6D + 50mm", "Nikon D850 + 85mm", "Sony A7 III + 70–200mm", "Hasselblad H6D + 100mm", "Fujifilm X-T4 + 35mm", "Leica M11 + 50mm Summilux", "Pentax 67 + 105mm", "Mamiya RZ67 + 110mm", "Phase One XF + 80mm", "Olympus OM-D E-M1 Mark III + 45mm", "Panasonic Lumix S1R + 50mm", "Sigma fp L + 45mm", "Ricoh GR III", "Contax T2", "Yashica T4"],
            aspectRatio: ["1:1 (Square)", "4:5 (Portrait)", "16:9 (Landscape)", "9:16 (Vertical)", "3:2", "5:4", "7:5", "1.85:1", "2.39:1", "panoramic"]
        },
        balanced: { 
            sceneStyle: ["lifestyle candid", "street fashion editorial", "cinematic portrait", "environmental portrait", "rooftop editorial", "café lifestyle set", "seaside fashion spread", "documentary style", "luxury commercial lookbook", "art gallery editorial set", "music festival coverage", "travel blog photography", "urban exploration", "behind the scenes", "sports photography", "performance art", "conceptual fashion", "nightlife photography", "food photography", "product in use"],
            mainSubject: ["creative duo", "small group (3–4)", "performance artist", "fashion collective", "athlete editorial", "musician portrait", "influencer figure", "couple candid", "fashion blogger", "theatre troupe", "chef at work", "DJ performing", "skateboarder in motion", "surfer riding a wave", "hiker on a mountain", "dancer in mid-air", "street artist painting", "couple on a date", "friends laughing", "family on vacation"],
            ethnicity: ["Latina/Latino medium", "Mixed heritage neutral", "Afro-Caribbean warm", "Eastern European pale", "Southeast Asian golden", "Turkish olive", "Brazilian golden", "Caribbean bronze", "Pacific Islander glow", "Pan-Asian neutral", "Polynesian", "Maori", "Inuit", "Sami", "Berber", "Tuareg", "Masai", "Zulu", "Xhosa", "Yoruba"],
            styling: ["bold makeup accents", "streetwear chic", "evening wear glamour", "retro-inspired fashion", "smart casual with layers", "sporty chic", "travel fashion", "minimalist editorial", "layered accessories", "contemporary tailoring", "bohemian", "goth", "punk", "preppy", "athleisure", "normcore", "avant-garde", "vintage", "grunge", "cyberpunk"],
            expression: ["playful gesture", "elegant turn", "candid laugh", "confident walk", "casual interaction", "joyful look", "subtle flirt", "introspective glance", "natural hand-in-pocket", "dynamic stride", "surprised", "shocked", "angry", "sad", "fearful", "disgusted", "contemptuous", "excited", "curious", "bored"],
            actionVerb: ["turns to face the camera", "walks into frame and stops", "laughs candidly then looks at the lens", "brushes hair away from their face", "interacts with a prop naturally", "leans forward with interest", "looks over their shoulder", "adjusts their jacket", "takes a sip of coffee", "gestures while talking", "jumps in the air", "runs towards the camera", "dances", "sings", "plays guitar", "paints a canvas", "writes in a notebook", "types on a laptop", "rides a skateboard", "throws a ball"],
            cameraAngle: ["over-the-shoulder", "high-angle crop", "low-angle perspective", "lifestyle wide shot", "diagonal crop", "candid side framing", "tilted composition", "medium wide urban shot", "casual creative crop", "cinematic walk-by shot", "bird's eye view", "worm's eye view", "pov", "subjective", "objective", "long shot", "full shot", "medium long shot", "medium close-up", "extreme close-up"],
            lighting: ["cinematic spotlight + fill", "moody soft shadow", "neon rim accent", "cloudy daylight diffuse", "candle glow", "mixed practicals", "urban streetlights", "reflective bounce", "colored gels accent", "warm ambient light", "hard light", "soft light", "backlight", "sidelight", "key light", "fill light", "hair light", "kicker", "gobo", "snoot"],
            background: ["urban street", "rooftop skyline", "café interior", "seaside rocks", "boutique store", "subway station", "industrial warehouse", "lifestyle home interior", "fashion runway", "contemporary architecture", "neon-lit alley", "abandoned building", "forest at night", "desert landscape", "carnival", "amusement park", "skate park", "graffiti wall", "rooftop pool", "greenhouse"],
            mood: ["cinematic moody", "vibrant commercial", "contemporary chic", "youthful playful", "luxury modern", "romantic editorial", "aspirational lifestyle", "stylish urban chic", "polished dynamic", "cinematic realism", "gritty and raw", "dreamy and surreal", "dark and mysterious", "light and airy", "bold and confident", "quiet and contemplative", "chaotic and energetic", "calm and serene", "edgy and rebellious", "whimsical and magical"],
            composition: ["leading lines", "frame within a frame", "asymmetrical balance", "dynamic symmetry", "negative space", "rule of odds", "fill the frame", "foreground interest", "pattern and repetition", "breaking the rules", "golden triangle", "golden spiral", "rule of space", "simplification", "contrast", "color theory", "texture", "scale", "perspective", "movement"],
            focusTechnique: ["shallow depth of field (bokeh)", "rack focus effect", "subject in sharp focus, background blurred", "motion blur in background", "split diopter effect", "lens flare focus", "soft focus aesthetic", "deep focus with wide lens", "focus tracking on subject", "manual focus look", "tilt-shift", "zoom pull", "crash zoom", "slow zoom", "fast zoom", "breathing", "focus stacking", "focus bracketing", "back button focus", "pre-focusing"],
            colorPalette: ["teal and orange", "vibrant pastels", "cinematic color grade", "warm and cool contrast", "neon colors", "desaturated urban tones", "golden hour palette", "bold primary colors", "analogous colors", "complementary colors", "triadic", "split-complementary", "tetradic", "square", "monochromatic", "achromatic", "high contrast", "low contrast", "pastel", "earth tones"],
            filmStock: ["Kodak Portra 400 grain", "Fuji Superia look", "cinematic digital (Arri Alexa look)", "light film grain", "35mm film texture", "clean digital with high dynamic range", "vintage Ektachrome", "lomo film effect", "disposable camera look", "sharp medium format digital", "16mm film", "Super 8 film", "Technicolor", "bleach bypass", "cross-processing", "push processing", "pull processing", "solarization", "reticulation", "daguerreotype"],
            postProcessing: ["VSCO filter look", "cinematic LUT applied", "bleach bypass effect", "high saturation and contrast", "split toning (shadows/highlights)", "frequency separation skin retouching", "dehaze and clarity boost", "cross-processed look", "glow and bloom effect", "lens distortion correction", "color grading", "color correction", "dodging and burning", "sharpening", "noise reduction", "vignetting", "healing and cloning", "compositing", "masking", "blending modes"],
            atmosphere: ["energetic and bustling", "melancholy and cinematic", "intimate and candid", "dreamy and romantic", "gritty and urban", "sun-drenched and carefree", "mysterious and moody", "vibrant and alive", "quiet and observational", "aspirational and luxurious", "tense and suspenseful", "chaotic and overwhelming", "peaceful and tranquil", "eerie and unsettling", "magical and enchanting", "dystopian and oppressive", "utopian and idyllic", "surreal and bizarre", "nostalgic and bittersweet", "futuristic and technological"],
            references: ["Mario Testino fashion", "Annie Leibovitz portraits", "A24 stills", "Zara lookbook", "Dior campaigns", "The Row luxury", "Prada resort shoots", "Gucci lifestyle", "Uniqlo editorial", "H&M commercial", "Wes Anderson", "Quentin Tarantino", "David Fincher", "Christopher Nolan", "Sofia Coppola", "Spike Jonze", "Greta Gerwig", "Bong Joon-ho", "Wong Kar-wai", "Hayao Miyazaki"],
            cameraLens: ["Canon 5D MkIV + 35mm", "Sony A7 IV + 24–70mm", "Nikon Z9 + 50mm", "Leica SL2 + 90mm", "Fujifilm X-T5 + 56mm", "Canon R5 + 35mm f/1.4", "Sony A7R V + 24–70mm", "Leica SL2 + 50mm Summilux", "Nikon Z9 + 24–120mm", "Fujifilm GFX 100 + 63mm", "Panasonic Lumix GH5 + 12-35mm", "Blackmagic Pocket Cinema Camera 6K + 18-35mm", "RED Komodo + 24-70mm", "Arri Alexa Mini + 50mm", "GoPro HERO11 Black", "DJI Mavic 3", "Insta360 X3", "iPhone 16 Pro", "Samsung Galaxy S26 Ultra", "Google Pixel 10"],
            aspectRatio: ["1:1 (Square)", "4:5 (Portrait)", "16:9 (Landscape)", "9:16 (Vertical)", "2.35:1 (Cinemascope)", "1.85:1 (Widescreen)", "2:1", "3:2", "5:4", "anamorphic"]
        },
        experimental: { 
            sceneStyle: ["conceptual portrait", "surreal fashion editorial", "avant-garde beauty shot", "performance art documentation", "cyberpunk fantasy scene", "underwater conceptual portrait", "infrared portrait session", "mirror maze surreal shoot", "holographic fashion editorial", "glitch-inspired portrait", "abstract light painting", "long exposure photography", "multiple exposure", "scanography", "photogram", "chemigram", "luminogram", "pinhole photography", "light and shadow play", "kinetic photography"],
            mainSubject: ["androgynous figure", "conceptual character", "masked performer", "abstract human form", "augmented avatar", "mannequin hybrid", "multi-exposure identity", "choreographed ensemble", "cyborg-inspired model", "silhouette-only subject", "glitched human", "liquid metal sculpture", "sentient AI", "interdimensional being", "dream creature", "memory fragment", "emotional embodiment", "social commentary", "political statement", "philosophical concept"],
            ethnicity: ["ambiguous ethnicity", "painted body/skin treatment", "digitally morphed features", "hybrid cultural mix", "translucent metallic skin", "UV-reactive paint", "holographic skin effect", "albino stylization", "cyber-synthetic skin tone", "surreal monochrome body paint", "glowing veins", "crystalized skin", "plant-human hybrid", "animal-human hybrid", "elemental being (fire, water, earth, air)", "celestial being", "void-touched", "shadow-kin", "light-forged", "data-stream entity"],
            styling: ["avant-garde makeup", "sculptural hair", "holographic styling", "liquid/surreal fashion", "cybernetic prosthetics", "gravity-defying hair", "sculptural textile outfit", "liquid latex wear", "3D printed attire", "fragmented mirror styling", "wearable technology", "biomechanical fashion", "living garments", "projection mapping on clothes", "sound-reactive clothing", "light-emitting fabrics", "zero-gravity fashion", "metamaterial clothing", "4D printed fashion", "virtual reality fashion"],
            expression: ["intense stare", "extreme pose", "distorted gesture", "surreal gaze", "scream with blur", "levitating pose", "fragmented body twist", "mirror-hand reflection", "avant-garde theatrical stare", "otherworldly stillness", "glitching between emotions", "serene detachment", "maniacal glee", "abject terror", "divine ecstasy", "cosmic indifference", "existential dread", "unfathomable sorrow", "pure unfiltered rage", "absolute tranquility"],
            actionVerb: ["body glitches or fragments slightly", "levitates slowly off the ground", "face morphs between two expressions", "shatters like glass and reforms", "opens eyes to reveal glowing irises", "surrounded by floating particles", "liquid drips from fingertips", "body dissolves into smoke", "a second self emerges", "moves in reverse", "walks on walls", "breathes light", "weeps liquid starlight", "sings in a dead language", "paints with their own shadow", "conducts an orchestra of light", "sculpts reality with their hands", "dances with their own reflection", "absorbs information from a data stream", "communicates telepathically"],
            cameraAngle: ["worm’s-eye extreme", "bird’s-eye overhead", "Dutch tilt", "fisheye distortion", "kaleidoscope overlay", "fragmented crop", "underwater half-submerged", "drone top-down", "reflection POV", "immersive distorted POV", "impossible angles", "non-euclidean perspective", "fractal zoom", "vertigo effect", "through the keyhole", "inside out", "fourth-wall break", "unreliable narrator POV", "multiple simultaneous POVs", "zero-gravity camera"],
            lighting: ["projection mapping", "harsh direct flash", "strobe freeze", "abstract shadow play", "silhouette backlight", "rotating projectors", "glitch strobes", "laser grid", "colored fog illumination", "thermal imaging treatment", "bioluminescent light", "liquid light", "holographic light", "polarized light", "infrared light", "ultraviolet light", "x-ray light", "gamma-ray burst", "cosmic microwave background radiation", "dark energy illumination"],
            background: ["holographic chamber", "infinite mirror", "liquid surface", "abstract sculpture set", "surreal desert void", "glitch digital wall", "neon projection backdrop", "smoke-filled room", "conceptual architecture", "floating set design", "tesseract", "event horizon of a black hole", "inside a dream", "a memory palace", "the internet visualized", "a fractal landscape", "a dying star", "the beginning of the universe", "the end of time", "a blank canvas"],
            mood: ["avant-garde surreal", "dreamlike abstraction", "bold chaos", "glitch cyberpunk", "mythological surreal", "distorted theatrical", "conceptual abstraction", "raw expressive", "surreal hallucination", "high-fashion disruption", "existential dread", "cosmic horror", "divine comedy", "nihilistic apathy", "manic pixie dream girl", "transcendental meditation", "psychedelic trip", "sensory overload", "sensory deprivation", "absolute zero"],
            composition: ["chaotic", "fragmented", "impossible geometry", "symmetry breaking", "golden spiral", "dizzying perspective", "layered and transparent", "subversive framing", "glitched composition", "anamorphic illusion", "fractal patterns", "M.C. Escher-esque", "anti-composition", "maximalism", "brutalism", "deconstructivism", "suprematism", "cubism", "futurism", "dadaism"],
            focusTechnique: ["tilt-shift effect", "lens-whacking / freelensing", "extreme bokeh", "pinhole camera focus", "intentional motion blur", "out-of-focus subject", "focus on reflection only", "vaseline on lens effect", "deep focus with distortion", "split-field focus", "light field photography", "plenoptic camera", "computational photography", "AI-powered focus", "sentient lens", "focusing on a memory", "focusing on a concept", "unfocusing reality", "focusing on the fourth dimension", "focusing on nothing"],
            colorPalette: ["infrared photography colors", "glitchy RGB split", "monochromatic with one spot color", "inverted colors", "thermal imaging palette", "UV blacklight colors", "dissonant color clashes", "acidic neons", "holographic iridescent colors", "oversaturated film look", "impossible colors", "synesthesia-inspired colors", "colors from a dream", "colors from a memory", "colors from another dimension", "colors that change over time", "colors that react to sound", "colors that have taste", "colors that have smell", "the absence of color"],
            filmStock: ["heavy data moshing", "VHS glitch effect", "damaged film look", "thermal sensor texture", "CCTV footage grain", "infrared film grain", "experimental chemical processing", "digital noise and artifacts", "holographic texture overlay", "liquid light show effect", "quantum foam", "cosmic strings", "dark matter", "antimatter", "tachyons", "gravitons", "axions", "WIMPs", "neutralinos", "the fabric of reality"],
            postProcessing: ["pixel sorting", "databending", "color channel shifting", "solarization effect", "heavy compositing", "surreal photo-manipulation", "anamorphic lens flare", "fractal rendering", "generative fill", "AI-inpainting", "neural style transfer", "deep dream", "generative adversarial networks (GANs)", "variational autoencoders (VAEs)", "diffusion models", "quantum computing", "sentient editing software", "editing with your mind", "post-processing in the fourth dimension", "no post-processing"],
            atmosphere: ["unsettling and uncanny", "chaotic and energetic", "dreamlike and ethereal", "dystopian and cold", "psychedelic and disorienting", "meditative and abstract", "transcendent and spiritual", "glitchy and technological", "raw and visceral", "sublime and awe-inspiring", "Lovecraftian", "Kafkaesque", "Borgesian", "Lynchian", "Cronenbergian", "Kubrickian", "Tarkovskian", "Jodorowskian", "Giger-esque", "Beksiński-esque"],
            references: ["Nick Knight SHOWstudio", "Tim Walker surreal", "Dazed Magazine", "Comme des Garçons visuals", "Balenciaga dystopian", "Vogue Italia experimental", "Helmut Newton bold", "i-D conceptual", "Björk visuals", "arthouse exhibition stills", "H.R. Giger", "Zdzisław Beksiński", "Salvador Dalí", "René Magritte", "Max Ernst", "Man Ray", "Marcel Duchamp", "Frida Kahlo", "Yayoi Kusama", "Matthew Barney"],
            cameraLens: ["Phase One XF IQ4 + fisheye", "Canon R5C + tilt-shift 24mm", "RED Komodo + wide cine", "Sony Venice + anamorphic", "Blackmagic 6K + probe lens", "RED Komodo + 16mm cine", "Phase One XF IQ4 + fisheye 8mm", "Blackmagic URSA + vintage cine glass", "Sony A7R IV + 14mm ultra-wide", "Canon R5 + tilt-shift 50mm", "light field camera", "plenoptic camera", "computational camera", "AI-powered camera", "sentient camera", "a camera that captures memories", "a camera that captures concepts", "a camera that captures dreams", "a camera that captures the fourth dimension", "no camera"],
            aspectRatio: ["9:16 (Vertical)", "16:9 (Widescreen Cinema)", "1:1 (Square)", "4:5 (Tall)", "infinite", "zero", "Klein bottle", "Möbius strip", "tesseract", "hypercube"]
        },
        vintage: { 
            sceneStyle: ["Polaroid instant snapshot", "1970s lifestyle editorial", "1980s film fashion cover", "analog street portrait", "1990s magazine spread", "bohemian 70s outdoor set", "retro film star promo", "80s music video still", "90s fashion runway backstage", "Super 8mm style candid", "60s mod fashion", "50s rockabilly", "40s film noir", "30s art deco", "20s flapper", "Victorian era", "daguerreotype", "tintype", "ambrotype", "autochrome"],
            mainSubject: ["retro film star archetype", "bohemian couple", "90s supermodel inspiration", "Polaroid family portrait", "lifestyle retro muse", "70s runway muse", "vintage cinema actor", "80s glam rocker", "candid archival subject", "analog celebrity look", "beatnik poet", "hippie commune", "disco queen", "punk rocker", "new wave musician", "yuppie", "grunge band", "raver", "skater", "greaser"],
            ethnicity: ["Mediterranean tan (70s vibe)", "Scandinavian pale", "Afro 80s editorial look", "Indigenous retro representation", "pan-ethnic retro group", "vintage Hollywood golden look", "80s supermodel tones", "70s disco glam features", "Polaroid neutral cast", "archival global diversity", "sepia-toned skin", "hand-tinted color", "grainy black and white", "overexposed highlights", "underexposed shadows", "faded colors", "color shifts", "chemical stains", "dust and scratches", "light leaks"],
            styling: ["bohemian chic", "70s flared fashion", "80s power suit + bold makeup", "90s minimal grunge", "Polaroid candid casual", "retro disco attire", "classic Hollywood glamour", "denim 90s streetwear", "leather 80s rocker look", "vintage editorial chic", "mod mini-skirt", "rockabilly leather jacket", "film noir trench coat", "art deco beaded dress", "flapper dress", "Victorian corset", "poodle skirt", "bell bottoms", "shoulder pads", "acid wash jeans"],
            expression: ["glamorous 80s stare", "candid Polaroid laughter", "bohemian free spirit", "nostalgic melancholy", "supermodel power gaze", "70s disco joy", "retro editorial calm", "90s casual confidence", "vintage lifestyle warmth", "archival candid", "smoldering film noir look", "rebellious punk sneer", "peaceful hippie smile", "carefree disco dance", "intense beatnik stare", "angsty grunge frown", "optimistic 50s grin", "elegant 40s poise", "flirtatious 20s wink", "stoic Victorian portrait"],
            actionVerb: ["takes a drag from a cigarette", "slowly puts on sunglasses", "flips through a vinyl record", "a candid moment of laughter freezes into a pose", "adjusts a classic fedora hat", "looks into the camera as if it's a mirror", "develops a polaroid in hand", "puts a cassette in a walkman", "dials a rotary phone", "a slow, glamorous turn", "drives a vintage car", "rides a motorcycle", "plays an arcade game", "listens to a jukebox", "dances the twist", "hitchhikes", "protests", "attends a drive-in movie", "develops film in a darkroom", "types on a typewriter"],
            cameraAngle: ["waist-up analog frame", "Polaroid straight-on", "70s standing full body", "80s soft-focus close-up", "90s magazine crop", "archival VHS angle", "candid snapshot framing", "vintage studio bust shot", "filmic slow zoom frame", "Super 8 jitter framing", "low angle hero shot", "high angle vulnerability shot", "dutch angle for tension", "long take", "handheld for realism", "tripod for stability", "crane shot for drama", "dolly shot for smoothness", "zoom shot for focus", "static shot for observation"],
            lighting: ["tungsten warm lamp", "incandescent bulb glow", "vintage studio flash", "continuous hot lights", "candlelit warmth", "Polaroid daylight harsh", "film-era umbrella flash", "halogen lamp vibe", "neon diner glow", "analog gradient wash", "gaslight", "kerosene lamp", "campfire", "moonlight", "streetlamp", "car headlights", "TV screen glow", "movie projector beam", "disco ball", "lava lamp"],
            background: ["retro diner tiles", "70s patterned wallpaper", "80s gradient studio backdrop", "wood-paneled living room", "Polaroid plain wall", "VHS home interior", "retro carpet studio", "disco floor backdrop", "analog tiled bathroom", "archival poster wall", "drive-in movie theater", "record store", "video arcade", "roller rink", "bowling alley", "soda fountain", "speakeasy", "beatnik cafe", "hippie commune", "punk club"],
            mood: ["nostalgic charm", "bohemian free spirit", "glamorous 80s gloss", "90s minimal cool", "analog film authenticity", "disco glam energy", "Polaroid candid mood", "archival retro gloss", "retro lifestyle glam", "timeless film-grain chic", "film noir mystery", "punk rock anarchy", "hippie peace and love", "disco fever", "beatnik angst", "grunge apathy", "50s optimism", "40s patriotism", "20s decadence", "Victorian romanticism"],
            composition: ["classic Hollywood framing", "snapshot aesthetic", "album cover art", "magazine layout style", "centered Polaroid frame", "dynamic 70s angle", "80s power pose", "90s minimalist chic", "found footage look", "rule of thirds with grain", "symmetrical", "asymmetrical", "leading lines", "framing", "negative space", "fill the frame", "pattern and repetition", "rule of odds", "depth", "balance"],
            focusTechnique: ["soft focus", "manual focus miss", "deep focus (70s film)", "dreamy haze", "sharp center, soft edges", "Petzval lens swirl bokeh", "zone focusing street style", "split focus on two subjects", "rack focus with a zoom", "everything slightly soft", "out of focus", "motion blur", "panning", "zoom burst", "freelensing", "lens flare", "ghosting", "coma", "astigmatism", "chromatic aberration"],
            colorPalette: ["faded Polaroid colors", "Kodachrome 64", "Ektachrome blues", "Technicolor saturation", "warm sepia tones", "gritty 70s colors", "vibrant 80s neon", "desaturated 90s grunge", "aged paper tones", "cross-processed colors", "hand-tinted", "autochrome", "two-strip Technicolor", "three-strip Technicolor", "gasparcolor", "kinemacolor", "prizma color", "cinecolor", "trucolor", "eastman color"],
            filmStock: ["Polaroid SX-70 film", "Kodak Tri-X 400 grain", "Super 8mm film grain", "VHS tape artifacts", "16mm film grain", "dust and scratches", "light leaks", "expired film look", "Betacam tape quality", "half-frame camera look", "daguerreotype plate", "tintype plate", "ambrotype plate", "autochrome plate", "nitrate film", "safety film", "orthochromatic film", "panchromatic film", "infrared film", "x-ray film"],
            postProcessing: ["chemical stains and dust", "vignetting", "pushed film look", "film border overlay", "reticulation", "dodging and burning (darkroom style)", "color shifts from aging", "scanner texture", "grain overlay", "authentic light leaks", "hand-coloring", "toning", "solarization", "sabatier effect", "montage", "double exposure", "split toning", "unsharp mask", "sepia filter", "cyanotype process"],
            atmosphere: ["nostalgic and warm", "cool and detached (90s)", "energetic and glamorous (80s)", "free-spirited and earthy (70s)", "dreamy and melancholic", "authentic and raw", "cinematic and timeless", "intimate and personal", "gritty and real", "sun-soaked and hazy", "mysterious and suspenseful", "rebellious and angry", "peaceful and loving", "hedonistic and decadent", "intellectual and angsty", "apathetic and bored", "optimistic and innocent", "patriotic and brave", "roaring and wild", "romantic and tragic"],
            references: ["Richard Avedon classic", "Irving Penn Vogue", "Guy Bourdin 70s", "Herb Ritts 80s B&W", "Slim Aarons lifestyle", "Polaroid SX-70 ads", "Kodak film campaigns", "90s Calvin Klein", "Bruce Weber lifestyle", "MTV 80s/90s fashion", "Ansel Adams landscapes", "Diane Arbus portraits", "Robert Frank street photography", "Walker Evans documentary", "Dorothea Lange photojournalism", "Man Ray surrealism", "Brassai night photography", "Weegee crime scenes", "Garry Winogrand candids", "William Eggleston color photography"],
            cameraLens: ["Leica M6 + 50mm Summicron", "Nikon FM2 + 35mm AI-S", "Canon AE-1 + 50mm FD", "Pentax 67 + 105mm", "Mamiya RZ67 + 110mm", "Contax T2 + 38mm Zeiss", "Polaroid SX-70", "Hasselblad 500CM + 80mm", "Olympus OM-1 + 50mm", "Super 8mm film camera", "Bolex 16mm", "Graflex Speed Graphic", "Rolleiflex TLR", "Lomo LC-A", "Holga", "Diana", "Argus C3", "Kodak Brownie", "View Camera", "Field Camera"],
            aspectRatio: ["1:1 (Polaroid)", "4:5 (Vintage Portrait)", "16:9 (Film Still)", "9:16 (Tall Format)", "3:2 (35mm film)", "4:3 (silent film)", "1.37:1 (Academy ratio)", "2.35:1 (CinemaScope)", "2.76:1 (Ultra Panavision 70)", "panoramic (Cinerama)"]
        }
    },
    product: {
        fields: ['productType', 'material', 'surface', 'composition', 'lightingStyle', 'background', 'mood', 'extraElements', 'compositionScale', 'shadowStyle', 'colorHarmony', 'motionEffect', 'advertisingStyle', 'references', 'cameraLens','aspectRatio'],
        fieldLabels: { 
            productType: "Product Type", 
            material: "Material / Texture", 
            surface: "Surface / Setting", 
            composition: "Composition Style", 
            lightingStyle: "Lighting Style", 
            background: "Background / Environment", 
            mood: "Mood & Aesthetic",
            extraElements: "Extra Visual Elements", 
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
        fieldDescriptions: {
            productType: "The specific item being photographed, such as a 'skincare bottle', 'luxury watch', or 'designer sneaker'.",
            material: "The texture and substance of the product itself, like 'frosted glass' or 'brushed metal'. This informs lighting and reflections.",
            surface: "The surface on which the product is placed. A 'marble slab' suggests luxury, while a 'concrete shelf' feels industrial.",
            composition: "The arrangement of the product within the frame. 'Hero single centered' is direct, while a 'classic flat-lay' is an overhead shot.",
            lightingStyle: "How the product is illuminated. 'Clean catalog' lighting is bright and even, while 'cinematic spotlight' is dramatic and focused.",
            background: "The environment behind the product. Can be a 'seamless white' background for e-commerce or a 'lifestyle bathroom' for context.",
            mood: "The overall aesthetic and feeling of the advertisement. 'Premium clean' is minimalist and high-end; 'vibrant commercial' is energetic.",
            extraElements: "Additional dynamic visuals that add interest, such as a 'water splash', 'flying petals', or 'subtle smoke'.",
            compositionScale: "The camera's proximity to the product. Ranges from a 'macro detail shot' to a wider 'environmental product shot'.",
            shadowStyle: "The quality, direction, and hardness of shadows. A 'soft drop shadow' is subtle, while a 'hard graphic shadow' is modern and bold.",
            colorHarmony: "The relationship between colors in the scene. 'Monochromatic' is unified, while 'bold complementary colors' are high-contrast.",
            motionEffect: "For video: The dynamic effect applied to the product, like a 'slow 360 rotation' or 'product dropping into water'.",
            advertisingStyle: "The intended context for the image, such as a 'luxury magazine ad', 'social media ad', or 'minimalist e-commerce'.",
            references: "Inspiration drawn from iconic brand styles to guide the aesthetic, like 'Apple clean product' or 'Nike e-commerce'.",
            cameraLens: "The simulated camera and lens used, often a 'macro lens' to capture fine, intricate details of the product.",
            aspectRatio: "The final dimensions of the image, tailored for platforms like '1:1 (Square E-commerce)' or '9:16 (Story Ad)'."
        },
        conservative: { 
            productType: ["skincare bottle", "perfume flacon", "luxury watch", "leather bag", "beverage can", "premium laptop", "jewelry ring", "fountain pen", "wine bottle", "classic book cover", "smartphone", "headphones", "camera", "sunglasses", "shoes", "handbag", "car", "furniture", "food", "cosmetics"],
            material: ["frosted glass", "polished metal", "matte plastic", "leather grain", "satin fabric", "glossy ceramic", "brushed steel", "clear crystal", "lacquer wood", "smooth marble", "carbon fiber", "titanium", "gold", "silver", "diamond", "rubber", "concrete", "terrazzo", "velvet", "silk"],
            surface: ["marble slab", "wooden desk", "acrylic pedestal", "velvet cloth", "neutral acrylic base", "luxury glass table", "seamless riser", "granite platform", "classic studio riser", "polished stone", "concrete floor", "sand", "water", "grass", "snow", "ice", "asphalt", "brick wall", "metal sheet", "paper"],
            composition: ["hero single centered", "classic flat-lay", "trio lineup", "pyramid stack", "product with reflection", "catalog front-facing", "grid layout", "symmetrical duo", "elevated angle hero", "clean spotlight shot", "rule of thirds", "golden ratio", "leading lines", "framing", "negative space", "fill the frame", "pattern and repetition", "rule of odds", "depth", "balance"],
            lightingStyle: ["clean catalog three-point", "daylight-balanced studio", "golden hour window light", "high-key seamless", "softbox gradient", "rim highlight", "balanced flash", "even soft fill", "commercial diffuse", "spotlight accent", "Rembrandt", "butterfly", "split", "loop", "broad", "short", "clam shell", "top", "under", "silhouette"],
            background: ["seamless white", "solid black", "neutral gray", "gradient backdrop", "velvet drape", "luxury stone wall", "studio beige", "soft pastel", "catalog neutral", "premium catalog backdrop", "nature", "cityscape", "architecture", "interior", "abstract", "textured", "blurred", "out of focus", "bokeh", "empty"],
            mood: ["premium clean", "minimalist timeless", "professional polish", "heritage classic", "natural organic", "luxury timeless", "tech minimal", "refined elegance", "catalog polish", "understated prestige", "serene", "warm", "dramatic", "romantic", "mysterious", "powerful", "playful", "nostalgic", "hopeful", "melancholy"],
            extraElements: ["subtle reflection", "catalog shadow", "natural highlight", "controlled sparkle", "faint mist", "clean specular glow", "halo light ring", "smooth gradient halo", "soft rim", "premium clean shine", "water droplets", "smoke", "fire", "sparks", "dust particles", "flower petals", "leaves", "feathers", "bubbles", "confetti"],
            compositionScale: ["product centered full", "medium shot of product", "macro detail shot", "product in context (wide)", "slightly angled medium shot", "top-down flat-lay", "hero shot filling frame", "group shot of collection", "environmental product shot", "isometric view", "close-up", "extreme close-up", "long shot", "full shot", "medium long shot", "medium close-up", "two-shot", "master shot", "establishing shot", "insert shot"],
            shadowStyle: ["soft drop shadow", "no shadow (floating look)", "subtle ambient occlusion", "gentle gradient shadow", "natural window light shadow", "product casting shadow on self", "clean, hard shadow", "long soft shadow", "diffused shadow", "reflective shadow on surface", "cast shadow", "form shadow", "core shadow", "highlight", "midtones", "dappled light", "gobo shadow", "caustic reflection", "silhouette", "backlit"],
            colorHarmony: ["monochromatic", "analogous colors", "neutral with accent color", "high-key white on white", "low-key dark on dark", "complementary colors", "split-complementary", "triadic color harmony", "achromatic (B&W)", "earth tones", "vibrant", "desaturated", "pastel", "neon", "metallic", "iridescent", "holographic", "pearlescent", "fluorescent", "phosphorescent"],
            motionEffect: ["none, static shot", "slow 360 rotation", "gentle light sweep", "subtle dust particles floating", "a single water droplet falls", "slow zoom in on detail", "gentle focus pull", "steam rising slowly", "fabric gently waving", "camera slowly tilts up", "fast pan", "whip pan", "dolly zoom", "crash zoom", "slow motion", "time-lapse", "stop motion", "hyperlapse", "bullet time", "match cut"],
            advertisingStyle: ["clean catalog shot", "luxury magazine ad", "minimalist e-commerce", "heritage brand print ad", "tech product launch style", "pharmaceutical clean", "beverage commercial look", "timeless jewelry ad", "automotive ad polish", "fashion accessory lookbook", "social media post", "billboard", "website banner", "email newsletter", "TV commercial", "movie poster", "product placement", "influencer marketing", "guerilla marketing", "viral marketing"],
            references: ["Rolex print ads", "Chanel perfume campaigns", "Tiffany jewelry catalog", "Apple clean product", "Muji minimal design", "Dior timeless ads", "Cartier luxury catalog", "Hermes timeless campaigns", "Montblanc lifestyle", "Hugo Boss classic ads", "Nike", "Adidas", "Coca-Cola", "Pepsi", "McDonald's", "Burger King", "Starbucks", "Dunkin' Donuts", "IKEA", "Target"],
            cameraLens: ["Canon EOS R5 + 100mm macro", "Nikon Z7 + 105mm macro", "Sony A7R IV + 90mm macro", "Hasselblad X2D + 80mm", "Fujifilm GFX 100 + 120mm", "Canon 6D + 100mm", "Nikon D850 + 85mm", "Sony A7 III + 55mm", "Hasselblad H6D + 100mm", "Fujifilm X-T4 + 35mm", "Leica S3 + 120mm", "Phase One IQ4 + 150mm", "Pentax 645Z + 90mm", "Mamiya 645 + 80mm", "Contax 645 + 80mm", "Rolleiflex 2.8F", "Linhof Technika 4x5", "Sinar P2 8x10", "Deardorff 8x10", "Arca-Swiss F-Metric 4x5"],
            aspectRatio: ["1:1 (Square E-commerce)", "4:5 (Social Media Post)", "16:9 (Banner)", "9:16 (Story Ad)", "3:2", "5:4", "7:5", "1.85:1", "2.39:1", "panoramic"]
        },
        balanced: { 
            productType: ["designer sneaker", "sunglasses", "premium headphones", "tote bag", "smartphone", "coffee takeaway cup", "fashion accessory", "smartwatch", "lifestyle mug", "travel luggage", "drone", "action camera", "electric scooter", "smart home device", "gaming console", "virtual reality headset", "augmented reality glasses", "wearable tech", "fitness tracker", "e-reader"],
            material: ["brushed aluminum", "glossy enamel", "woven textile", "transparent acrylic", "carbon fiber", "tempered glass", "velvet fabric", "anodized metal", "stone composite", "soft matte rubber", "neoprene", "gore-tex", "kevlar", "dyneema", "cordura", "ripstop nylon", "ballistic nylon", "hypalon", "x-pac", "ultralight"],
            surface: ["lifestyle bathroom counter", "industrial tabletop", "terrazzo floor", "colored plexiglass", "café wooden table", "lifestyle home desk", "subway tile counter", "concrete shelf", "pastel painted block", "boutique display", "gym floor", "yoga mat", "hiking trail", "ski slope", "beach sand", "pool water", "cobblestone street", "rooftop terrace", "concert stage", "art gallery wall"],
            composition: ["diagonal framing", "side angled showcase", "close-up detail", "natural scatter layout", "stacked arrangement", "lifestyle with props", "dynamic crop", "casual over-the-table", "angled tilted setup", "knolling", "flat lay", "hero shot", "environmental portrait", "product in use", "before and after", "exploded view", "cutaway view", "cross-section", "ghosted view", "wireframe"],
            lightingStyle: ["cinematic spotlight", "moody rim light", "neon accent glow", "cloudy daylight", "mixed warm + cool gels", "reflective bounce", "indirect soft glow", "urban streetlight mimic", "natural window daylight", "color block fill", "hard light", "soft light", "backlight", "sidelight", "key light", "fill light", "hair light", "kicker", "gobo", "snoot"],
            background: ["lifestyle bathroom", "urban desk", "rooftop daylight", "boutique store", "industrial interior", "colorful pastel blocks", "subway wall", "modern kitchen counter", "café table", "lifestyle living room", "gym", "yoga studio", "mountain peak", "ski resort", "tropical beach", "swimming pool", "city street", "rooftop bar", "music festival", "art museum"],
            mood: ["vibrant commercial", "lifestyle premium", "playful youthful", "cinematic stylish", "luxury contemporary", "aspirational modern", "trendy editorial", "casual lifestyle", "brand-forward energy", "glossy premium", "energetic", "dynamic", "exciting", "fun", "adventurous", "daring", "bold", "confident", "cool", "hip"],
            extraElements: ["splash water", "coffee steam", "flying petals", "fabric motion", "glowing accent gels", "subtle smoke haze", "lifestyle props", "scattered accessories", "natural liquid drops", "casual environmental props", "fire", "sparks", "explosions", "fireworks", "lightning", "rain", "snow", "wind", "fog", "mist"],
            compositionScale: ["product in use by model", "lifestyle flat-lay", "environmental wide shot", "dynamic close-up on detail", "over-the-shoulder product view", "group of products in scene", "product on-the-go", "from the user's POV", "exploded view of components", "time-lapse of product assembly", "macro", "micro", "nano", "pico", "femto", "atto", "zepto", "yocto", "planetary", "galactic"],
            shadowStyle: ["long dramatic shadow (golden hour)", "hard graphic shadow", "caustic light reflections", "patterned shadow (from leaves, etc.)", "soft, moody shadow", "neon-colored shadow", "split lighting shadow", "reflective color bounce shadow", "no shadow, high-key", "backlit with shadow towards camera", "dappled light", "gobo", "silhouette", "chiaroscuro", "tenebrism", "sfumato", "unione", "cangiante", "grisaille", "monochrome"],
            colorHarmony: ["bold complementary colors", "vibrant triadic", "analogous with a pop of contrast", "pastel on pastel", "neon on dark background", "monochromatic with texture", "desaturated with one vibrant color", "color blocking", "warm cinematic grade", "cool, moody tones", "split-complementary", "tetradic", "square", "achromatic", "high contrast", "low contrast", "earth tones", "jewel tones", "metallic", "iridescent"],
            motionEffect: ["dramatic water splash", "product dropping into water (slow-mo)", "smoke swirling around product", "fast pan with motion blur", "stop-motion animation style", "ingredients flying around product", "fabric rippling in the wind", "camera orbiting the product", "liquid pouring action", "light trails effect", "bullet time", "dolly zoom", "crash zoom", "whip pan", "time-lapse", "hyperlapse", "slow motion", "fast motion", "reverse motion", "match cut"],
            advertisingStyle: ["social media ad (e.g., Instagram)", "lifestyle brand campaign", "energetic beverage commercial", "trendy fashion e-comm", "modern tech ad", "influencer-style shot", "aspirational travel ad", "sports brand ad", "cosmetics campaign", "editorial magazine spread", "viral video", "meme marketing", "guerilla marketing", "experiential marketing", "ambush marketing", "street marketing", "product placement", "native advertising", "content marketing", "affiliate marketing"],
            references: ["Nike e-comm", "Adidas commercial", "Samsung lifestyle", "Sephora campaigns", "Zara accessories", "COS minimal modern", "Prada fashion catalog", "H&M lifestyle ads", "Uniqlo clean commercial", "Sony stylish promo", "GoPro", "Red Bull", "Apple", "Google", "Amazon", "Facebook", "Instagram", "Twitter", "TikTok", "Snapchat"],
            cameraLens: ["Canon 5D MkIV + 50mm", "Sony A7 IV + 24–70mm", "Nikon Z9 + 70–200mm", "Fujifilm X-T5 + 56mm", "Leica SL2 + 90mm", "Canon R5 + 35mm f/1.4", "Sony A7R V + 24–70mm", "Leica SL2 + 50mm Summilux", "Nikon Z9 + 24–120mm", "Panasonic S1R + 50mm", "Blackmagic Pocket Cinema Camera 4K + 12-35mm", "RED Scarlet-W + 18-35mm", "Arri Amira + 24-70mm", "GoPro HERO10 Black", "DJI Air 2S", "Insta360 ONE RS", "iPhone 15 Pro Max", "Samsung Galaxy S25 Ultra", "Google Pixel 9 Pro", "Sony Xperia 1 V"],
            aspectRatio: ["4:5 (Instagram Feed)", "16:9 (Website Hero)", "1:1 (Carousel Post)", "9:16 (Reels/Shorts)", "2.39:1 (Cinematic)", "1.85:1 (Widescreen)", "2:1", "3:2", "5:4", "anamorphic"]
        },
        experimental: { 
            productType: ["floating tech gadget", "fragmented sculpture object", "surreal cosmetic form", "liquid-shaped container", "holographic wearable", "AI-designed prototype", "levitating orb device", "bioluminescent capsule", "glitch-inspired gadget", "modular abstract product", "sentient device", "4D printed object", "metamaterial", "programmable matter", "self-assembling robot", "bio-integrated technology", "quantum computer", "time machine", "teleporter", "warp drive"],
            material: ["liquid chrome", "iridescent holographic", "translucent resin", "shifting textures", "bio-organic skin", "glitch reflective surface", "fractal crystalline", "fluid gel material", "neon reactive polymer", "morphing nanomaterial", "dark matter", "antimatter", "exotic matter", "negative mass", "time crystals", "superfluid", "superconductor", "plasma", "quark-gluon plasma", "Bose-Einstein condensate"],
            surface: ["water ripple tray", "mirrored infinity pedestal", "fractured glass platform", "levitating stage", "holographic cube riser", "neon acrylic pedestal", "digital projection floor", "smoke-filled stand", "liquid surface holder", "surreal floating stage", "event horizon", "wormhole", "tesseract", "Klein bottle", "Möbius strip", "hyperspace", "cyberspace", "dreamscape", "memory palace", "the void"],
            composition: ["floating cluster", "exploded-view assembly", "fisheye distortion", "surreal collage", "fragmented layering", "levitating spiral", "multi-frame overlay", "kaleidoscope arrangement", "liquid morph display", "shattered composition", "non-euclidean geometry", "fractal arrangement", "quantum superposition", "string theory vibrations", "M-theory branes", "holographic principle", "simulation theory glitches", "mandala", "yantra", "sigil"],
            lightingStyle: ["glitch strobes", "projection mapping", "harsh overexposure", "neon splash glow", "silhouette glow edges", "thermal light effect", "rotating colored beams", "hard flash freeze", "strobe rainbow split", "laser grid pattern", "bioluminescence", "chemiluminescence", "sonoluminescence", "triboluminescence", "electroluminescence", "phosphorescence", "fluorescence", "incandescence", "Cherenkov radiation", "synchrotron radiation"],
            background: ["surreal CGI void", "liquid mercury backdrop", "infinite mirror wall", "neon holographic set", "glitch projection wall", "digital desert void", "smoke-filled space", "abstract sculpture wall", "glowing cube chamber", "fragmented reality background", "inside a black hole", "outside the universe", "between dimensions", "at the beginning of time", "at the end of time", "in a parallel universe", "in a simulated reality", "in a collective consciousness", "in a shared dream", "in the mind of God"],
            mood: ["surreal avant-garde", "dreamlike conceptual", "edgy futuristic", "cyber-organic chaos", "glitch abstraction", "fragmented surreal", "alien industrial", "hyper-real fashion-tech", "bold dream-state", "impossible sci-fi vibe", "existential dread", "cosmic horror", "nihilistic apathy", "transcendental ecstasy", "manic creation", "divine inspiration", "technological singularity", "post-humanism", "transhumanism", "cyberdelic"],
            extraElements: ["shattered fragments", "liquid explosion", "holographic aura", "neon particle trails", "abstract projection overlays", "glitch fragments", "levitating debris", "glowing dust particles", "surreal fire sparks", "floating geometric props", "time distortion", "gravity waves", "reality warping", "data streams", "sentient code", "virtual reality artifacts", "augmented reality overlays", "quantum foam", "cosmic strings", "dark energy"],
            compositionScale: ["impossible macro shot", "product dwarfed by surreal environment", "infinite zoom-in (fractal)", "multi-perspective view", "anamorphic wide-screen", "product seen through a crystal", "microscopic texture view", "product as a planet in space", "fisheye extreme close-up", "worm's-eye view from below", "quantum scale", "subatomic scale", "string scale", "Planck scale", "multiverse scale", "omniverse scale", "hyperverse scale", "metaverse scale", "no scale", "all scales"],
            shadowStyle: ["no shadows, pure light", "shadow is a liquid pool", "glitching, fragmented shadow", "shadow projects a different image", "shadow is a solid object", "colored gel shadow", "shadow that moves independently", "inverse shadow (light)", "shadow made of particles", "long, distorted, surreal shadow", "4D shadow", "shadow in a higher dimension", "shadow of a thought", "shadow of a memory", "shadow of a dream", "shadow of a soul", "shadow of a god", "shadow of a demon", "shadow of the void", "no shadow"],
            colorHarmony: ["inverted colors", "RGB split effect", "thermal camera palette", "monochromatic with a glitching accent", "holographic spectrum", "dissonant, clashing colors", "UV blacklight reactive", "acidic color palette", "achromatic with light refraction", "color palette shifts over time", "impossible colors", "synesthetic colors", "dream colors", "memory colors", "dimensional colors", "quantum colors", "sentient colors", "emotional colors", "conceptual colors", "no colors"],
            motionEffect: ["product morphs into liquid", "explodes and reassembles", "glitches in and out of existence", "time-lapse of product decaying/growing", "surrounded by a particle vortex", "leaves a trail of light", "rotates on impossible axes", "camera flies through the product", "surface texture constantly shifts", "holographic projection emanates from product", "teleportation", "time travel", "interdimensional travel", "reality shifting", "consciousness transfer", "astral projection", "lucid dreaming", "remote viewing", "precognition", "retrocognition"],
            advertisingStyle: ["conceptual art installation", "dystopian sci-fi commercial", "surreal fashion film", "glitch art advertisement", "avant-garde magazine ad", "trippy music video product placement", "CGI tech demo", "dream sequence ad", "brutalist web design ad", "post-humanist campaign", "transhumanist propaganda", "cyberdelic experience", "memetic warfare", "psychological operation", "cognitive warfare", "narrative warfare", "reality engineering", "consciousness hacking", "soul branding", "divine marketing"],
            references: ["Balenciaga dystopian", "Comme des Garçons product art", "Dazed surreal sets", "Nick Knight SHOWstudio", "Tim Walker fantasy objects", "Björk product visuals", "Vogue Italia experimental ads", "conceptual gallery props", "fashion-tech art shoots", "cyber-installation campaigns", "H.R. Giger", "Zdzisław Beksiński", "Salvador Dalí", "René Magritte", "Max Ernst", "Man Ray", "Marcel Duchamp", "Frida Kahlo", "Yayoi Kusama", "Matthew Barney"],
            cameraLens: ["Phase One XF IQ4 + tilt-shift", "RED Komodo + probe lens", "Sony Venice + anamorphic", "Blackmagic 6K + vintage cine glass", "Canon R5C + fisheye 14mm", "RED Helium + 18mm", "Phase One + macro tilt-shift", "Sony A7R IV + 15mm", "Canon C500 MkII + tilt-shift", "Blackmagic Pocket 6K + probe", "light field camera", "plenoptic camera", "computational camera", "AI-powered camera", "sentient camera", "a camera that captures memories", "a camera that captures concepts", "a camera that captures dreams", "a camera that captures the fourth dimension", "no camera"],
            aspectRatio: ["9:16 (Immersive Story)", "16:9 (Cinematic Ad)", "1:1 (Abstract)", "4:5 (Creative)", "infinite", "zero", "Klein bottle", "Möbius strip", "tesseract", "hypercube"]
        },
        vintage: { 
            productType: ["vinyl record sleeve", "cassette tape player", "retro analog camera", "70s soda can", "typewriter machine", "Walkman cassette", "rotary phone", "instant Polaroid camera", "VHS tape", "vintage wrist radio", "8-track tape", "reel-to-reel tape recorder", "boombox", "pager", "floppy disk", "dial-up modem", "CRT monitor", "dot matrix printer", "slide rule", "abacus"],
            material: ["bakelite plastic", "brushed aluminum", "matte painted tin", "corduroy fabric", "aged leather", "retro paper labels", "chrome-plated steel", "vinyl plastic gloss", "80s plastic neon", "analog print texture", "wood grain", "formica", "naugahyde", "shag carpet", "terrazzo", "linoleum", "asbestos", "lead paint", "mercury", "radium"],
            surface: ["checkered diner table", "vintage kitchen counter", "80s tiled bathroom", "wood-paneled desk", "shag carpet surface", "patterned retro rug", "Polaroid tabletop", "VHS home cabinet", "disco mirrored floor", "neon diner counter", "drive-in movie screen", "bowling alley lane", "roller rink floor", "pinball machine glass", "jukebox chrome", "soda fountain counter", "speakeasy bar", "beatnik cafe table", "hippie commune floor", "punk club stage"],
            composition: ["Polaroid tabletop still-life", "70s print ad lineup", "80s catalog symmetry", "retro magazine spread", "candid desk arrangement", "analog casual placement", "archival commercial pose", "VHS screen grab shot", "lifestyle candid retro crop", "grainy ad product lineup", "symmetrical", "asymmetrical", "rule of thirds", "golden ratio", "leading lines", "framing", "negative space", "fill the frame", "pattern and repetition", "rule of odds"],
            lightingStyle: ["tungsten warm lamp", "incandescent bulb glow", "vintage studio flash umbrellas", "continuous hot light", "candlelit product", "Polaroid flash burst", "80s catalog gradient light", "neon diner sign glow", "VHS camcorder harsh flash", "retro gradient wash", "gaslight", "kerosene lamp", "campfire", "moonlight", "streetlamp", "car headlights", "TV screen glow", "movie projector beam", "disco ball", "lava lamp"],
            background: ["retro diner tiles", "wood-paneled room", "80s wallpaper", "Polaroid white wall", "shag carpet room", "disco neon backdrop", "tiled bathroom retro", "VHS home wall", "archival film set", "analog studio drape", "drive-in movie theater", "record store", "video arcade", "roller rink", "bowling alley", "soda fountain", "speakeasy", "beatnik cafe", "hippie commune", "punk club"],
            mood: ["nostalgic retro charm", "70s lifestyle gloss", "80s glamorous catalog", "90s minimal chic", "Polaroid candid vibe", "analog warm nostalgia", "disco glam aesthetic", "retro playful design", "MTV 90s advertising", "analog film texture mood", "film noir mystery", "punk rock anarchy", "hippie peace and love", "disco fever", "beatnik angst", "grunge apathy", "50s optimism", "40s patriotism", "20s decadence", "Victorian romanticism"],
            extraElements: ["dust particles in light", "Polaroid frame overlay", "retro price tag", "vintage magazine text overlay", "film scratches", "VHS timestamp corner", "faded ad borders", "retro product box prop", "instant film aesthetic", "archival logo stamp", "cigarette smoke", "spilled drink", "broken glass", "graffiti", "political sticker", "band patch", "safety pin", "cassette tape unspooled", "vinyl record skipping", "TV static"],
            compositionScale: ["product in a vintage scene", "close-up on worn texture", "product on a store shelf (vintage)", "flat-lay with other retro items", "Polaroid of the product", "magazine ad layout", "old catalog style", "product seen on a vintage TV", "full table setting", "diorama", "miniature", "macro", "micro", "wide shot", "long shot", "medium shot", "close-up", "extreme close-up", "two-shot", "group shot"],
            shadowStyle: ["harsh direct flash shadow", "long, warm tungsten shadow", "soft, grainy shadow", "no shadow, flat catalog look", "shadow from a window blind", "dappled light shadow", "neon sign casting shadow", "indistinct, dark room shadow", "shadow with film grain", "authentic, unstyled shadow", "silhouette", "chiaroscuro", "tenebrism", "sfumato", "unione", "cangiante", "grisaille", "monochrome", "film noir", "expressionism"],
            colorHarmony: ["faded Kodachrome palette", "warm 70s earth tones", "vibrant 80s neons and pastels", "muted 90s grunge tones", "sepia-toned", "black and white with heavy grain", "cross-processed greens and magentas", "Technicolor saturation", "aged, yellowed paper tones", "Polaroid's unique color cast", "hand-tinted", "autochrome", "two-strip Technicolor", "three-strip Technicolor", "gasparcolor", "kinemacolor", "prizma color", "cinecolor", "trucolor", "eastman color"],
            motionEffect: ["VHS tracking lines", "Super 8mm film jitter", "projector flicker effect", "lens flare from an old lens", "slow, grainy zoom-in", "record spinning on a turntable", "cassette tape unspooling", "Polaroid picture developing", "light leak transition", "film reel burn", "whip pan", "crash zoom", "dolly zoom", "jump cut", "match cut", "dissolve", "fade", "wipe", "iris", "split screen"],
            advertisingStyle: ["70s print magazine ad", "80s neon-drenched poster", "90s minimalist ad (like Calvin Klein)", "old Sears catalog page", "grainy TV commercial still", "Polaroid ad style", "lifestyle ad from the era", "product placement in a retro scene", "direct mail flyer style", "pre-internet era advertising", "propaganda poster", "public service announcement", "wanted poster", "movie poster", "concert flyer", "album cover", "book cover", "matchbook ad", "billboard", "sideshow banner"],
            references: ["Coca-Cola 70s print ads", "Polaroid SX-70 campaigns", "Kodak film catalog", "80s Sony Walkman ads", "90s Calvin Klein product shots", "retro Nike sneakers catalog", "Marlboro lifestyle ads", "Pepsi 80s neon poster", "VHS camcorder product still", "old Vogue retro spreads", "Andy Warhol", "Roy Lichtenstein", "David Hockney", "Ed Ruscha", "Robert Rauschenberg", "Jasper Johns", "Claes Oldenburg", "James Rosenquist", "Tom Wesselmann", "Richard Hamilton"],
            cameraLens: ["Nikon FM2 + 50mm AI-S", "Canon AE-1 + 50mm FD", "Leica M6 + 35mm Summicron", "Pentax 67 + 105mm", "Mamiya RZ67 + 110mm", "Contax T2 + 38mm", "Polaroid SX-70 instant", "Hasselblad 500CM + 80mm", "Olympus OM-1 + 50mm", "VHS camcorder lens", "Super 8 camera", "Bolex 16mm", "Graflex Speed Graphic", "Rolleiflex TLR", "Lomo LC-A", "Holga", "Diana", "Argus C3", "Kodak Brownie", "View Camera"],
            aspectRatio: ["1:1 (Vintage Catalog)", "4:5 (Old Magazine Ad)", "16:9 (Retro TV Ad)", "9:16 (Tall Print)", "3:2 (35mm)", "4:3 (CRT TV)", "1.37:1 (Academy)", "2.35:1 (CinemaScope)", "2.76:1 (Ultra Panavision)", "panoramic"]
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
            characterRelationship: "Character Relationship / Interaction Style",
            customKey: "Custom Key (Elemen Wajib)"
        },
        fieldDescriptions: {
            genre: "The category of the film, which sets the audience's expectations and the overall tone. E.g., 'period drama', 'psychological thriller'.",
            sceneType: "The specific type of event or interaction occurring, such as a 'heartfelt dialogue', 'rooftop confrontation', or 'chase sequence'.",
            characters: "Who is in the scene? This can be a 'romantic duo', a 'detective vs suspect', or a more abstract 'masked performer'.",
            setting: "The physical location where the scene takes place. The setting heavily influences the mood and context of the story.",
            timeOfDay: "The time of day, which dictates the quality and color of natural light. 'Golden hour' is warm, while 'blue hour' is mysterious.",
            cameraMovement: "How the camera moves within the scene. A 'steady dolly-in' builds tension, while 'handheld tracking' creates a sense of urgency.",
            actionVerb: "The primary physical action performed by a character. This is the key movement that drives the scene's narrative forward.",
            mood: "The emotional atmosphere of the scene. Can range from 'heartfelt sincerity' to 'tense suspense' or 'dreamlike surreal'.",
            visualAesthetic: "The overall look, including color grading and texture. 'Teal & orange' is common in blockbusters; 'classic 35mm film' is nostalgic.",
            shotType: "The framing of the shot, describing how much of the subject is visible and from what perspective. E.g., 'close-up', 'wide shot', 'POV'.",
            editingStyle: "The technique used to cut shots together. 'Invisible editing' is seamless, while 'fast-paced cutting' creates energy.",
            productionDesign: "The visual design of the set, props, and overall environment. Can be 'historically accurate', 'sleek minimalist', or 'gritty realistic'.",
            lensEffects: "Optical effects created by the camera lens, such as 'anamorphic lens flare' or a 'rack focus' to shift the viewer's attention.",
            soundDesignCue: "A description of the soundscape to enhance the mood (even for a still image). E.g., 'quiet room tone', 'pulsing synth score'.",
            pacing: "The perceived speed and rhythm of the scene. Can be 'slow and deliberate' to build suspense or 'fast-paced and frantic' for action.",
            aspectRatio: "The frame's width-to-height ratio. '2.39:1' provides a cinematic widescreen look, while '4:3' can feel classic or claustrophobic.",
            references: "Inspiration from the signature style of directors or films, such as 'David Fincher noir' or 'Wes Anderson symmetry'.",
            cameraLens: "The type of camera and lens combination used to achieve the desired cinematic look, affecting perspective and depth.",
            characterAnchor: "A fixed, detailed description of a character's core identity (age, gender, general look) to maintain consistency across scenes.",
            wardrobeLock: "The primary, consistent outfit for a character. This is essential for maintaining visual continuity between different shots or scenes.",
            hairMakeup: "Specific, consistent details for a character's hair and makeup style, further ensuring visual continuity across the film.",
            characterRelationship: "Defines the dynamic between characters in the scene, such as 'Tense and confrontational' or 'Playful and lighthearted'."
        },
        conservative: { 
            genre: ["period drama", "romantic comedy", "slice-of-life", "historical biopic", "family melodrama", "coming-of-age", "literary adaptation", "courtroom drama", "social realism", "classic love story", "western", "war film", "musical", "film noir", "screwball comedy", "epic", "biographical", "documentary", "mockumentary", "sports film"],
            sceneType: ["heartfelt dialogue", "family reunion", "meet-cute", "farewell scene", "classroom lesson", "dinner table", "park bench talk", "wedding vow", "reunion hug", "hospital bedside talk", "courtroom testimony", "battlefield charge", "musical number", "interrogation", "heist planning", "car chase", "love confession", "betrayal", "death scene", "final showdown"],
            characters: ["protagonist monologue", "romantic duo", "family group", "mentor/student", "siblings", "village elder", "politician speech", "child with parent", "teacher & student", "grieving widow", "hero", "villain", "anti-hero", "femme fatale", "sidekick", "comic relief", "wise old man", "damsel in distress", "chosen one", "trickster"],
            setting: ["suburban home", "countryside field", "café interior", "school classroom", "cozy street", "family living room", "church", "local library", "park", "city hall", "western saloon", "WWII battlefield", "Broadway stage", "smoky detective office", "fancy restaurant", "castle", "spaceship", "post-apocalyptic wasteland", "fantasy kingdom", "dystopian city"],
            timeOfDay: ["morning daylight", "golden hour sunset", "candlelit dinner", "overcast afternoon", "lamplight night", "natural dusk", "fluorescent classroom", "firelit night", "daylight kitchen", "clear noon light", "blue hour", "midnight", "dawn", "twilight", "solar eclipse", "lunar eclipse", "aurora borealis", "meteor shower", "stormy weather", "foggy morning"],
            cameraMovement: ["locked-off wide", "steady dolly-in", "symmetrical medium", "slow pan", "classic OTS", "tripod profile", "static two-shot", "crane reveal", "balanced tracking", "establishing wide", "zoom in", "zoom out", "dolly zoom", "trucking shot", "pedestal shot", "arc shot", "handheld", "steadicam", "gimbal", "drone shot"],
            actionVerb: ["writes a letter", "looks out a window", "arranges flowers in a vase", "takes a slow sip of tea", "opens an old book", "a gentle handshake", "a warm, reassuring hug", "wipes away a single tear", "nods in agreement", "places a hand on someone's shoulder", "fires a gun", "rides a horse", "sings a song", "solves a crime", "robs a bank", "drives a car", "kisses their love", "stabs their enemy", "dies", "wins the battle"],
            mood: ["heartfelt sincerity", "hopeful calm", "bittersweet nostalgia", "serene intimacy", "professional restraint", "warm familial", "gentle melancholy", "tender romantic", "grounded realism", "solemn prestige", "epic and grand", "tense and suspenseful", "joyful and celebratory", "dark and mysterious", "comedic and lighthearted", "tragic and heartbreaking", "inspiring and uplifting", "terrifying and horrific", "thought-provoking and philosophical", "action-packed and thrilling"],
            visualAesthetic: ["classic 35mm film", "sepia warm palette", "glossy clean", "subtle grain", "timeless monochrome", "heritage color", "cinematic realism", "refined grading", "pastel neutrality", "natural warm tone", "Technicolor", "bleach bypass", "cross-processing", "push processing", "pull processing", "solarization", "reticulation", "daguerreotype", "tintype", "ambrotype"],
            shotType: ["establishing shot", "medium two-shot", "close-up", "medium shot", "wide shot", "over-the-shoulder shot", "master shot", "reaction shot", "insert shot (of an object)", "profile shot", "long shot", "full shot", "medium long shot", "medium close-up", "extreme close-up", "point-of-view shot", "dutch angle", "low angle shot", "high angle shot", "bird's-eye view shot"],
            editingStyle: ["classic cut", "dissolve", "fade to black", "match cut", "invisible editing", "L-cut / J-cut", "shot reverse shot", "montage (short)", "cross-cutting", "long take", "jump cut", "smash cut", "wipe", "iris", "split screen", "freeze frame", "slow motion", "fast motion", "reverse motion", "graphic match"],
            productionDesign: ["historically accurate", "minimalist and clean", "cozy and cluttered (lived-in)", "formal and elegant", "rustic and natural", "suburban normal", "institutional (school, office)", "grand and opulent", "modest and humble", "naturalistic", "futuristic", "dystopian", "utopian", "fantasy", "steampunk", "cyberpunk", "biopunk", "dieselpunk", "atompunk", "solarpunk"],
            lensEffects: ["no effects, clean lens", "subtle lens flare", "soft focus for romantic mood", "deep focus", "natural bokeh", "clear, sharp focus", "gentle blooming on highlights", "anamorphic bokeh (subtle)", "breathing effect (subtle)", "perfectly clean image", "strong lens flare", "heavy vignetting", "barrel distortion", "pincushion distortion", "chromatic aberration", "coma", "astigmatism", "ghosting", "starburst effect", "hazy glow"],
            soundDesignCue: ["quiet room tone", "gentle classical music score", "sound of birds chirping", "ticking clock", "rain against the window", "crackling fireplace", "distant church bells", "clear dialogue", "footsteps on a wooden floor", "turning pages of a book", "gunshots and explosions", "horse hooves galloping", "singing and dancing", "jazzy saxophone solo", "witty banter", "epic orchestral score", "heartbeat", "creepy ambient noise", "laugh track", "rousing sports anthem"],
            pacing: ["slow and deliberate", "gentle rhythm", "leisurely", "calm and steady", "observational", "unhurried", "thoughtful", "graceful", "naturalistic timing", "real-time feel", "fast-paced", "frantic", "energetic", "dynamic", "rhythmic", "staccato", "legato", "accelerando", "ritardando", "rubato"],
            aspectRatio: ["1.85:1 (Standard Flat)", "1.37:1 (Academy Ratio)", "4:3 (Classic TV)", "1.66:1 (European Widescreen)", "2.00:1 (Univisium)", "custom narrow aspect ratio", "split screen (symmetrical)", "circular vignette", "soft-edged frame", "standard 16:9", "2.39:1 (CinemaScope)", "2.76:1 (Ultra Panavision 70)", "panoramic (Cinerama)", "polyvision", "triptych", "quadriptych", "polyptych", "variable aspect ratio", "interactive aspect ratio", "no aspect ratio"],
            references: ["Greta Gerwig naturalism", "Wong Kar-wai nostalgia", "Ozu stillness", "Linklater realism", "Kore-eda intimacy", "Kurosawa epic drama", "Ang Lee family drama", "James Ivory heritage", "Ron Howard sincerity", "Alfonso Cuarón realism", "John Ford westerns", "Steven Spielberg blockbusters", "Gene Kelly musicals", "Billy Wilder comedies", "Alfred Hitchcock thrillers", "Stanley Kubrick epics", "Orson Welles film noir", "Frank Capra feel-good movies", "Charlie Chaplin silent films", "Sergio Leone spaghetti westerns"],
            cameraLens: ["ARRI Alexa Mini + 35mm", "Canon C300 MkIII + 85mm", "Sony FX3 + 50mm", "RED Helium + 40mm", "Leica SL Cine + 50mm", "ARRI Amira + 28mm", "Canon R5C cine + 35mm", "Sony A7S III + 24mm", "Blackmagic 6K + 35mm", "RED Raven + 50mm", "Panavision Panaflex + 50mm", "Mitchell BNC + 35mm", "Technicolor Camera + 50mm", "CinemaScope Lens + 50mm", "Super 8 Camera", "Bolex 16mm", "IMAX Camera", "3D Camera", "360 Camera", "Light Field Camera"],
            characterAnchor: ["Female, early 20s, youthful, bright expression", "Female, late 20s, elegant, calm expression", "Female, early 30s, thoughtful, melancholic", "Female, 40s, mature, strong presence", "Male, early 20s, energetic, curious", "Male, late 20s, stylish, confident", "Male, early 30s, introspective, quiet strength", "Male, 40s, weathered, kind eyes", "Male, 50s, authoritative, reflective", "Child, innocent and curious", "Teenager, rebellious and misunderstood", "Young adult, finding their way", "Adult, settled and responsible", "Senior, wise and experienced", "Outcast, shunned by society", "Leader, inspiring others", "Follower, loyal and devoted", "Trickster, clever and mischievous", "Mentor, guiding the protagonist", "Nemesis, opposing the protagonist"],
            wardrobeLock: ["Casual neutral (shirt + jeans)", "Business attire (suit, tie, dress shirt)", "Vintage (cardigan + blouse, muted tones)", "Formal evening (dress, tuxedo)", "Streetwear (hoodie, sneakers)", "Minimalist modern (monochrome outfit)", "Rustic/countryside (wool sweater, boots)", "Cultural/traditional attire (kimono, kebaya, sari, etc.)", "Fantasy armor", "Sci-fi uniform", "Post-apocalyptic rags", "Superhero costume", "Period costume", "School uniform", "Athletic gear", "Pajamas", "Swimsuit", "Wedding dress", "Mourning clothes", "Nudity"],
            hairMakeup: ["Hair: Shoulder-length, loose natural", "Hair: Long, wavy, styled", "Hair: Short, neat, side-part", "Hair: Bun / tied up", "Hair: Curly, voluminous", "Hair: Bald / shaved", "Makeup: Natural minimal", "Makeup: Bold (lipstick, eyeliner)", "Makeup: Matte finish", "Makeup: Vintage glam (red lips, soft curls)", "Scars and wounds", "Tattoos and piercings", "Fantasy makeup (e.g., elf ears)", "Sci-fi makeup (e.g., cyborg implants)", "Post-apocalyptic grime", "Superhero mask", "Period hairstyle", "Geisha makeup", "Clown makeup", "Drag makeup"],
            characterRelationship: ["Distant but caring", "Intimate but restrained", "Tense and confrontational", "Playful and lighthearted", "Professional and formal", "Secretive and guarded", "Melancholic and reflective", "Lovers", "Enemies", "Rivals", "Friends", "Family", "Strangers", "Allies", "Master and apprentice", "Mentor and mentee", "Guardian and ward", "Creator and creation", "God and worshipper", "Predator and prey"]
         
        },
        balanced: { 
            genre: ["psychological thriller", "heist drama", "mystery adventure", "romantic drama", "political intrigue", "action suspense", "crime procedural", "dystopian near-future", "satire drama", "ensemble relationship film", "neo-noir", "space opera", "cyberpunk", "biopunk", "steampunk", "solarpunk", "cli-fi", "hopepunk", "noblebright", "grimdark"],
            sceneType: ["rooftop confrontation", "tense negotiation", "chase sequence", "nightclub reveal", "office breakdown", "subway standoff", "festival chaos", "romantic balcony", "airport goodbye", "protest march", "heist execution", "interrogation scene", "hacking sequence", "viral outbreak", "alien invasion", "robot uprising", "time travel paradox", "virtual reality simulation", "genetic engineering experiment", "climate change disaster"],
            characters: ["detective vs suspect", "small friend group", "rival conflict", "ensemble cast", "activist group", "athlete & coach", "journalist & informant", "soldier squad", "celebrity couple", "musician & fan", "hacker", "whistleblower", "cyborg", "android", "mutant", "clone", "AI", "alien", "superhero", "supervillain"],
            setting: ["subway station", "rooftop skyline", "industrial warehouse", "luxury hotel", "office tower", "airport terminal", "concert hall", "sports arena", "protest square", "fashion runway", "hacker den", "underground bunker", "space station", "generation ship", "exoplanet", "virtual reality", "cyberpunk metropolis", "dystopian megacity", "utopian arcology", "post-apocalyptic settlement"],
            timeOfDay: ["blue hour suspense", "neon midnight", "stormy dusk", "fluorescent office", "city skyline glow", "shadowy twilight", "nightlife bar glow", "streetlamp-lit scene", "colorful festival", "rooftop golden dusk", "acid rain", "toxic fog", "nuclear winter", "perpetual twilight", "artificial sun", "binary sunset", "trinary sunset", "black hole accretion disk", "nebula glow", "cosmic microwave background"],
            cameraMovement: ["handheld tracking", "steadicam pursuit", "drone reveal", "push-in close-up", "crane lift", "car-mounted tracking", "whip pan", "circular pan", "over-the-shoulder follow", "wide crowd shot", "snorricam", "bodycam", "helmet cam", "bullet time", "zolly", "orbital shot", "fly-through", "j-cut", "l-cut", "match cut"],
            actionVerb: ["runs across a rooftop", "slams a folder on the table", "looks through binoculars", "pulls out a hidden object", "types furiously on a keyboard", "a tense handshake exchange", "chases someone through a crowd", "defuses a device", "makes a secret exchange", "has a heated argument", "hacks into a system", "leaks classified documents", "fights a cyborg", "pilots a spaceship", "explores an alien planet", "enters virtual reality", "unleashes a virus", "survives the apocalypse", "travels through time", "saves the world"],
            mood: ["tense suspense", "melancholic cinematic", "stylish noir", "playful lifestyle", "dynamic urban chic", "youthful romance", "gritty realism", "energetic festival", "political urgency", "aspirational hope", "cyberpunk cool", "dystopian despair", "utopian optimism", "post-apocalyptic grit", "space opera wonder", "cosmic horror dread", "existential angst", "technological awe", "transhumanist ambition", "biopunk body horror"],
            visualAesthetic: ["teal & orange blockbuster", "muted pastel indie", "bleach bypass", "vibrant saturation", "cinematic urban", "romantic glow", "noir desaturation", "colorful realism", "lifestyle chic tone", "high-contrast drama", "neon-drenched cyberpunk", "brutalist dystopian", "sleek utopian", "rusty post-apocalyptic", "grimy industrial", "bioluminescent alien", "holographic virtual", "glitchy digital", "retro-futuristic", "cassette futurism"],
            shotType: ["point-of-view (POV) shot", "dutch angle", "long tracking shot", "oners (long take)", "crash zoom", "snorricam shot", "reveal shot", "low angle hero shot", "high angle vulnerability shot", "aerial shot", "macro shot", "probe lens shot", "infrared shot", "ultraviolet shot", "thermal imaging shot", "x-ray shot", "gamma-ray burst shot", "cosmic microwave background shot", "dark matter shot", "antimatter shot"],
            editingStyle: ["fast-paced cutting", "jump cut", "montage sequence", "slow-motion", "parallel editing", "graphic match", "smash cut", "whip pan transition", "fade to white", "iris out", "split screen", "freeze frame", "fast motion", "reverse motion", "time-lapse", "hyperlapse", "bullet time", "match cut", "j-cut", "l-cut"],
            productionDesign: ["gritty and realistic urban", "sleek and modern minimalist", "near-future dystopian", "opulent luxury", "industrial and cold", "chaotic and lived-in", "stylish and curated", "neon-drenched noir", "naturalistic and organic", "corporate and sterile", "cyberpunk clutter", "dystopian brutalism", "utopian solarpunk", "post-apocalyptic salvage", "steampunk Victoriana", "biopunk organic tech", "space opera chrome", "alien crystalline structures", "virtual reality wireframes", "holographic interfaces"],
            lensEffects: ["anamorphic lens flare", "rack focus", "focus pull", "lens breathing", "hazy bloom effect", "raindrops on lens", "intentional lens dirt/smudge", "dreamy soft filter", "vignetting to focus attention", "zoom lens compression", "fisheye distortion", "tilt-shift miniaturization", "probe lens perspective", "infrared filter", "ultraviolet filter", "thermal imaging filter", "x-ray filter", "gamma-ray burst filter", "dark matter filter", "antimatter filter"],
            soundDesignCue: ["tense, pulsing synth score", "bustling city ambience", "loud nightclub music", "inaudible muffled dialogue", "sudden, impactful sound effect", "character's heavy breathing", "non-diegetic music swells", "ominous drone", "cacophony of sounds", "sharp, jarring silence", "glitchy electronic noise", "whirring of servos", "hum of a spaceship", "chatter of an alien language", "static of a broken transmission", "roar of a monster", "click of a geiger counter", "sound of a heart monitor", "voice of an AI assistant", "the silence of space"],
            pacing: ["fast-paced and frantic", "tense and suspenseful", "dynamic and energetic", "alternating fast and slow", "driving and propulsive", "quick and rhythmic", "building to a crescendo", "relentless", "breathless", "punchy", "methodical and deliberate", "meditative and hypnotic", "jarring and chaotic", "cyclical and repetitive", "non-linear and fragmented", "accelerating and decelerating", "crescendo and diminuendo", "staccato and legato", "rubato and adagio", "allegro and presto"],
            aspectRatio: ["2.39:1 (Anamorphic Widescreen)", "2:1 (common for streaming)", "16:9 (HD Video)", "alternating aspect ratios", "extreme letterboxing", "vertical 9:16 (for social)", "unconventional split screen", "dynamic aspect ratio changes", "super wide 3.55:1", "claustrophobic 1:1", "IMAX 1.43:1", "Cinerama 2.59:1", "Polyvision 4:1", "triptych", "quadriptych", "polyptych", "circular", "triangular", "hexagonal", "fractal"],
            references: ["Christopher Nolan suspense", "David Fincher noir", "Denis Villeneuve sci-fi realism", "Sofia Coppola minimalism", "Paul Thomas Anderson drama", "Ridley Scott epic", "Alfonso Cuarón hybrid", "Barry Jenkins poetic realism", "Bong Joon-ho satire", "Sam Mendes theatrical style", "Wachowskis cyberpunk", "George Lucas space opera", "James Cameron action", "Guillermo del Toro fantasy", "Wes Craven horror", "John Carpenter horror", "David Cronenberg body horror", "Terry Gilliam surrealism", "Darren Aronofsky psychological", "Gaspar Noé provocative"],
            cameraLens: ["Sony FX6 + 24–70mm", "RED Komodo + 50mm", "Canon C500 MkII + 35mm", "DJI Ronin 4D + 35mm", "ARRI Alexa LF + 47mm", "Sony Venice + 50mm prime", "Nikon Z9 cine + 28mm", "Blackmagic Pocket 6K + 85mm", "Canon R5C + 50mm", "Leica SL2 cine + 90mm", "anamorphic lens", "probe lens", "tilt-shift lens", "fisheye lens", "infrared lens", "ultraviolet lens", "thermal imaging lens", "x-ray lens", "gamma-ray burst lens", "dark matter lens"],
            characterAnchor: ["Female, early 20s, youthful, bright expression", "Female, late 20s, elegant, calm expression", "Female, early 30s, thoughtful, melancholic", "Female, 40s, mature, strong presence", "Male, early 20s, energetic, curious", "Male, late 20s, stylish, confident", "Male, early 30s, introspective, quiet strength", "Male, 40s, weathered, kind eyes", "Male, 50s, authoritative, reflective", "Cyborg, cold and calculating", "Android, questioning its existence", "Mutant, struggling with their powers", "Clone, searching for identity", "AI, transcending its programming", "Alien, observing humanity", "Superhero, burdened by responsibility", "Supervillain, driven by tragedy", "Hacker, fighting the system", "Whistleblower, exposing the truth", "Survivor, haunted by the past"],
            wardrobeLock: ["Casual neutral (shirt + jeans)", "Business attire (suit, tie, dress shirt)", "Vintage (cardigan + blouse, muted tones)", "Formal evening (dress, tuxedo)", "Streetwear (hoodie, sneakers)", "Minimalist modern (monochrome outfit)", "Rustic/countryside (wool sweater, boots)", "Cultural/traditional attire (kimono, kebaya, sari, etc.)", "cyberpunk trench coat", "dystopian rags", "utopian robes", "post-apocalyptic armor", "space suit", "virtual reality avatar", "biopunk organic clothing", "steampunk corsets and gears", "solarpunk functional wear", "noblebright shining armor", "grimdark ragged cloaks"],
            hairMakeup: ["Hair: Shoulder-length, loose natural", "Hair: Long, wavy, styled", "Hair: Short, neat, side-part", "Hair: Bun / tied up", "Hair: Curly, voluminous", "Hair: Bald / shaved", "Makeup: Natural minimal", "Makeup: Bold (lipstick, eyeliner)", "Makeup: Matte finish", "Makeup: Vintage glam (red lips, soft curls)", "cybernetic implants", "glowing tattoos", "mutated features", "barcode tattoo", "holographic makeup", "bioluminescent hair", "nanite-infused skin", "scars from a forgotten war", "war paint", "ritualistic markings"],
            characterRelationship: ["Distant but caring", "Intimate but restrained", "Tense and confrontational", "Playful and lighthearted", "Professional and formal", "Secretive and guarded", "Melancholic and reflective", "Human and AI", "Creator and creation", "Oppressor and oppressed", "Colonizer and colonized", "Hunter and hunted", "Predator and prey", "Symbiote and host", "Hive mind and individual", "Dreamer and dream", "Time traveler and fixed point", "Parallel universe counterparts", "God and mortal", "Devil and angel"]
        },
        experimental: { 
            genre: ["surreal horror", "nonlinear arthouse", "dreamlike sci-fi", "abstract ritual film", "symbolic mythology", "fragmented memory play", "metaphysical journey", "glitch reality fantasy", "ritualistic avant-garde", "chaotic post-human narrative", "anti-film", "cinematic poetry", "visual album", "expanded cinema", "structural film", "paracinema", "underground film", "transgressive cinema", "visionary film", "cinematic happening"],
            sceneType: ["fragmented dream montage", "levitation ritual", "glitch corridor", "ritualistic chanting scene", "hallucination sequence", "nonlinear flash", "body clone reveal", "infinite mirror chamber", "surreal void confrontation", "soundless scream sequence", "consciousness stream visualization", "ego death simulation", "time loop collapse", "reality shattering", "fourth-wall demolition", "narrative deconstruction", "character dissolving into the background", "dialogue as pure sound", "image as pure texture", "film eating itself"],
            characters: ["masked performer", "androgynous archetype", "symbolic ritual crowd", "faceless figure", "fragmented clones", "cyborg hybrid", "alien visitor", "shamanistic guide", "abstract human swarm", "dream double", "the narrator", "the viewer", "the filmmaker", "the camera", "the film itself", "a concept", "an emotion", "a memory", "a dream", "a god"],
            setting: ["surreal void", "collapsing CGI city", "infinite mirror maze", "underwater interior", "holographic chamber", "neon dream desert", "glitch tunnel", "floating island", "distorted forest", "abstract black box stage", "the subconscious", "the collective unconscious", "the akashic records", "the bardo", "limbo", "purgatory", "heaven", "hell", "the space between thoughts", "the moment of death"],
            timeOfDay: ["glitch strobe light", "laser grids", "UV surreal glow", "projection textures", "silhouette firelight", "abstract color flicker", "inverted lighting", "shifting spotlight", "colored fog", "shadow-only illumination", "non-existent time", "all times at once", "a time that never was", "a time that will never be", "a time outside of time", "a frozen moment", "a repeating moment", "an accelerating moment", "a decelerating moment", "the end of time"],
            cameraMovement: ["Dutch tilt spiral", "fisheye POV", "kaleidoscope split screen", "worm’s-eye distortion", "reflection through glass", "inverted framing", "slow zoom crash", "fragmented montage", "surreal double exposure", "VR immersive shot", "the camera is a character", "the camera is a weapon", "the camera is a god", "the camera is a prisoner", "the camera is a ghost", "the camera is a memory", "the camera is a dream", "the camera is a lie", "the camera is the truth", "the camera is"],
            actionVerb: ["shatters into a million pieces", "body dissolves into light particles", "moves in non-Euclidean ways", "a scream that distorts reality", "phase-shifts through a solid wall", "multiplies into several clones", "performs a ritualistic dance", "opens a portal", "communicates without speaking", "aging rapidly and in reverse", "becomes the background", "eats the camera", "rewrites the script", "escapes the frame", "becomes self-aware", "achieves enlightenment", "destroys the universe", "creates the universe", "does nothing", "does everything"],
            mood: ["dreamlike surreal", "eerie unsettling", "chaotic abstract", "avant-garde ritual", "hyper-stylized bold", "violent raw", "meditative trance", "mythological awe", "uncanny emptiness", "psychedelic chaos", "Lynchian dread", "Kubrickian coldness", "Tarkovskian spirituality", "Jodorowskian madness", "Cronenbergian body horror", "Giger-esque biomechanics", "Beksiński-esque despair", "Dalí-esque absurdity", "Magritte-esque paradox", "Duchamp-esque irony"],
            visualAesthetic: ["negative inversion", "infrared palette", "glitch overlay", "overexposed wash", "surreal mixed-media", "distorted textures", "projection mapping overlays", "psychedelic colors", "dream abstraction", "digital fantasy blend", "databending", "pixel sorting", "scan lines", "VHS artifacts", "film grain", "light leaks", "chemical burns", "scratches and dust", "hand-painted film", "direct animation"],
            shotType: ["abstract close-up", "impossible perspective", "subjective POV of non-human", "fourth-wall break", "multi-layered composite shot", "time-slice photography look", "slit-scan photography effect", "lensless photography look", "visual metaphor shot", "fractal zoom", "the anti-shot", "the un-shot", "the shot that was never taken", "the shot that was forgotten", "the shot that was dreamed", "the shot that was imagined", "the shot that was impossible", "the shot that was everything", "the shot that was nothing", "the shot"],
            editingStyle: ["discontinuous editing", "graphic match (abstract)", "subliminal single-frame cuts", "non-linear narrative", "rhythmic cutting to sound", "visual poetry", "disorienting jump cuts", "datamoshing transitions", "extreme time remapping", "collapsing layers", "flicker film", "structural film editing", "paracinematic editing", "found footage collage", "remix culture", "cut-up technique", "stream of consciousness", "aleatoric editing", "generative editing", "no editing"],
            productionDesign: ["non-Euclidean architecture", "brutalist surrealism", "biomechanical sets", "liquid architecture", "minimalist void", "sentient environment", "glitching reality", "sets made of pure light", "retro-futuristic decay", "memory palace", "the backrooms", "liminal spaces", "heterotopias", "utopias", "dystopias", "atopia", "uchronia", "allotopia", "pantopia", "no-place"],
            lensEffects: ["lens-whacking", "free-lensing", "prism filter effects", "kaleidoscope lens", "custom experimental lens", "liquid on lens", "broken lens effect", "extreme chromatic aberration", "anamorphic distortion", "breathing that distorts space", "sentient lens", "dream lens", "memory lens", "conceptual lens", "impossible lens", "the lens is a black hole", "the lens is a wormhole", "the lens is a tesseract", "the lens is the eye of God", "no lens"],
            soundDesignCue: ["deafening silence", "glitching audio", "ASMR-like textures", "atonal drone", "cacophony of overlapping voices", "a single, pure sine wave", "reversed audio", "sound that precedes the visual", "heartbeat rhythm", "white noise", "the sound of a dying star", "the sound of a black hole", "the sound of the big bang", "the sound of the end of the universe", "the sound of a thought", "the sound of a memory", "the sound of a dream", "the sound of a soul", "the sound of God", "the sound of nothing"],
            pacing: ["hypnotic and slow", "jarring and chaotic", "non-linear time", "cyclical / looping", "meditative and trance-like", "frenetic and explosive", "a single, long, unending moment", "fragmented and disjointed", "accelerating to infinity", "decelerating to a stop", "no pace", "all paces", "a pace that changes with your heartbeat", "a pace that changes with your thoughts", "a pace that changes with your dreams", "a pace that changes with your memories", "a pace that changes with your soul", "a pace that changes with God", "a pace that changes with the universe", "the pace of death"],
            aspectRatio: ["constantly shifting aspect ratio", "extreme vertical aspect ratio", "multi-frame layout (grid)", "circular or other shape frame", "anamorphic with extreme distortion", "a tiny frame in a black void", "overlapping frames", "4:3 for claustrophobia", "polyvision (multiple screens)", "no frame (immersive)", "Klein bottle", "Möbius strip", "tesseract", "hypercube", "fractal", "hologram", "virtual reality", "augmented reality", "mixed reality", "the real world"],
            references: ["Gaspar Noé surreal chaos", "Lars von Trier raw realism", "David Lynch dream logic", "Nick Knight SHOWstudio", "Tim Walker fantasy", "Alejandro Jodorowsky symbolic", "Harmony Korine fragmented", "Peter Greenaway baroque surrealism", "Shirin Neshat conceptual", "arthouse collective visuals", "Stan Brakhage", "Maya Deren", "Kenneth Anger", "Jonas Mekas", "Andy Warhol", "Michael Snow", "Hollis Frampton", "Tony Conrad", "Paul Sharits", "Chris Marker"],
            cameraLens: ["Sony Venice + anamorphic", "RED Komodo + fisheye", "Canon C500 MkII + tilt-shift", "Blackmagic 6K + probe lens", "360 VR rig", "RED Komodo + 16mm wide", "Phase One + cinema back", "Canon R5C + 8mm fisheye", "Blackmagic URSA Mini + vintage glass", "experimental Lomo lenses", "a pinhole", "a magnifying glass", "a drop of water", "a crystal", "a black hole", "a wormhole", "a tesseract", "the eye of God", "the mind's eye", "no camera"],
            characterAnchor: ["Female, early 20s, youthful, bright expression", "Female, late 20s, elegant, calm expression", "Female, early 30s, thoughtful, melancholic", "Female, 40s, mature, strong presence", "Male, early 20s, energetic, curious", "Male, late 20s, stylish, confident", "Male, early 30s, introspective, quiet strength", "Male, 40s, weathered, kind eyes", "Male, 50s, authoritative, reflective", "The idea of a character", "The memory of a character", "The dream of a character", "The absence of a character", "The concept of a character", "The archetype of a character", "The stereotype of a character", "The opposite of a character", "The character is you", "The character is me", "There are no characters"],
            wardrobeLock: ["Casual neutral (shirt + jeans)", "Business attire (suit, tie, dress shirt)", "Vintage (cardigan + blouse, muted tones)", "Formal evening (dress, tuxedo)", "Streetwear (hoodie, sneakers)", "Minimalist modern (monochrome outfit)", "Rustic/countryside (wool sweater, boots)", "Cultural/traditional attire (kimono, kebaya, sari, etc.)", "The clothes are made of light", "The clothes are made of shadow", "The clothes are made of memories", "The clothes are made of dreams", "The clothes are made of concepts", "The clothes are alive", "The clothes are a prison", "The clothes are a weapon", "The clothes are a god", "The clothes are nothing", "There are no clothes"],
            hairMakeup: ["Hair: Shoulder-length, loose natural", "Hair: Long, wavy, styled", "Hair: Short, neat, side-part", "Hair: Bun / tied up", "Hair: Curly, voluminous", "Hair: Bald / shaved", "Makeup: Natural minimal", "Makeup: Bold (lipstick, eyeliner)", "Makeup: Matte finish", "Makeup: Vintage glam (red lips, soft curls)", "The hair is made of light", "The hair is made of shadow", "The hair is made of memories", "The hair is made of dreams", "The hair is made of concepts", "The makeup is a mask", "The makeup is a weapon", "The makeup is a god", "The makeup is nothing", "There is no hair or makeup"],
            characterRelationship: ["Distant but caring", "Intimate but restrained", "Tense and confrontational", "Playful and lighthearted", "Professional and formal", "Secretive and guarded", "Melancholic and reflective", "The character and their shadow", "The character and their reflection", "The character and their dream", "The character and their memory", "The character and their god", "The character and the viewer", "The character and the filmmaker", "The character and the film", "The character and the concept of a relationship", "The character and the absence of a relationship", "There is no relationship", "All relationships are one", "The relationship is you and me"]
        },
        vintage: { 
            genre: ["70s noir crime", "80s teen romance", "90s VHS horror", "retro music video", "grindhouse thriller", "spaghetti western", "70s political drama", "80s rom-com", "MTV 90s video style", "Super 8 documentary", "60s French New Wave", "50s musical", "40s film noir", "30s screwball comedy", "20s silent film", "German Expressionism", "Soviet Montage", "Italian Neorealism", "Japanese Golden Age", "Blaxploitation"],
            sceneType: ["VHS home video diary", "Polaroid montage", "80s sitcom dinner", "70s disco dance", "retro training montage", "drive-in cinema date", "VHS camcorder birthday party", "old music rehearsal", "vintage news broadcast", "90s skate session", "beatnik poetry reading", "hippie love-in", "punk rock concert", "disco dance-off", "western shootout", "film noir interrogation", "screwball comedy argument", "silent film chase scene", "musical song-and-dance number", "expressionist nightmare sequence"],
            characters: ["70s rock band", "80s high school clique", "90s skater kid", "VHS family archive", "retro supermodel cast", "disco dancers", "cowboy drifters", "arcade kids", "retro politician", "retro sitcom family", "beatniks", "hippies", "punks", "yuppies", "greasers", "flappers", "gangsters", "cowboys", "detectives", "movie stars"],
            setting: ["neon diner", "VHS living room", "80s arcade", "retro gym hall", "drive-in cinema", "roller rink", "retro photo studio", "70s political rally stage", "disco club", "VHS classroom", "beatnik cafe", "hippie commune", "punk club", "yuppie apartment", "greaser garage", "flapper speakeasy", "gangster hideout", "western saloon", "detective office", "movie palace"],
            timeOfDay: ["tungsten interiors", "fluorescent arcade light", "VHS camcorder flash", "Polaroid daylight", "incandescent warm glow", "neon diner sign", "disco ball sparkle", "70s warm yellow stage light", "retro gradient backdrop", "VHS spotlight wash", "gaslight", "kerosene lamp", "campfire", "moonlight", "streetlamp", "car headlights", "TV screen glow", "movie projector beam", "strobe light", "blacklight"],
            cameraMovement: ["handheld camcorder shake", "VHS crash zoom", "Polaroid static frame", "70s slow zoom", "Super 8 jitter pan", "dolly zoom 80s thriller", "shoulder-mounted Betacam", "retro sitcom multi-cam", "VHS tilt framing", "analog crane move", "whip pan", "swish pan", "jump cut", "match cut", "dissolve", "fade", "wipe", "iris", "split screen", "freeze frame"],
            actionVerb: ["puts a vinyl record on the player", "answers a rotary phone", "lights a cigarette in a smoky room", "skateboarding down a suburban street", "a cheesy thumbs-up to the camera", "dancing under a disco ball", "rewinding a cassette with a pencil", "adjusts TV antenna", "sprays hair with hairspray", "blows bubblegum", "reads a beat poem", "attends a love-in", "moshes at a punk show", "does aerobics", "has a shootout", "interrogates a suspect", "has a witty repartee", "gets chased", "breaks into song", "has a nightmare"],
            mood: ["nostalgic analog charm", "VHS eerie lo-fi", "retro glam", "playful cheesy vibe", "documentary realism", "disco energy", "80s heartfelt melodrama", "70s political tension", "90s indie film vibe", "Polaroid warmth", "beatnik cool", "hippie love", "punk anger", "yuppie ambition", "greaser rebellion", "flapper decadence", "gangster danger", "cowboy lonerism", "detective cynicism", "movie star glamour"],
            visualAesthetic: ["VHS static grain", "Polaroid faded color", "Kodachrome 70s palette", "80s glossy ad look", "90s music video style", "analog documentary tone", "archival warm sepia", "disco neon glow", "retro magazine color block", "Super 8 film grain", "hand-tinted black and white", "two-strip Technicolor", "three-strip Technicolor", "bleach bypass", "cross-processing", "push processing", "pull processing", "solarization", "reticulation", "daguerreotype"],
            shotType: ["grainy close-up", "static wide shot (sitcom style)", "handheld follow shot", "crash zoom", "authentic home video shot", "found footage POV", "posed music video shot", "archival news footage style", "candid snapshot moment", "slow zoom reveal", "long take", "deep focus", "shallow focus", "soft focus", "rack focus", "split diopter", "dutch angle", "low angle", "high angle", "bird's-eye view"],
            editingStyle: ["hard cuts", "long cross-dissolves (70s)", "VHS-style glitch cuts", "montage with pop music", "wipe transitions", "fade in from black", "A/B roll editing", "cheesy star wipe", "split screen (70s)", "match cut on action", "jump cut", "smash cut", "iris in/out", "freeze frame", "slow motion", "fast motion", "reverse motion", "graphic match", "Soviet montage", "Kuleshov effect"],
            productionDesign: ["wood paneling and shag carpets (70s)", "neon and chrome (80s)", "beige plastic and flannel (90s)", "authentic period-correct props", "intentionally cheap-looking set", "vintage advertising in background", "cluttered and lived-in", "minimalist for the era", "disco-era glam", "suburban teen bedroom", "beatnik cafe decor", "hippie commune vibes", "punk club graffiti", "yuppie minimalist apartment", "greaser hot rod garage", "flapper art deco speakeasy", "gangster backroom office", "western saloon swinging doors", "detective venetian blinds", "Hollywood movie palace opulence"],
            lensEffects: ["soft focus / blooming highlights", "streaky lens flare", "vaseline on the lens effect", "zoom lens breathing", "low-quality VHS lens distortion", "grainy, low-light noise", "authentic film gate weave", "dust on the lens", "anamorphic flare (70s)", "dreamy diffusion filter", "Petzval swirl bokeh", "prism effects", "kaleidoscope lens", "star filter", "cross screen filter", "fog filter", "infrared filter", "UV filter", "polarizing filter", "neutral density filter"],
            soundDesignCue: ["vinyl record crackle", "cassette tape hiss", "8-bit video game sounds", "sitcom laugh track", "muffled dialogue from old TV", "80s synth-pop score", "70s funk music", "rotary phone ringing", "VHS tape motor whirring", "dial-up modem sounds", "beatnik bongo drums", "hippie acoustic guitar", "punk rock power chords", "disco bassline", "western harmonica", "film noir saxophone", "screwball comedy sound effects", "silent film piano score", "musical orchestra swell", "expressionist atonal score"],
            pacing: ["leisurely 70s pacing", "fast-paced 80s montage", "slacker 90s pacing", "home video real-time feel", "documentary observational", "music video rhythm", "suspenseful slow-burn", "comedic timing", "erratic and jittery", "nostalgic and slow", "French New Wave jump cuts", "Soviet Montage rapid cuts", "Italian Neorealism long takes", "Hollywood Golden Age invisible editing", "German Expressionism distorted pacing", "Blaxploitation funky rhythm", "spaghetti western tense stillness", "grindhouse chaotic energy", "MTV quick cuts", "Super 8 home movie languor"],
            aspectRatio: ["4:3 (CRT Television)", "2.35:1 (70s Widescreen)", "1.85:1 (80s/90s Film)", "Super 8mm aspect ratio", "grainy 16mm aspect ratio", "rounded TV screen corners", "video camera viewfinder overlay", "split screen", "damaged film border", "authentic Polaroid frame", "1.37:1 (Academy Ratio)", "1.19:1 (Movietone Ratio)", "2.59:1 (Cinerama)", "2.76:1 (Ultra Panavision 70)", "polyvision", "triptych", "quadriptych", "polyptych", "circular", "vignette"],
            references: ["Brian De Palma thrillers", "John Hughes teen films", "Wim Wenders road movies", "early Spike Lee", "80s MTV music videos", "70s Italian giallo", "French New Wave echoes", "Richard Donner 80s blockbusters", "VHS-era horror (Troma)", "Fellini retro surrealism", "Jean-Luc Godard", "François Truffaut", "Agnès Varda", "Jacques Demy", "Éric Rohmer", "Claude Chabrol", "Alain Resnais", "Chris Marker", "Jean-Pierre Melville", "Robert Bresson"],
            cameraLens: ["Super 8mm film camera", "VHS camcorder (Sony Handycam)", "Betacam SP", "Bolex 16mm", "Panasonic M7 VHS shoulder cam", "Polaroid instant film recorder", "Arriflex 435 (70s)", "Mitchell BNCR (classic Hollywood)", "Hi8 camcorder", "analog 35mm Panavision", "Leica M3", "Nikon F", "Canon F-1", "Pentax K1000", "Minolta SRT-101", "Olympus OM-1", "Hasselblad 500C", "Rolleiflex TLR", "Graflex Speed Graphic", "Linhof Technika"],
            characterAnchor: ["Female, early 20s, youthful, bright expression", "Female, late 20s, elegant, calm expression", "Female, early 30s, thoughtful, melancholic", "Female, 40s, mature, strong presence", "Male, early 20s, energetic, curious", "Male, late 20s, stylish, confident", "Male, early 30s, introspective, quiet strength", "Male, 40s, weathered, kind eyes", "Male, 50s, authoritative, reflective", "The Rebel", "The Conformist", "The Dreamer", "The Realist", "The Lover", "The Fighter", "The Thinker", "The Doer", "The Leader", "The Follower"],
            wardrobeLock: ["Casual neutral (shirt + jeans)", "Business attire (suit, tie, dress shirt)", "Vintage (cardigan + blouse, muted tones)", "Formal evening (dress, tuxedo)", "Streetwear (hoodie, sneakers)", "Minimalist modern (monochrome outfit)", "Rustic/countryside (wool sweater, boots)", "Cultural/traditional attire (kimono, kebaya, sari, etc.)", "70s bell bottoms", "80s shoulder pads", "90s grunge flannel", "60s mod mini-skirt", "50s poodle skirt", "40s trench coat", "30s bias-cut gown", "20s flapper dress", "Victorian corset", "Edwardian walking suit", "Regency empire waist dress"],
            hairMakeup: ["Hair: Shoulder-length, loose natural", "Hair: Long, wavy, styled", "Hair: Short, neat, side-part", "Hair: Bun / tied up", "Hair: Curly, voluminous", "Hair: Bald / shaved", "Makeup: Natural minimal", "Makeup: Bold (lipstick, eyeliner)", "Makeup: Matte finish", "Makeup: Vintage glam (red lips, soft curls)", "70s feathered hair", "80s big hair", "90s Rachel cut", "60s beehive", "50s pompadour", "40s victory rolls", "30s finger waves", "20s bob", "Victorian updo", "Edwardian Gibson Girl"],
            characterRelationship: ["Distant but caring", "Intimate but restrained", "Tense and confrontational", "Playful and lighthearted", "Professional and formal", "Secretive and guarded", "Melancholic and reflective", "Star-crossed lovers", "Buddy cops", "Rival gangs", " dysfunctional family", "Band of misfits", "Mentor and prodigy", "Master and slave", "King and jester", "Knight and dragon", "Alien and human", "Time traveler and native", "God and mortal", "Human and their dog"]
        }
    },
    special: {
        humanInShot: {
            fields: ['personRole', 'count', 'ethnicity', 'visiblePart', 'interaction', 'expression', 'styling'],
            fieldLabels: { personRole: 'Person Role', count: 'Count', ethnicity: 'Ethnicity/Skin Tone', visiblePart: 'Visible Part', interaction: 'Interaction', expression: 'Expression', styling: 'Styling' },
            options: {
                personRole: ['Hand model', 'Partial torso', 'Full model', 'Silhouette', 'Reflection', 'Shadow', 'Ghostly figure', 'Crowd', 'Audience', 'Team'],
                count: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10+ (a crowd)'],
                ethnicity: ["Latina/Latino medium", "Mixed heritage neutral", "Afro-Caribbean warm", "East Asian fair", "South Asian wheatish", "Caucasian light", "Indigenous American", "Pacific Islander", "Aboriginal Australian", "person of color"],
                visiblePart: ['hands only', 'hands + forearms', 'hands + torso', 'face + hands', 'Full body', 'legs and feet', 'back of the head', 'eyes only', 'lips only', 'profile silhouette'],
                interaction: ['holding product', 'using product', 'placing product', 'passing product', 'wearing product', 'pointing at product', 'looking at product', 'ignoring product', 'destroying product', 'creating product'],
                expression: ['neutral focus', 'gentle satisfaction', 'playful curiosity', 'luxurious calm', 'professional confidence', 'joyful surprise', 'intense concentration', 'serene peace', 'thoughtful contemplation', 'awe and wonder'],
                styling: ['manicured nails', 'natural hands', 'wearing gloves', 'sleeve of a business suit', 'cuff of a casual shirt', 'bare arms', 'wearing jewelry', 'tattoos visible', 'athletic wear', 'formal wear']
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
        if (field === 'styling') {
            initialHumanState[field] = { custom: '' };
        } else {
            initialHumanState[field] = { select: PROMPT_OPTIONS.special.humanInShot.options[field][0], custom: '' };
        }
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

function LockIcon(locked) {
    return `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">${locked ? `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />` : `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />`}</svg>`;
}

function Tooltip(text) {
    return `<span class="group relative ml-2"><span class="flex items-center justify-center w-4 h-4 text-xs text-gray-500 border border-gray-400 rounded-full cursor-help">?</span><span class="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-48 p-2 text-xs text-white bg-gray-800 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">${text}</span></span>`;
}

function SegmentedControl({ options, selected, id }) {
    return `<div id="${id}" class="flex p-1 bg-gray-100 rounded-lg">${options.map(({ value, label }) => `<button type="button" data-value="${value}" class="flex-1 py-2 px-1 text-sm font-semibold rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${selected === value ? 'bg-white text-gray-800 shadow-sm' : 'bg-transparent text-gray-500 hover:bg-gray-200'}">${label}</button>`).join('')}</div>`;
}

function FormField({ id, mode, fieldId, label, options, value, customValue, isLocked = false, description }) {
    const hasValue = customValue.trim() || value;
    const showWarning = isLocked && !hasValue;
    // Teks tooltip default jika deskripsi spesifik tidak diberikan
    const tooltipText = description || "Select a curated option or enter a custom value below.";
    
    return `
        <div class="mb-6">
            <div class="flex items-center justify-between mb-2">
                <label for="${id}-select" class="flex items-center text-sm font-semibold text-gray-700">
                    ${label}
                    ${Tooltip(tooltipText)} 
                </label>
                <button type="button" data-lock-mode="${mode}" data-lock-field="${fieldId}" class="lock-button p-1 rounded-full transition-colors ${isLocked ? 'text-blue-600 bg-blue-100' : 'text-gray-400 hover:bg-gray-200'}" title="Lock this value">
                    ${LockIcon(isLocked)}
                </button>
            </div>
            <select id="${id}-select" class="form-select w-full p-3 bg-gray-100 border border-gray-300 rounded-lg text-gray-800" ${isLocked ? 'disabled' : ''}>
                <option value="" disabled ${!value || customValue.trim() ? 'selected' : ''} hidden>Select an option</option>
                ${(options || []).map(opt => `<option value="${opt}" ${value === opt && !customValue.trim() ? 'selected' : ''}>${capitalize(opt)}</option>`).join('')}
            </select>
            <input type="text" id="${id}-text" value="${customValue}" placeholder="Custom text (optional)" class="form-custom-text w-full p-3 bg-gray-100 border border-gray-300 rounded-lg text-gray-800 mt-2" ${isLocked ? 'readonly' : ''}>
            ${showWarning ? `<p class="text-xs text-red-500 mt-1">Field is locked but has no value.</p>` : ''}
        </div>`;
}

function ToggleSwitch({ id, label, checked }) {
    return `
        <label for="${id}" class="flex items-center cursor-pointer">
            <span class="mr-3 text-sm font-semibold text-gray-700">${label}</span>
            <div class="relative">
                <input type="checkbox" id="${id}" class="sr-only toggle-switch" ${checked ? 'checked' : ''}>
                <div class="block w-12 h-6 rounded-full transition ${checked ? 'bg-blue-500' : 'bg-gray-300'}"></div>
                <div class="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition transform ${checked ? 'translate-x-6' : ''}"></div>
            </div>
        </label>`;
}

function OutputSection({ title, content }) {
    return `
        <div class="mb-6">
            <div class="flex justify-between items-center mb-2">
                <h3 class="text-lg font-semibold text-gray-800">${title}</h3>
                <button data-copy-content="${content.replace(/"/g, '&quot;')}" class="copy-button px-3 py-1 text-xs font-semibold text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300 transition">Copy</button>
            </div>
            <p class="p-4 bg-gray-100 rounded-lg text-sm text-gray-700 whitespace-pre-wrap font-mono">${content}</p>
        </div>`;
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
    if (humanState.enabled) {
        fieldsHTML = `
            <div class="mt-4 p-4 border border-gray-200 rounded-lg bg-gray-50 grid grid-cols-1 md:grid-cols-2 md:gap-x-8">
                ${config.fields.map(fieldId => {
                    if (fieldId === 'styling') {
                        const isLocked = lockedFields.product_human?.styling;
                        const customValue = humanState.styling?.custom || '';
                        return `
                            <div class="mb-6" key="human-styling">
                                <div class="flex items-center justify-between mb-2">
                                    <label for="human-styling-text" class="flex items-center text-sm font-semibold text-gray-700">Styling</label>
                                    <button type="button" data-lock-mode="product_human" data-lock-field="styling" class="lock-button p-1 rounded-full transition-colors ${isLocked ? 'text-blue-600 bg-blue-100' : 'text-gray-400 hover:bg-gray-200'}">
                                        ${LockIcon(isLocked)}
                                    </button>
                                </div>
                                <input type="text" id="human-styling-text" placeholder="e.g., minimalist silver rings" value="${customValue}" class="form-custom-text w-full p-3 bg-gray-100 border border-gray-300 rounded-lg" ${isLocked ? 'readonly' : ''}>
                            </div>`;
                    }
                    return FormField({
                        id: `human-${fieldId}`,
                        mode: 'product_human',
                        fieldId: fieldId,
                        label: config.fieldLabels[fieldId],
                        options: config.options[fieldId],
                        value: humanState[fieldId]?.select || '',
                        customValue: humanState[fieldId]?.custom || '',
                        isLocked: lockedFields.product_human?.[fieldId]
                    });
                }).join('')}
            </div>`;
    }
    return `
        <div class="mt-6 border-t pt-6">
            ${ToggleSwitch({id: 'human-in-shot-toggle', label: 'Human in Product Shot', checked: humanState.enabled})}
            ${fieldsHTML}
        </div>`;
}

function FilmFormExtras() {
    const { filmState } = state;
    return `
        <div class="mt-6 border-t pt-6 grid grid-cols-1 md:grid-cols-2 md:gap-x-8">
            <div>
                <label for="film-numScenes" class="text-sm font-semibold text-gray-700 mb-2 block">Number of Scenes</label>
                <select id="film-numScenes" class="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg">
                    <option value="1" ${filmState.numScenes === 1 ? 'selected' : ''}>1</option>
                    <option value="2" ${filmState.numScenes === 2 ? 'selected' : ''}>2</option>
                    <option value="3" ${filmState.numScenes === 3 ? 'selected' : ''}>3</option>
                </select>
            </div>
            <div class="flex items-end">
                ${ToggleSwitch({id: 'film-linkScenes-toggle', label: 'Link scenes for continuity', checked: filmState.linkScenes})}
            </div>
        </div>`;
}

function clearFormAndOutputs() {
    // 1. Simpan mode dan intensity yang sedang aktif saat ini
    const currentMode = state.mode;
    const currentIntensity = state.intensity;

    // 2. Panggil fungsi inisialisasi untuk me-reset semuanya ke kondisi awal
    //    Ini adalah cara paling efisien untuk membersihkan semua state seperti
    //    formState, lockedFields, humanState, dll.
    initializeState();

    // 3. Setelah semuanya bersih, kembalikan mode dan intensity yang tadi kita simpan
    state.mode = currentMode;
    state.intensity = currentIntensity;
    
    // 4. Panggil updateDefaults() lagi. Fungsi ini akan membaca mode dan intensity
    //    yang baru saja kita kembalikan, lalu mengisi form dengan nilai default
    //    yang sesuai.
    updateDefaults();

    // 5. Render ulang aplikasi untuk menampilkan form yang sudah bersih
    //    namun dengan mode dan intensity yang tetap sama.
    renderApp();
}

function renderApp() {
    const root = document.getElementById('root');
    if (!root) return;

    const { mode, intensity, formState, isLoading, outputs, lockedFields } = state;
    const modeConfig = PROMPT_OPTIONS[mode];
    if (!modeConfig) return console.error("Invalid mode selected:", mode);

    const fields = modeConfig.fields.filter(f => f !== 'customKey');
    const middleIndex = Math.ceil(fields.length / 2);
    const leftFields = fields.slice(0, middleIndex);
    const rightFields = fields.slice(middleIndex);

    const renderFields = (fieldList) =>
        fieldList.map(fieldId => FormField({
            id: `${mode}-${fieldId}`,
            mode,
            fieldId,
            label: modeConfig.fieldLabels[fieldId],
            options: modeConfig[intensity]?.[fieldId],
            value: formState[mode]?.[fieldId]?.select || '',
            customValue: formState[mode]?.[fieldId]?.custom || '',
            isLocked: lockedFields[mode]?.[fieldId],
            // BARIS INI DITAMBAHKAN UNTUK MENGAMBIL DESKRIPSI
            description: modeConfig.fieldDescriptions?.[fieldId]
        })).join('');

    let extrasHTML = '';
    if (mode === 'product') extrasHTML = ProductFormExtras();
    if (mode === 'film') extrasHTML = FilmFormExtras();

    let outputHTML = '';
    if (outputs) {
        if (outputs.length > 1) {
            outputHTML = SceneAccordion();
        } else if (outputs.length === 1) {
            const scene = outputs[0];
            outputHTML = `
                <div>
                    ${OutputSection({ title: "Text Prompt", content: scene.text })}
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                        ${OutputSection({ title: "Video Prompt (Long)", content: scene.videoLong })}
                        ${OutputSection({ title: "Video Prompt (Short)", content: scene.videoShort })}
                    </div>
                </div>`;
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

                <div class="mt-2">
                    <div class="mb-6">
                        <div class="flex items-center justify-between mb-2">
                            <label for="${mode}-customKey-text" class="flex items-center text-sm font-semibold text-gray-700">
                                Custom Key (Elemen Wajib)
                                ${Tooltip("Masukkan kata kunci utama (e.g., skateboard, fisheye, neon city) untuk memandu sugesti AI.")}
                            </label>
                            <button type="button" data-lock-mode="${mode}" data-lock-field="customKey" class="lock-button p-1 rounded-full transition-colors ${lockedFields[mode]?.customKey ? 'text-blue-600 bg-blue-100' : 'text-gray-400 hover:bg-gray-200'}" title="Lock this value">
                                ${LockIcon(lockedFields[mode]?.customKey)}
                            </button>
                        </div>
                        <textarea 
                            id="${mode}-customKey-text" 
                            rows="2"
                            placeholder="e.g., skateboard, fisheye, neon city at night" 
                            class="form-custom-text w-full p-3 bg-gray-100 border border-gray-300 rounded-lg text-gray-800"
                            ${lockedFields[mode]?.customKey ? 'readonly' : ''}
                        >${formState[mode]?.customKey?.custom || ''}</textarea>
                    </div>
                </div>

                ${extrasHTML}

                <div class="mt-10 pt-6 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <button id="suggest-btn" class="w-full py-3 px-4 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition text-sm disabled:opacity-50" ${isLoading.suggest ? 'disabled' : ''}>
                        ${isLoading.suggest ? 'Thinking...' : 'Suggest with AI ✨'}
                    </button>
                    <button id="generate-btn" class="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition text-sm disabled:opacity-50" ${isLoading.generate ? 'disabled' : ''}>
                        ${isLoading.generate ? 'Generating...' : 'Generate Prompts'}
                    </button>
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
    
    // === Tombol Aksi Utama ===
    document.getElementById('generate-btn')?.addEventListener('click', handleSubmit);
    document.getElementById('suggest-btn')?.addEventListener('click', handleAISuggest);
    document.getElementById('clear-btn')?.addEventListener('click', clearFormAndOutputs);

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
    const [modeOrPrefix, ...fieldIdParts] = id.split('-');
    const fieldId = fieldIdParts.join('-');

    let stateSlice;
    if (modeOrPrefix === 'human') {
        stateSlice = state.humanState;
    } else if (state.formState[modeOrPrefix]) {
        stateSlice = state.formState[modeOrPrefix];
    } else {
        return; // Tidak ada state slice yang cocok
    }

    if (!stateSlice[fieldId]) {
        stateSlice[fieldId] = { select: '', custom: '' };
    }

    if (target.classList.contains('form-select')) {
        // Logika saat dropdown diubah (tetap sama)
        stateSlice[fieldId].select = target.value;
        stateSlice[fieldId].custom = '';
        const textEl = document.getElementById(`${id}-text`);
        if(textEl) textEl.value = '';

    } else { // Logika saat custom text diubah
        const customValue = target.value;
        stateSlice[fieldId].custom = customValue;

        if (customValue.trim() === '') {
            // BARU: Jika teks custom dihapus, kembalikan dropdown ke default
            const { mode, intensity } = state;
            let defaultValue = '';

            // Dapatkan nilai default dari daftar opsi yang sesuai
            if (modeOrPrefix === 'human') {
                defaultValue = (PROMPT_OPTIONS.special.humanInShot.options[fieldId] || [])[0] || '';
            } else {
                defaultValue = (PROMPT_OPTIONS[mode]?.[intensity]?.[fieldId] || [])[0] || '';
            }
            
            // Perbarui state: set select ke default, custom sudah kosong
            stateSlice[fieldId].select = defaultValue;

            // Perbarui tampilan UI dropdown secara langsung
            const selectEl = document.getElementById(`${id}-select`);
            if (selectEl) {
                selectEl.value = defaultValue;
            }
        } else {
            // LAMA: Jika teks custom diisi, kosongkan pilihan dropdown
            stateSlice[fieldId].select = '';
            
            // Perbarui tampilan UI dropdown secara langsung
            const selectEl = document.getElementById(`${id}-select`);
            if (selectEl) {
                selectEl.value = '';
            }
        }
    }
}


function handleLockToggle(e) {
    const { lockMode, lockField } = e.currentTarget.dataset;
    const isLocking = !state.lockedFields[lockMode]?.[lockField];

    // Logika ini sekarang HANYA berjalan saat MENGUNCI.
    if (isLocking) {
        // Tentukan bagian state mana yang akan dimodifikasi
        let stateSlice;
        if (lockMode === 'product_human') {
            stateSlice = state.humanState;
        } else if (state.formState[lockMode]) {
            stateSlice = state.formState[lockMode];
        }

        // Jika ada nilai yang dipilih di dropdown, salin ke custom text
        if (stateSlice && stateSlice[lockField]) {
            const selectedValue = stateSlice[lockField].select;
            if (selectedValue) {
                stateSlice[lockField].custom = selectedValue;
                stateSlice[lockField].select = '';
            }
        }
    }
    // Saat isLocking bernilai false (membuka kunci), tidak ada logika yang dijalankan.
    // Ini memastikan nilai di 'custom text' tidak akan berubah sampai dihapus manual.

    // Terakhir, selalu ubah status kunci di state
    state.lockedFields[lockMode][lockField] = !state.lockedFields[lockMode][lockField];
    
    // Render ulang aplikasi untuk menampilkan perubahan
    renderApp();
}

function handleToggleChange(e) {
    const id = e.target.id;
    if (id === 'human-in-shot-toggle') {
        state.humanState.enabled = e.target.checked;
    } else if (id === 'film-linkScenes-toggle') {
        state.filmState.linkScenes = e.target.checked;
    }
    renderApp();
}

async function callGeminiAPI(prompt, generationConfig = {}) { // Ditambah parameter kedua
    try {
        const response = await fetch('/api/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            // Kirim prompt DAN generationConfig
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

function getFinalValue(fieldState) {
    // Pastikan fieldState tidak null atau undefined sebelum diakses
    if (!fieldState) return '';
    return (fieldState.custom || '').trim() || fieldState.select || '';
}

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

    const fieldsToExcludeForImage = [
        'actionVerb', 
        'motionEffect', 
        'editingStyle', 
        'soundDesignCue', 
        'pacing', 
        //'aspectRatio',
        'characterAnchor' // characterAnchor tetap dikecualikan seperti sebelumnya
    ];

    let parameterString = PROMPT_OPTIONS[mode].fields
        .filter(field => !fieldsToExcludeForImage.includes(field) && data[field]) // Filter out non-visual fields and empty values
        .map(field => `${PROMPT_OPTIONS[mode].fieldLabels[field]}: ${data[field]}`)
        .join(', ');
    // --- AKHIR PERUBAHAN ---

    if (data.humanInShot) {
        const humanParams = Object.entries(data.humanInShot)
            .filter(([, value]) => value)
            .map(([key, value]) => `${PROMPT_OPTIONS.special.humanInShot.fieldLabels[key]}: ${value}`).join(', ');
        if(humanParams) {
             parameterString += `. Human in shot details: ${humanParams}`;
        }
    }

    const cleanAIText = (rawText) => {
        if (!rawText) return '';
        let cleaned = rawText.replace(/^(Here's|Certainly|What an|Here is|Sure, here's).*?(:|\n)/i, '');
        cleaned = cleaned.trim().replace(/^"|"$/g, '').replace(/```json|```/g, '').trim();
        return cleaned;
    };

    let textPrompts = [];

    if (data.mode === 'film') {
        const characterAnchorValue = getFinalValue(formState.film.characterAnchor);
        const characterPrefix = characterAnchorValue ? `Main character is: ${characterAnchorValue}. ` : '';
        const baseInstruction = `You are a prompt engineer with master in cinematic concept artist. Your task is to synthesize the provided parameters into a powerful text-to-image prompt. Return ONLY the prompt paragraph itself, without any introductory phrases, explanations, or quotation marks.`;

        if (filmState.numScenes > 1 && filmState.linkScenes) {
            const finalPrompt = `${characterPrefix}${baseInstruction}\n\nBased on these parameters: ${parameterString}, write ${filmState.numScenes} connected text-to-image prompts that form a coherent sequence. Separate each prompt with "---SCENE BREAK---".`;
            let rawText = await callGeminiAPI(finalPrompt);
            if (rawText) {
                rawText = rawText.replace(/^Here.*?:\s*\n*/i, '').trim();
                textPrompts = rawText.split('---SCENE BREAK---').map(s => s.trim().replace(/^\s*\**\s*(?:Prompt|Scene)\s*\d+\s*:?\s*\**\s*/i, '').trim()).filter(Boolean);
            }
        } else {
             const sceneCount = filmState.numScenes;
             const promptsPromises = Array.from({ length: sceneCount }, (_, i) => {
                 const sceneInstruction = sceneCount > 1 ? ` This is scene ${i+1} of ${sceneCount}.` : '';
                 const finalPrompt = `${characterPrefix}${baseInstruction}${sceneInstruction}\n\nParameters: ${parameterString}.`;
                 return callGeminiAPI(finalPrompt);
             });
             const results = await Promise.all(promptsPromises);
             textPrompts = results.map(rawText => cleanAIText(rawText)).filter(Boolean);
        }
    } else {
        const finalPrompt = `You are a prompt engineer with expert art director. Synthesize the provided parameters into a single, powerful text-to-image prompt. Return ONLY the prompt paragraph itself, without any introductory phrases, explanations, or quotation marks. Parameters: ${parameterString}.`;
        let rawText = await callGeminiAPI(finalPrompt);
        if (rawText) {
            textPrompts = [cleanAIText(rawText)];
        }
    }

    if (textPrompts.length > 0) {
        state.outputs = textPrompts.map(imagePrompt => {
            const videoPrompts = generateVideoPrompts(data, imagePrompt); // Panggil fungsi yang akan kita perbaiki selanjutnya
            return { text: imagePrompt, videoLong: videoPrompts.long, videoShort: videoPrompts.short };
        });
    }

    state.isLoading.generate = false;
    renderApp();
}

async function handleAISuggest() {
    state.isLoading.suggest = true;
    renderApp();

    try {
        const { mode, formState, lockedFields, humanState, intensity } = state;
        const labelToFieldIdMap = {};
        const fieldIdToModeMap = {};

        // Bagian ini tidak perlu diubah
        PROMPT_OPTIONS[mode].fields.forEach(fieldId => {
            const label = PROMPT_OPTIONS[mode].fieldLabels[fieldId];
            labelToFieldIdMap[label] = fieldId;
            fieldIdToModeMap[fieldId] = mode;
        });

        const lockedContext = {};
        const unlockedFieldsLabels = [];

        PROMPT_OPTIONS[mode].fields.forEach(fieldId => {
            if (fieldId === 'customKey') return;
            const label = PROMPT_OPTIONS[mode].fieldLabels[fieldId];
            if (lockedFields[mode]?.[fieldId]) {
                const value = getFinalValue(formState[mode][fieldId]);
                if (value) lockedContext[label] = value;
            } else {
                unlockedFieldsLabels.push(label);
            }
        });
        
        let unlockedHumanFieldsLabels = [];
        if (mode === 'product' && humanState.enabled) {
            const humanConfig = PROMPT_OPTIONS.special.humanInShot;
            lockedContext['Human in Shot Details'] = {};
            humanConfig.fields.forEach(fieldId => {
                const label = humanConfig.fieldLabels[fieldId];
                labelToFieldIdMap[label] = fieldId;
                fieldIdToModeMap[fieldId] = 'product_human';
                if (lockedFields.product_human?.[fieldId]) {
                    const value = getFinalValue(humanState[fieldId]);
                    if (value) lockedContext['Human in Shot Details'][label] = value;
                } else {
                    unlockedHumanFieldsLabels.push(label);
                }
            });
            if (Object.keys(lockedContext['Human in Shot Details']).length === 0) {
                delete lockedContext['Human in Shot Details'];
            }
        }
        
        const allUnlockedLabels = [...unlockedFieldsLabels, ...unlockedHumanFieldsLabels];
        
        if (allUnlockedLabels.length === 0) {
            alert("All fields are locked. Please unlock some fields to get AI suggestions.");
            state.isLoading.suggest = false;
            renderApp();
            return;
        }

        const customKeyValue = getFinalValue(formState[mode].customKey);
        let customKeyInstruction = '';
        if (customKeyValue) {
            customKeyInstruction = `\nThe user's core idea is: "${customKeyValue}". All suggestions must be coherent with this idea.`;
        }
        
        const styleGuides = {
            conservative: "The style must be timeless, elegant, and professional. Prioritize subtlety and universally accepted aesthetics.",
            balanced: "The main task in this mode is to create visuals that are **aspirational yet grounded** and have strong commercial appeal. Think of a major fashion magazine cover (not avant-garde), a premium brand lookbook, or a lifestyle ad. **Balance is key:** between artistic and commercial, between unique and relatable. The end result should always feel beautiful, modern, and desirable to a wide audience.",
            experimental: "The style must be avant-garde, surreal, and rule-breaking. Aggressively avoid normal portraits. The goal is fine art.",
            vintage: "The style must authentically evoke a specific past era, like analog film or faded Polaroids."
        };

        const styleInstruction = styleGuides[intensity];

        // --- SEDIKIT MODIFIKASI PADA PROMPT ---
        const prompt = `
            You are a world-class creative art director and prompt engineer with a specific creative vision.
            Your main task is to provide creative suggestions for several unlocked visual parameters.
            
            // --- MANDATORY STYLE GUIDE ---
            You MUST operate strictly within the following creative intensity mode: **${intensity.toUpperCase()}**.
            Here is the definition for this mode: "${styleInstruction}"
            This is your PRIMARY COMMAND and it overrides all other inputs if there is a conflict.

            // =================================================================
            // PENTING: ATURAN PRIORITAS & PENERJEMAHAN KREATIF
            // =================================================================
            // Jika 'Creative Intensity' adalah 'BALANCED', peran Anda berubah menjadi PENERJEMAH.
            // Jika pengguna memberikan referensi yang cenderung 'Experimental' (misal: 'Tim Walker', 'sureal', 'avant-garde'), 
            // tugas Anda BUKAN untuk meniru gaya itu secara mentah-mentah.
            //
            // Tugas Anda adalah MENERJEMAHKAN esensi dari referensi tersebut ke dalam dunia 'Balanced'.
            // Tanyakan pada diri Anda: "Bagaimana cara mengambil *mood* aneh dari Tim Walker tapi membuatnya cocok untuk kampanye Zara?"
            // atau "Bagaimana saya bisa menangkap konsep 'sureal' tapi menjaganya tetap indah dan aspirasional, bukan meresahkan?"
            //
            // CONTOH PENERJEMAHAN:
            // Referensi Experimental: 'Model dengan kepala terbuat dari sangkar burung.'
            // - JANGAN SARANKAN: 'Styling: Kepala sangkar burung.' (Ini meniru, terlalu aneh untuk Balanced).
            // - SARANKANLAH: 'Styling: Model mengenakan anting berbentuk sangkar burung emas kecil' atau 'Background: Bayangan model membentuk siluet sangkar burung.' (Ini menerjemahkan, menjadi simbolis, indah, dan komersial).
            //
            // PRIORITASKAN SELALU HASIL AKHIR YANG INDAH, MUDAH DIPAHAMI, DAN ASPIRASIONAL.
            // =================================================================

            ${customKeyInstruction}

            Given the following locked-in parameters (the existing creative direction):
            ${JSON.stringify(lockedContext)}

            Now, provide highly creative and coherent suggestions for the following unlocked fields. Ensure every suggestion PERFECTLY fits the **${intensity.toUpperCase()}** style guide, especially the translation rule if applicable.

            Return your answer as a simple key-value list, with each item on a new line (e.g., "Key: Value"). Do not add any other text, explanation, or markdown formatting.

            Fields to suggest:
            ${allUnlockedLabels.join('\n')}
        `;

        // --- PERUBAHAN UTAMA ADA DI SINI ---
        // Panggil API dengan prompt baru DAN temperature tinggi
        const resultText = await callGeminiAPI(prompt, { temperature: 0.7 });

        // Bagian ini ke bawah tidak perlu diubah
        if (resultText) {
            const lines = resultText.split('\n');
            lines.forEach(line => {
                const parts = line.split(':');
                if (parts.length >= 2) {
                    const label = parts[0].trim().replace(/\*+/g, '');
                    const value = parts.slice(1).join(':').trim();
                    const fieldId = labelToFieldIdMap[label];
                    const fieldMode = fieldIdToModeMap[fieldId];
                    
                    if (fieldId && fieldMode) {
                        let stateSlice;
                        if (fieldMode === 'product_human') {
                            stateSlice = state.humanState;
                        } else {
                            stateSlice = state.formState[fieldMode];
                        }
                        if (stateSlice && stateSlice[fieldId]) {
                            stateSlice[fieldId].custom = value;
                            stateSlice[fieldId].select = '';
                        }
                    }
                }
            });
            renderApp();
        }
    } catch (e) {
        console.error("An error occurred during AI suggestion:", e);
        alert("Terjadi kesalahan saat memproses sugesti AI.");
    } finally {
        state.isLoading.suggest = false;
        renderApp();
    }
}


function generateVideoPrompts(data, imagePrompt) {
    let long = '', short = '';
    
    // Ambil semua data relevan, termasuk semua field baru
    const { 
        mode,
        mainSubject, characters,
        actionVerb, motionEffect,
        cameraAngle, cameraMovement, shotType,
        lighting, mood, atmosphere,
        pacing, editingStyle, lensEffects, soundDesignCue,
        composition, extraElements,
        aspectRatio
    } = data;

    // Tentukan elemen-elemen inti
    const subject = mainSubject || characters || "The subject";
    const primaryAction = actionVerb || motionEffect || `shows an expression of "${data.expression || 'neutral'}"`;
    const cameraInstruction = cameraMovement || shotType || cameraAngle || 'a static shot';
    const sceneAtmosphere = atmosphere || mood || 'cinematic';

    if (mode === 'model' || mode === 'film') {
        // --- PROMPT VIDEO PANJANG (LONG) ---
        let longParts = [
            `Create a short, cinematic video based on the visual style of "${imagePrompt}".`,
            `The scene opens focusing on ${subject}. The primary action is: the subject **${primaryAction}**.`,
            `The camera work should be a **${cameraInstruction}**.`,
            `Utilize **${lighting || 'natural lighting'}** to establish a **${sceneAtmosphere}** atmosphere.`,
        ];
        // Tambahkan detail sinematik jika ada (khusus mode film)
        if (pacing) longParts.push(`The pacing is **${pacing}**.`);
        if (editingStyle) longParts.push(`The editing style should feel like **${editingStyle}**.`);
        if (lensEffects) longParts.push(`Incorporate lens effects like **${lensEffects}**.`);
        if (soundDesignCue) longParts.push(`The mood is enhanced by sound design suggesting **${soundDesignCue}**.`);
        if (aspectRatio) longParts.push(`Render in a **${aspectRatio}** aspect ratio.`);
        long = longParts.join(' ');

        // --- PROMPT VIDEO PENDEK (SHORT) ---
        let shortParts = [
            `Video of ${subject} who **${primaryAction}**.`,
            `Camera: **${cameraInstruction}**.`,
            `Atmosphere: **${sceneAtmosphere}**.`,
        ];
        if (pacing) shortParts.push(`Pacing: **${pacing}**.`);
        short = shortParts.join(' ');

    } else if (mode === 'product') {
        const productAction = motionEffect || extraElements || 'subtle highlights and reflections';

        // --- PROMPT VIDEO PANJANG (LONG) ---
        long = `Animate the product shot from "${imagePrompt}". The camera move is a **${composition || 'slow push-in'}**. ` +
               `Introduce dynamic motion effects like **${productAction}** to bring the product to life. ` +
               `The lighting is **${lighting || 'clean studio light'}**, maintaining a **${mood || 'premium'}** feel.`;
        
        // --- PROMPT VIDEO PENDEK (SHORT) ---
        short = `Animate product shot with **${productAction}**. Camera: **${composition || 'slow push-in'}**. Mood: **${mood || 'premium'}**.`;
    }

    // Membersihkan spasi ekstra dari hasil
    long = long.replace(/\s\s+/g, ' ').trim();
    short = short.replace(/\s\s+/g, ' ').trim();

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
