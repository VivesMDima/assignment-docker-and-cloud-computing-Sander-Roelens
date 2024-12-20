const anomalies =  [
    {
        id: 1,
        title: "Cyborg",
        x: 5,
        y: 6,
        world: "earth",
        description: "A Cyborg blends human and machine elements, emphasizing cybernetic enhancement for improved functionality. This depiction highlights advanced robotics, artificial intelligence, and biomechanical integration aimed at surpassing biological limitations."
, images: ['https://imgcdn.stablediffusionweb.com/2024/10/30/dd513ee6-587e-4801-8ec7-a6352b79523b.jpg']
    },
    {
        id: 2,
        title: "Kameleon",
        x: 5456,
        y: 65,
        world: "earth",
        description: "The 'Kameleon' showcases vibrant patterns and hues reminiscent of a shifting chameleon’s skin, symbolizing adaptability and transformation. Its visual palette is rich in color gradients, suggesting continuous evolution and metamorphic potential in both biological and abstract contexts."
, images: ['https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg']
    },
    {
        id: 3,
        title: "Space Anomaly Portal",
        x: -65,
        y: 66,
        world: "earth",
        description: "This surreal portal represents a gateway to unknown dimensions, exhibiting holographic distortions and energy patterns. It embodies the concept of space-time anomalies, where physics is warped, enabling access to alternate realities or distant reaches of the cosmos."
, images: ['https://img.freepik.com/premium-photo/20000bc-holographic-anomaly-portal-slice_492154-2537.jpg']
    },
    {
        id: 4,
        title: "Metal Sphere",
        x: 45,
        y: -26,
        world: "mars",
        description: "The Metal Sphere appears as a pristine, reflective object, defying conventional understanding of material properties in space. It hints at advanced technology or extraterrestrial artifacts, suggesting a role as an enigmatic probe or energy containment unit."
, images: ['https://static.wikia.nocookie.net/nomanssky_gamepedia/images/d/df/Ano_space.jpg']
    },
    {
        id: 5,
        title: "Space Cloud",
        x: 120,
        y: 310,
        world: "mars",
        description: "The Space Cloud is a vivid representation of interstellar phenomena, resembling a dimensional rift or gateway. It evokes the idea of cosmic turbulence, with swirling gases and particles marking the boundary of another universe or temporal plane."
, images: ['https://thumbs.dreamstime.com/z/space-anomaly-door-to-another-dimension-time-space-anomaly-door-to-another-dimension-time-332889005.jpg?ct=jpeg']
    },
    {
        id: 6,
        title: "Red Planet Cyborgs",
        x: -450,
        y: 890,
        world: "venus",
        description: "Red Planet Cyborgs symbolize the fusion of advanced robotics and extraterrestrial adaptation. These biomechanical entities reflect technological evolution in a Martian environment, illustrating the potential for sentient machines to thrive in alien worlds."
, images: ['https://imgcdn.stablediffusionweb.com/2024/10/29/e57576bd-dab6-42f6-9719-4285b8d13f80.jpg']
    },
    {
        id: 7,
        title: "Sphere Lightning",
        x: 70,
        y: -50,
        world: "venus",
        description: "Sphere Lightning is an abstract depiction of high-energy phenomena, with dynamic electric discharges surrounding a central point. It represents the interplay of physics and topology, such as plasma behavior in space or the manipulation of energy fields."
, images: ['https://thumbs.dreamstime.com/z/space-anomaly-distortion-fabric-d-rendering-topological-grids-abstract-elements-subject-education-science-modern-200635004.jpg?ct=jpeg']
    },
    {
        id: 8,
        title: "Eighth anomaly",
        x: -120,
        y: 45,
        world: "earth",
        description: "An anomaly is an unusual or unexpected phenomenon occurring in a specific location, often marked by distinct features that set it apart from its surroundings. \nThese anomalies can vary widely in nature, encompassing unexplained structures, irregular patterns, or significant deviations from expected environmental norms. \nEach anomaly is characterized by its unique coordinates, typically represented by an 'x' and 'y' position, and is associated with a particular world or environment, such as a planet or celestial body. \nAnomalies often invite exploration and investigation due to their mysterious origins and potential insights into the environment or history of the world they inhabit. \nThey may be captured visually through imagery, providing observers with a glimpse into their peculiar characteristics. \nWhether natural or artificial in origin, anomalies remain key subjects of curiosity, serving as focal points for research, storytelling, and discovery."
, images: ['https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg']
    },
    {
        id: 9,
        title: "Saturn ring gate",
        x: 300,
        y: -800,
        world: "saturn",
        description: "The Saturn Ring Gate suggests a celestial portal formed by the iconic rings of Saturn. It implies the use of natural cosmic structures as advanced travel mechanisms, blending astrophysics and speculative engineering for interstellar exploration."
, images: ['https://i.redd.it/8lox187wozyc1.jpeg']
    },
    {
        id: 10,
        title: "Renmag Sphere",
        x: 12,
        y: 450,
        world: "jupiter",
        description: "The Renmag Sphere is a mysterious, luminescent artifact, exuding an aura of alien craftsmanship. Its intricate surface patterns and glowing energy core hint at its role in data storage, energy generation, or intergalactic communication."
, images: ['http://i.imgur.com/vxAHa9G.jpg']
    },
    {
        id: 11,
        title: "Green Borg Memory",
        x: -345,
        y: -600,
        world: "saturn",
        description: "Green Borg Memory conveys the essence of collective intelligence, depicted as an energy matrix interwoven with bio-digital elements. It explores the themes of hive mind networks, memory preservation, and the technological evolution of synthetic organisms."
, images: ['https://media.sciencephoto.com/image/f0291765/800wm/F0291765-Anomaly_in_space,_abstract_illustration.jpg']
    },
    {
        id: 12,
        title: "Blue Wave Lightning",
        x: 89,
        y: -20,
        world: "saturn",
        description: "Blue Wave Lightning illustrates a stunning spatial anomaly, characterized by undulating energy waves and electrified currents. It symbolizes chaotic yet beautiful energy distributions, often associated with black holes, quasars, or space-time rifts."
, images: ['https://media.sciencephoto.com/image/f0291765/800wm/F0291765-Anomaly_in_space,_abstract_illustration.jpg']
    },
    {
        id: 13,
        title: "Horror House",
        x: 70,
        y: 600,
        world: "neptune",
        description: "The Horror House captures an eerie, desolate environment, where nature and decay intertwine. It evokes themes of psychological unease and the supernatural, blending gothic architecture with hauntingly mysterious surroundings."
, images: ['https://img.freepik.com/premium-photo/horror-creepy-scary-nature-environment_492154-1538.jpg']
    },
    {
        id: 14,
        title: "Travel Space Portal",
        x: -150,
        y: -90,
        world: "neptune",
        description: "The Travel Space Portal is a vivid portrayal of futuristic space travel, with dynamic energy loops and a glowing gateway. It signifies breakthroughs in propulsion and dimensional traversal, enabling humanity to explore vast cosmic frontiers."
, images: ['https://img.freepik.com/premium-photo/abstract-innovation-space-travel-successful-business-future-disruption-strategy-time-space-travel-portal-gateway-3d-rendering_607202-282.jpg']
    },
    {
        id: 15,
        title: "Fifteenth anomaly",
        x: 200,
        y: 100,
        world: "pluto",
        description: "An anomaly is an unusual or unexpected phenomenon occurring in a specific location, often marked by distinct features that set it apart from its surroundings. \nThese anomalies can vary widely in nature, encompassing unexplained structures, irregular patterns, or significant deviations from expected environmental norms. \nEach anomaly is characterized by its unique coordinates, typically represented by an 'x' and 'y' position, and is associated with a particular world or environment, such as a planet or celestial body. \nAnomalies often invite exploration and investigation due to their mysterious origins and potential insights into the environment or history of the world they inhabit. \nThey may be captured visually through imagery, providing observers with a glimpse into their peculiar characteristics. \nWhether natural or artificial in origin, anomalies remain key subjects of curiosity, serving as focal points for research, storytelling, and discovery."
, images: ['https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg']
    },
    {
        id: 16,
        title: "Sixteenth anomaly",
        x: 500,
        y: -300,
        world: "pluto",
        description: "An anomaly is an unusual or unexpected phenomenon occurring in a specific location, often marked by distinct features that set it apart from its surroundings. \nThese anomalies can vary widely in nature, encompassing unexplained structures, irregular patterns, or significant deviations from expected environmental norms. \nEach anomaly is characterized by its unique coordinates, typically represented by an 'x' and 'y' position, and is associated with a particular world or environment, such as a planet or celestial body. \nAnomalies often invite exploration and investigation due to their mysterious origins and potential insights into the environment or history of the world they inhabit. \nThey may be captured visually through imagery, providing observers with a glimpse into their peculiar characteristics. \nWhether natural or artificial in origin, anomalies remain key subjects of curiosity, serving as focal points for research, storytelling, and discovery."
, images: ['https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg']
    },
    {
        id: 17,
        title: "Seventeenth anomaly",
        x: -70,
        y: 800,
        world: "earth",
        description: "An anomaly is an unusual or unexpected phenomenon occurring in a specific location, often marked by distinct features that set it apart from its surroundings. \nThese anomalies can vary widely in nature, encompassing unexplained structures, irregular patterns, or significant deviations from expected environmental norms. \nEach anomaly is characterized by its unique coordinates, typically represented by an 'x' and 'y' position, and is associated with a particular world or environment, such as a planet or celestial body. \nAnomalies often invite exploration and investigation due to their mysterious origins and potential insights into the environment or history of the world they inhabit. \nThey may be captured visually through imagery, providing observers with a glimpse into their peculiar characteristics. \nWhether natural or artificial in origin, anomalies remain key subjects of curiosity, serving as focal points for research, storytelling, and discovery."
, images: ['https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg']
    },
    {
        id: 18,
        title: "Eighteenth anomaly",
        x: 60,
        y: 300,
        world: "mars",
        description: "An anomaly is an unusual or unexpected phenomenon occurring in a specific location, often marked by distinct features that set it apart from its surroundings. \nThese anomalies can vary widely in nature, encompassing unexplained structures, irregular patterns, or significant deviations from expected environmental norms. \nEach anomaly is characterized by its unique coordinates, typically represented by an 'x' and 'y' position, and is associated with a particular world or environment, such as a planet or celestial body. \nAnomalies often invite exploration and investigation due to their mysterious origins and potential insights into the environment or history of the world they inhabit. \nThey may be captured visually through imagery, providing observers with a glimpse into their peculiar characteristics. \nWhether natural or artificial in origin, anomalies remain key subjects of curiosity, serving as focal points for research, storytelling, and discovery."
, images: ['https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg']
    },
    {
        id: 19,
        title: "Nineteenth anomaly",
        x: -800,
        y: -120,
        world: "venus",
        description: "An anomaly is an unusual or unexpected phenomenon occurring in a specific location, often marked by distinct features that set it apart from its surroundings. \nThese anomalies can vary widely in nature, encompassing unexplained structures, irregular patterns, or significant deviations from expected environmental norms. \nEach anomaly is characterized by its unique coordinates, typically represented by an 'x' and 'y' position, and is associated with a particular world or environment, such as a planet or celestial body. \nAnomalies often invite exploration and investigation due to their mysterious origins and potential insights into the environment or history of the world they inhabit. \nThey may be captured visually through imagery, providing observers with a glimpse into their peculiar characteristics. \nWhether natural or artificial in origin, anomalies remain key subjects of curiosity, serving as focal points for research, storytelling, and discovery."
, images: ['https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg']
    },
    {
        id: 20,
        title: "Twentieth anomaly",
        x: 100,
        y: 700,
        world: "jupiter",
        description: "An anomaly is an unusual or unexpected phenomenon occurring in a specific location, often marked by distinct features that set it apart from its surroundings. \nThese anomalies can vary widely in nature, encompassing unexplained structures, irregular patterns, or significant deviations from expected environmental norms. \nEach anomaly is characterized by its unique coordinates, typically represented by an 'x' and 'y' position, and is associated with a particular world or environment, such as a planet or celestial body. \nAnomalies often invite exploration and investigation due to their mysterious origins and potential insights into the environment or history of the world they inhabit. \nThey may be captured visually through imagery, providing observers with a glimpse into their peculiar characteristics. \nWhether natural or artificial in origin, anomalies remain key subjects of curiosity, serving as focal points for research, storytelling, and discovery."
, images: ['https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg']
    },
    {
        id: 21,
        title: "TwentyFirst anomaly",
        x: -300,
        y: 400,
        world: "saturn",
        description: "An anomaly is an unusual or unexpected phenomenon occurring in a specific location, often marked by distinct features that set it apart from its surroundings. \nThese anomalies can vary widely in nature, encompassing unexplained structures, irregular patterns, or significant deviations from expected environmental norms. \nEach anomaly is characterized by its unique coordinates, typically represented by an 'x' and 'y' position, and is associated with a particular world or environment, such as a planet or celestial body. \nAnomalies often invite exploration and investigation due to their mysterious origins and potential insights into the environment or history of the world they inhabit. \nThey may be captured visually through imagery, providing observers with a glimpse into their peculiar characteristics. \nWhether natural or artificial in origin, anomalies remain key subjects of curiosity, serving as focal points for research, storytelling, and discovery."
, images: ['https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg']
    },
    {
        id: 22,
        title: "TwentySecond anomaly",
        x: 250,
        y: -250,
        world: "neptune",
        description: "An anomaly is an unusual or unexpected phenomenon occurring in a specific location, often marked by distinct features that set it apart from its surroundings. \nThese anomalies can vary widely in nature, encompassing unexplained structures, irregular patterns, or significant deviations from expected environmental norms. \nEach anomaly is characterized by its unique coordinates, typically represented by an 'x' and 'y' position, and is associated with a particular world or environment, such as a planet or celestial body. \nAnomalies often invite exploration and investigation due to their mysterious origins and potential insights into the environment or history of the world they inhabit. \nThey may be captured visually through imagery, providing observers with a glimpse into their peculiar characteristics. \nWhether natural or artificial in origin, anomalies remain key subjects of curiosity, serving as focal points for research, storytelling, and discovery."
, images: ['https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg']
    },
    {
        id: 23,
        title: "TwentyThird anomaly",
        x: -500,
        y: 50,
        world: "pluto",
        description: "An anomaly is an unusual or unexpected phenomenon occurring in a specific location, often marked by distinct features that set it apart from its surroundings. \nThese anomalies can vary widely in nature, encompassing unexplained structures, irregular patterns, or significant deviations from expected environmental norms. \nEach anomaly is characterized by its unique coordinates, typically represented by an 'x' and 'y' position, and is associated with a particular world or environment, such as a planet or celestial body. \nAnomalies often invite exploration and investigation due to their mysterious origins and potential insights into the environment or history of the world they inhabit. \nThey may be captured visually through imagery, providing observers with a glimpse into their peculiar characteristics. \nWhether natural or artificial in origin, anomalies remain key subjects of curiosity, serving as focal points for research, storytelling, and discovery."
, images: ['https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg']
    },
    {
        id: 24,
        title: "TwentyFourth anomaly",
        x: 300,
        y: -450,
        world: "earth",
        description: "An anomaly is an unusual or unexpected phenomenon occurring in a specific location, often marked by distinct features that set it apart from its surroundings. \nThese anomalies can vary widely in nature, encompassing unexplained structures, irregular patterns, or significant deviations from expected environmental norms. \nEach anomaly is characterized by its unique coordinates, typically represented by an 'x' and 'y' position, and is associated with a particular world or environment, such as a planet or celestial body. \nAnomalies often invite exploration and investigation due to their mysterious origins and potential insights into the environment or history of the world they inhabit. \nThey may be captured visually through imagery, providing observers with a glimpse into their peculiar characteristics. \nWhether natural or artificial in origin, anomalies remain key subjects of curiosity, serving as focal points for research, storytelling, and discovery."
, images: ['https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg']
    },
    {
        id: 25,
        title: "TwentyFifth anomaly",
        x: 90,
        y: 320,
        world: "mars",
        description: "An anomaly is an unusual or unexpected phenomenon occurring in a specific location, often marked by distinct features that set it apart from its surroundings. \nThese anomalies can vary widely in nature, encompassing unexplained structures, irregular patterns, or significant deviations from expected environmental norms. \nEach anomaly is characterized by its unique coordinates, typically represented by an 'x' and 'y' position, and is associated with a particular world or environment, such as a planet or celestial body. \nAnomalies often invite exploration and investigation due to their mysterious origins and potential insights into the environment or history of the world they inhabit. \nThey may be captured visually through imagery, providing observers with a glimpse into their peculiar characteristics. \nWhether natural or artificial in origin, anomalies remain key subjects of curiosity, serving as focal points for research, storytelling, and discovery."
, images: ['https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg']
    },
    {
        id: 26,
        title: "TwentySixth anomaly",
        x: -100,
        y: 500,
        world: "venus",
        description: "An anomaly is an unusual or unexpected phenomenon occurring in a specific location, often marked by distinct features that set it apart from its surroundings. \nThese anomalies can vary widely in nature, encompassing unexplained structures, irregular patterns, or significant deviations from expected environmental norms. \nEach anomaly is characterized by its unique coordinates, typically represented by an 'x' and 'y' position, and is associated with a particular world or environment, such as a planet or celestial body. \nAnomalies often invite exploration and investigation due to their mysterious origins and potential insights into the environment or history of the world they inhabit. \nThey may be captured visually through imagery, providing observers with a glimpse into their peculiar characteristics. \nWhether natural or artificial in origin, anomalies remain key subjects of curiosity, serving as focal points for research, storytelling, and discovery."
, images: ['https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg']
    },
    {
        id: 27,
        title: "TwentySeventh anomaly",
        x: 600,
        y: -50,
        world: "jupiter",
        description: "An anomaly is an unusual or unexpected phenomenon occurring in a specific location, often marked by distinct features that set it apart from its surroundings. \nThese anomalies can vary widely in nature, encompassing unexplained structures, irregular patterns, or significant deviations from expected environmental norms. \nEach anomaly is characterized by its unique coordinates, typically represented by an 'x' and 'y' position, and is associated with a particular world or environment, such as a planet or celestial body. \nAnomalies often invite exploration and investigation due to their mysterious origins and potential insights into the environment or history of the world they inhabit. \nThey may be captured visually through imagery, providing observers with a glimpse into their peculiar characteristics. \nWhether natural or artificial in origin, anomalies remain key subjects of curiosity, serving as focal points for research, storytelling, and discovery."
, images: ['https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg']
    },
    {
        id: 28,
        title: "TwentyEighth anomaly",
        x: -150,
        y: -500,
        world: "saturn",
        description: "An anomaly is an unusual or unexpected phenomenon occurring in a specific location, often marked by distinct features that set it apart from its surroundings. \nThese anomalies can vary widely in nature, encompassing unexplained structures, irregular patterns, or significant deviations from expected environmental norms. \nEach anomaly is characterized by its unique coordinates, typically represented by an 'x' and 'y' position, and is associated with a particular world or environment, such as a planet or celestial body. \nAnomalies often invite exploration and investigation due to their mysterious origins and potential insights into the environment or history of the world they inhabit. \nThey may be captured visually through imagery, providing observers with a glimpse into their peculiar characteristics. \nWhether natural or artificial in origin, anomalies remain key subjects of curiosity, serving as focal points for research, storytelling, and discovery."
, images: ['https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg']
    },
    {
        id: 29,
        title: "TwentyNinth anomaly",
        x: 200,
        y: 150,
        world: "neptune",
        description: "An anomaly is an unusual or unexpected phenomenon occurring in a specific location, often marked by distinct features that set it apart from its surroundings. \nThese anomalies can vary widely in nature, encompassing unexplained structures, irregular patterns, or significant deviations from expected environmental norms. \nEach anomaly is characterized by its unique coordinates, typically represented by an 'x' and 'y' position, and is associated with a particular world or environment, such as a planet or celestial body. \nAnomalies often invite exploration and investigation due to their mysterious origins and potential insights into the environment or history of the world they inhabit. \nThey may be captured visually through imagery, providing observers with a glimpse into their peculiar characteristics. \nWhether natural or artificial in origin, anomalies remain key subjects of curiosity, serving as focal points for research, storytelling, and discovery."
, images: ['https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg']
    },
    {
        id: 30,
        title: "Thirtieth anomaly",
        x: -200,
        y: 300,
        world: "pluto",
        description: "An anomaly is an unusual or unexpected phenomenon occurring in a specific location, often marked by distinct features that set it apart from its surroundings. \nThese anomalies can vary widely in nature, encompassing unexplained structures, irregular patterns, or significant deviations from expected environmental norms. \nEach anomaly is characterized by its unique coordinates, typically represented by an 'x' and 'y' position, and is associated with a particular world or environment, such as a planet or celestial body. \nAnomalies often invite exploration and investigation due to their mysterious origins and potential insights into the environment or history of the world they inhabit. \nThey may be captured visually through imagery, providing observers with a glimpse into their peculiar characteristics. \nWhether natural or artificial in origin, anomalies remain key subjects of curiosity, serving as focal points for research, storytelling, and discovery."
, images: ['https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg']
    },
    {
        id: 31,
        title: "ThirtyFirst anomaly",
        x: 400,
        y: -300,
        world: "earth",
        description: "An anomaly is an unusual or unexpected phenomenon occurring in a specific location, often marked by distinct features that set it apart from its surroundings. \nThese anomalies can vary widely in nature, encompassing unexplained structures, irregular patterns, or significant deviations from expected environmental norms. \nEach anomaly is characterized by its unique coordinates, typically represented by an 'x' and 'y' position, and is associated with a particular world or environment, such as a planet or celestial body. \nAnomalies often invite exploration and investigation due to their mysterious origins and potential insights into the environment or history of the world they inhabit. \nThey may be captured visually through imagery, providing observers with a glimpse into their peculiar characteristics. \nWhether natural or artificial in origin, anomalies remain key subjects of curiosity, serving as focal points for research, storytelling, and discovery."
, images: ['https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg']
    },
    {
        id: 32,
        title: "ThirtySecond anomaly",
        x: 50,
        y: 200,
        world: "mars",
        description: "An anomaly is an unusual or unexpected phenomenon occurring in a specific location, often marked by distinct features that set it apart from its surroundings. \nThese anomalies can vary widely in nature, encompassing unexplained structures, irregular patterns, or significant deviations from expected environmental norms. \nEach anomaly is characterized by its unique coordinates, typically represented by an 'x' and 'y' position, and is associated with a particular world or environment, such as a planet or celestial body. \nAnomalies often invite exploration and investigation due to their mysterious origins and potential insights into the environment or history of the world they inhabit. \nThey may be captured visually through imagery, providing observers with a glimpse into their peculiar characteristics. \nWhether natural or artificial in origin, anomalies remain key subjects of curiosity, serving as focal points for research, storytelling, and discovery."
, images: ['https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg']
    },
    {
        id: 33,
        title: "ThirtyThird anomaly",
        x: 90,
        y: -70,
        world: "venus",
        description: "An anomaly is an unusual or unexpected phenomenon occurring in a specific location, often marked by distinct features that set it apart from its surroundings. \nThese anomalies can vary widely in nature, encompassing unexplained structures, irregular patterns, or significant deviations from expected environmental norms. \nEach anomaly is characterized by its unique coordinates, typically represented by an 'x' and 'y' position, and is associated with a particular world or environment, such as a planet or celestial body. \nAnomalies often invite exploration and investigation due to their mysterious origins and potential insights into the environment or history of the world they inhabit. \nThey may be captured visually through imagery, providing observers with a glimpse into their peculiar characteristics. \nWhether natural or artificial in origin, anomalies remain key subjects of curiosity, serving as focal points for research, storytelling, and discovery."
, images: ['https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg']
    },
    {
        id: 34,
        title: "ThirtyFourth anomaly",
        x: -400,
        y: 60,
        world: "jupiter",
        description: "An anomaly is an unusual or unexpected phenomenon occurring in a specific location, often marked by distinct features that set it apart from its surroundings. \nThese anomalies can vary widely in nature, encompassing unexplained structures, irregular patterns, or significant deviations from expected environmental norms. \nEach anomaly is characterized by its unique coordinates, typically represented by an 'x' and 'y' position, and is associated with a particular world or environment, such as a planet or celestial body. \nAnomalies often invite exploration and investigation due to their mysterious origins and potential insights into the environment or history of the world they inhabit. \nThey may be captured visually through imagery, providing observers with a glimpse into their peculiar characteristics. \nWhether natural or artificial in origin, anomalies remain key subjects of curiosity, serving as focal points for research, storytelling, and discovery."
, images: ['https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg']
    },
    {
        id: 35,
        title: "ThirtyFifth anomaly",
        x: 120,
        y: 250,
        world: "saturn",
        description: "An anomaly is an unusual or unexpected phenomenon occurring in a specific location, often marked by distinct features that set it apart from its surroundings. \nThese anomalies can vary widely in nature, encompassing unexplained structures, irregular patterns, or significant deviations from expected environmental norms. \nEach anomaly is characterized by its unique coordinates, typically represented by an 'x' and 'y' position, and is associated with a particular world or environment, such as a planet or celestial body. \nAnomalies often invite exploration and investigation due to their mysterious origins and potential insights into the environment or history of the world they inhabit. \nThey may be captured visually through imagery, providing observers with a glimpse into their peculiar characteristics. \nWhether natural or artificial in origin, anomalies remain key subjects of curiosity, serving as focal points for research, storytelling, and discovery."
, images: ['https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg']
    },
    {
        id: 36,
        title: "ThirtySixth anomaly",
        x: -600,
        y: -300,
        world: "neptune",
        description: "An anomaly is an unusual or unexpected phenomenon occurring in a specific location, often marked by distinct features that set it apart from its surroundings. \nThese anomalies can vary widely in nature, encompassing unexplained structures, irregular patterns, or significant deviations from expected environmental norms. \nEach anomaly is characterized by its unique coordinates, typically represented by an 'x' and 'y' position, and is associated with a particular world or environment, such as a planet or celestial body. \nAnomalies often invite exploration and investigation due to their mysterious origins and potential insights into the environment or history of the world they inhabit. \nThey may be captured visually through imagery, providing observers with a glimpse into their peculiar characteristics. \nWhether natural or artificial in origin, anomalies remain key subjects of curiosity, serving as focal points for research, storytelling, and discovery."
, images: ['https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg']
    },
    {
        id: 37,
        title: "ThirtySeventh anomaly",
        x: 300,
        y: 100,
        world: "pluto",
        description: "An anomaly is an unusual or unexpected phenomenon occurring in a specific location, often marked by distinct features that set it apart from its surroundings. \nThese anomalies can vary widely in nature, encompassing unexplained structures, irregular patterns, or significant deviations from expected environmental norms. \nEach anomaly is characterized by its unique coordinates, typically represented by an 'x' and 'y' position, and is associated with a particular world or environment, such as a planet or celestial body. \nAnomalies often invite exploration and investigation due to their mysterious origins and potential insights into the environment or history of the world they inhabit. \nThey may be captured visually through imagery, providing observers with a glimpse into their peculiar characteristics. \nWhether natural or artificial in origin, anomalies remain key subjects of curiosity, serving as focal points for research, storytelling, and discovery."
, images: ['https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg']
    },
    {
        id: 38,
        title: "ThirtyEighth anomaly",
        x: -700,
        y: 400,
        world: "earth",
        description: "An anomaly is an unusual or unexpected phenomenon occurring in a specific location, often marked by distinct features that set it apart from its surroundings. \nThese anomalies can vary widely in nature, encompassing unexplained structures, irregular patterns, or significant deviations from expected environmental norms. \nEach anomaly is characterized by its unique coordinates, typically represented by an 'x' and 'y' position, and is associated with a particular world or environment, such as a planet or celestial body. \nAnomalies often invite exploration and investigation due to their mysterious origins and potential insights into the environment or history of the world they inhabit. \nThey may be captured visually through imagery, providing observers with a glimpse into their peculiar characteristics. \nWhether natural or artificial in origin, anomalies remain key subjects of curiosity, serving as focal points for research, storytelling, and discovery."
, images: ['https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg']
    },
]

export var size = anomalies.length

export async function  getanomalies(startIndex = 0, pageSize = 3){
    
    const endIndex = startIndex + pageSize;

    return anomalies.slice(startIndex, endIndex);

}
export async function postAnomaly(data){
    var errorV = false
    var errorMessageV = ""

    data.id = anomalies.length+1
    data.images = data.images.split("#")
    size++
    console.log(data)

    if(isNaN(data.x) || data.x.length ==0){
        errorMessageV += "X must be a number\n"
        errorV = true
    }
    if(isNaN(data.y) || data.y.length ==0){
        errorMessageV += "Y must be a number\n"
        errorV = true
    }
    if(data.title.length < 3){
        errorMessageV += "Title must be 3 characters or longer\n"
        errorV = true
    }
    if(data.world.length < 2){
        errorMessageV += "World must be 2 characters or longer\n"
        errorV = true
    }
    
    if(!errorV)
    {
        anomalies.push(data)
    }
    
    return {
        errorMessage: errorMessageV,
        error: errorV,
        value: data
    }
}