import { FactCard } from '../types/card';

export const DECK_2_OF_52_FACTS: FactCard[] = [
  // ==========================================
  // SPADES ♠ (Cosmos, Astrobiology & Black Holes)
  // Cards 53 to 65
  // ==========================================
  {
    id: 'deck2-spades-A',
    suit: '♠',
    suitName: 'spades',
    rank: 'A',
    cardNumber: 53,
    color: 'black',
    category: 'Observable Universe',
    imageUrl: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Vast cosmos with billions of glowing stars',
    translations: {
      en: {
        categoryName: 'Cosmology',
        title: 'Two Trillion Galaxies',
        fact: 'Astronomers estimate the observable universe contains over 2,000,000,000,000 (2 trillion) galaxies, each hosting hundreds of billions of stars.',
        takeaway: 'There are more stars in the cosmos than all grains of sand on every beach on Earth combined.'
      },
      vi: {
        categoryName: 'Vũ trụ học',
        title: 'Hai ngàn tỷ Thiên hà',
        fact: 'Các nhà thiên văn ước tính vũ trụ quan sát được chứa hơn 2.000.000.000.000 (2 nghìn tỷ) thiên hà, mỗi thiên hà có hàng trăm tỷ ngôi sao.',
        takeaway: 'Số lượng vì sao trong vũ trụ nhiều hơn toàn bộ hạt cát trên mọi bãi biển của Trái Đất cộng lại.'
      }
    }
  },
  {
    id: 'deck2-spades-2',
    suit: '♠',
    suitName: 'spades',
    rank: '2',
    cardNumber: 54,
    color: 'black',
    category: 'Planetary Science',
    imageUrl: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Saturn golden rings floating in dark space',
    translations: {
      en: {
        categoryName: 'Gas Giants',
        title: 'Saturn Would Float in Water',
        fact: 'Saturn is the only planet in our Solar System with an average density lower than water (0.687 g/cm³). If you had a bathtub large enough, it would float.',
        takeaway: 'Despite being the second-largest planet, it is made almost entirely of hydrogen and helium gas.'
      },
      vi: {
        categoryName: 'Hành tinh khí',
        title: 'Sao Thổ có thể nổi trên mặt nước',
        fact: 'Sao Thổ là hành tinh duy nhất trong Hệ Mặt Trời có mật độ khối lượng nhỏ hơn nước. Nếu có một bồn tắm khổng lồ chứa vừa, sao Thổ sẽ nổi bồng bềnh.',
        takeaway: 'Dù là hành tinh lớn thứ hai, cấu tạo của nó gần như hoàn toàn là khí hydro và heli nhẹ.'
      }
    }
  },
  {
    id: 'deck2-spades-3',
    suit: '♠',
    suitName: 'spades',
    rank: '3',
    cardNumber: 55,
    color: 'black',
    category: 'Orbital Mechanics',
    imageUrl: 'https://images.unsplash.com/photo-1543722530-d2c3201371e7?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Deep azure blue Neptune in ice void',
    translations: {
      en: {
        categoryName: 'Ice Giants',
        title: 'Neptune’s 165-Year Year',
        fact: 'Because Neptune orbits so far from the Sun (4.5 billion km), a single Neptune year lasts nearly 165 Earth years.',
        takeaway: 'Since its discovery in 1846, Neptune has completed only one full orbit around the Sun (in 2011).'
      },
      vi: {
        categoryName: 'Hành tinh băng',
        title: 'Một năm dài 165 năm Trái Đất',
        fact: 'Vì nằm cách Mặt Trời tới 4,5 tỷ km, một vòng quay của sao Hải Vương quanh Mặt Trời mất tới 165 năm Trái Đất.',
        takeaway: 'Kể từ khi được phát hiện năm 1846, sao Hải Vương mới chỉ hoàn thành duy nhất 1 vòng quỹ đạo vào năm 2011.'
      }
    }
  },
  {
    id: 'deck2-spades-4',
    suit: '♠',
    suitName: 'spades',
    rank: '4',
    cardNumber: 56,
    color: 'black',
    category: 'Martian Geology',
    imageUrl: 'https://images.unsplash.com/photo-1612892483236-52d32a0e0ac1?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Red dust towering mountain on Mars horizon',
    translations: {
      en: {
        categoryName: 'Solar Volcanoes',
        title: 'Olympus Mons: 3x Mount Everest',
        fact: 'Olympus Mons on Mars is the tallest volcano in the Solar System. Rising 21.9 km (72,000 ft) high, it is nearly three times taller than Mount Everest.',
        takeaway: 'Its base is so massive (600 km wide) that its summit slope would be imperceptible to someone walking on it.'
      },
      vi: {
        categoryName: 'Địa chất Sao Hỏa',
        title: 'Núi lửa cao gấp 3 lần Everest',
        fact: 'Núi lửa Olympus Mons trên sao Hỏa là ngọn núi lửa cao nhất Hệ Mặt Trời, cao tới 21,9 km — gần gấp ba lần đỉnh Everest hùng vĩ của Trái Đất.',
        takeaway: 'Chân núi rộng tới 600 km, lớn đến mức một người đứng dưới chân sẽ không thấy đỉnh vì nó cong theo đường chân trời.'
      }
    }
  },
  {
    id: 'deck2-spades-5',
    suit: '♠',
    suitName: 'spades',
    rank: '5',
    cardNumber: 57,
    color: 'black',
    category: 'Lunar Orbit',
    imageUrl: 'https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Moon crescent shining against twilight sky',
    translations: {
      en: {
        categoryName: 'Lunar Physics',
        title: 'The Moon is Drifting Away',
        fact: 'Laser reflector measurements show the Moon is inching away from Earth at a rate of roughly 3.8 cm (1.5 inches) per year.',
        takeaway: 'Billions of years ago, the Moon loomed three times larger in our sky than it does today.'
      },
      vi: {
        categoryName: 'Vật lý Mặt Trăng',
        title: 'Mặt Trăng đang rời xa Trái Đất',
        fact: 'Các phép đo phản xạ laser cho thấy Mặt Trăng đang từ từ trôi xa Trái Đất với tốc độ khoảng 3,8 cm mỗi năm.',
        takeaway: 'Hàng tỷ năm trước, Mặt Trăng trên bầu trời đêm trông to gấp 3 lần so với hiện nay.'
      }
    }
  },
  {
    id: 'deck2-spades-6',
    suit: '♠',
    suitName: 'spades',
    rank: '6',
    cardNumber: 58,
    color: 'black',
    category: 'Cosmic Microwave',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Static noise television screen abstract glow',
    translations: {
      en: {
        categoryName: 'The Big Bang',
        title: 'TV Static from the Beginning of Time',
        fact: 'About 1% of the black-and-white static snow on old analog televisions was caused by the Cosmic Microwave Background radiation from the Big Bang.',
        takeaway: 'Tuning into an empty television channel literally allowed you to watch remnants of the birth of our universe.'
      },
      vi: {
        categoryName: 'Vụ Nổ Lớn',
        title: 'Nhiễu TV từ thuở sơ khai vũ trụ',
        fact: 'Khoảng 1% những hạt nhiễu trắng đen trên màn hình TV bóng đèn thời xưa chính là tàn dư bức xạ vi nền từ Vụ Nổ Lớn (Big Bang).',
        takeaway: 'Khi bật một kênh TV trống, bạn thực chất đang quan sát ánh sáng tàn dư từ ngày vũ trụ sinh ra.'
      }
    }
  },
  {
    id: 'deck2-spades-7',
    suit: '♠',
    suitName: 'spades',
    rank: '7',
    cardNumber: 59,
    color: 'black',
    category: 'Planetary Rotation',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Sunlit rocky planet surface in orbit',
    translations: {
      en: {
        categoryName: 'Mercury',
        title: 'Mercury’s Extreme Days',
        fact: 'Mercury takes 59 Earth days to complete one rotation on its axis, and daytime temperatures can soar past 430°C (800°F) while nights plunge to -180°C.',
        takeaway: 'Because it lacks an atmosphere to trap heat, it experiences the most extreme temperature swings in the Solar System.'
      },
      vi: {
        categoryName: 'Sao Thủy',
        title: 'Biên độ nhiệt cực hạn trên Sao Thủy',
        fact: 'Sao Thủy mất 59 ngày Trái Đất để quay một vòng. Ban ngày nhiệt độ lên tới 430°C trong khi ban đêm tụt dốc thê thảm xuống -180°C.',
        takeaway: 'Do không có bầu khí quyển giữ nhiệt, sao Thủy trải qua sự chênh lệch nhiệt độ khốc liệt nhất Thái Dương Hệ.'
      }
    }
  },
  {
    id: 'deck2-spades-8',
    suit: '♠',
    suitName: 'spades',
    rank: '8',
    cardNumber: 60,
    color: 'black',
    category: 'Diamond Weather',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Diamond crystals falling into deep dark turquoise ocean',
    translations: {
      en: {
        categoryName: 'Extreme Weather',
        title: 'Diamond Rain on Ice Giants',
        fact: 'Atmospheric pressure on Neptune and Uranus is so colossal that it compresses methane into pure carbon crystals, causing literal diamond rain.',
        takeaway: 'These diamonds are estimated to weigh millions of carats and slowly sink toward the core.'
      },
      vi: {
        categoryName: 'Khí hậu cực đoan',
        title: 'Mưa kim cương trên Sao Hải Vương',
        fact: 'Áp suất khí quyển khổng lồ trên sao Thiên Vương và Hải Vương nghiền nát phân tử metan thành tinh thể carbon, tạo thành những cơn mưa kim cương thực sự.',
        takeaway: 'Những viên kim cương nặng hàng triệu cara này rơi chầm chậm xuống lõi hành tinh.'
      }
    }
  },
  {
    id: 'deck2-spades-9',
    suit: '♠',
    suitName: 'spades',
    rank: '9',
    cardNumber: 61,
    color: 'black',
    category: 'Astronaut Experience',
    imageUrl: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Astronaut helmet visor reflecting earth and stars',
    translations: {
      en: {
        categoryName: 'Space Senses',
        title: 'The Scent of Outer Space',
        fact: 'Astronauts returning from spacewalks consistently report that their spacesuits smell distinctively like seared steak, hot metal, and gunpowder.',
        takeaway: 'This aroma is caused by high-energy atomic oxygen clinging to the suit and combining with indoor air upon repressurization.'
      },
      vi: {
        categoryName: 'Giác quan không gian',
        title: 'Mùi vị của Vũ trụ',
        fact: 'Các phi hành gia sau khi đi bộ ngoài không gian đều chia sẻ bộ đồ vũ trụ có mùi đặc trưng như bít tết cháy xém, kim loại nóng và thuốc súng.',
        takeaway: 'Mùi hương này sinh ra khi các hạt oxy nguyên tử năng lượng cao bám vào đồ du hành phản ứng với không khí trong khoang.'
      }
    }
  },
  {
    id: 'deck2-spades-10',
    suit: '♠',
    suitName: 'spades',
    rank: '10',
    cardNumber: 62,
    color: 'black',
    category: 'Astrochemistry',
    imageUrl: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Interstellar pink and purple nebula gas clouds',
    translations: {
      en: {
        categoryName: 'Interstellar Clouds',
        title: 'The Alcohol Cloud of Sagittarius B2',
        fact: 'Near the center of the Milky Way lies Sagittarius B2, a colossal molecular cloud containing billions of liters of ethyl alcohol (the kind found in drinks).',
        takeaway: 'It also contains ethyl formate, the chemical compound that gives raspberries their sweet aroma.'
      },
      vi: {
        categoryName: 'Hóa học vũ trụ',
        title: 'Đám mây cồn khổng lồ Sagittarius B2',
        fact: 'Gần tâm Ngân Hà có đám mây phân tử Sagittarius B2 chứa hàng tỷ lít cồn ethanol nguyên chất — loại cồn có trong các loại rượu vang.',
        takeaway: 'Đám mây này còn chứa hợp chất ethyl formate, tạo nên mùi thơm ngọt ngào giống quả mâm xôi.'
      }
    }
  },
  {
    id: 'deck2-spades-J',
    suit: '♠',
    suitName: 'spades',
    rank: 'J',
    cardNumber: 63,
    color: 'black',
    category: 'Magnetars',
    imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Magnetar magnetic field lines radiating intensely',
    translations: {
      en: {
        categoryName: 'Extreme Stars',
        title: 'Magnetars: Trillion Gauss Magnets',
        fact: 'Magnetars have magnetic fields so fiercely intense (1,000 trillion gauss) that getting within 1,000 kilometers would dissolve your atomic electron clouds.',
        takeaway: 'A magnetar could wipe every credit card on Earth from halfway to the Moon.'
      },
      vi: {
        categoryName: 'Sao cực hạn',
        title: 'Từ trường hủy diệt của Magnetar',
        fact: 'Sao từ Magnetar sở hữu từ trường mạnh tới 1.000 nghìn tỷ gauss, đến mức nếu lại gần 1.000 km, đám mây electron của bạn sẽ bị xé rách vụn.',
        takeaway: 'Một ngôi sao từ ở khoảng cách nửa đường tới Mặt Trăng đủ sức xóa sạch toàn bộ dải từ thẻ tín dụng trên khắp Trái Đất.'
      }
    }
  },
  {
    id: 'deck2-spades-Q',
    suit: '♠',
    suitName: 'spades',
    rank: 'Q',
    cardNumber: 64,
    color: 'black',
    category: 'Black Holes',
    imageUrl: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Black hole gravitational lens silhouette against stars',
    translations: {
      en: {
        categoryName: 'Stellar Graveyard',
        title: 'Gaia BH1: Our Cosmic Neighbor',
        fact: 'Discovered in 2022, Gaia BH1 is the closest known black hole to Earth, sitting approximately 1,560 light-years away in the constellation Ophiuchus.',
        takeaway: 'It is a dormant black hole with roughly 10 times the mass of the Sun, quietly orbiting a sun-like star.'
      },
      vi: {
        categoryName: 'Lỗ đen láng giềng',
        title: 'Gaia BH1: Lỗ đen gần Trái Đất nhất',
        fact: 'Được phát hiện năm 2022, Gaia BH1 là lỗ đen gần Trái Đất nhất từng được ghi nhận, chỉ cách chúng ta khoảng 1.560 năm ánh sáng.',
        takeaway: 'Nó là một lỗ đen ngủ yên nặng gấp 10 lần Mặt Trời, đang âm thầm quay quanh một ngôi sao đồng hành.'
      }
    }
  },
  {
    id: 'deck2-spades-K',
    suit: '♠',
    suitName: 'spades',
    rank: 'K',
    cardNumber: 65,
    color: 'black',
    category: 'Star Nurseries',
    imageUrl: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Pillars of Creation glowing majestic columns of gas',
    translations: {
      en: {
        categoryName: 'Eagle Nebula',
        title: 'The Pillars of Creation',
        fact: 'The iconic "Pillars of Creation" in the Eagle Nebula are colossal towers of interstellar gas and dust measuring roughly 4 to 5 light-years in length.',
        takeaway: 'A single fingertip protruding from the pillars is larger than our entire Solar System.'
      },
      vi: {
        categoryName: 'Vườn ươm sao',
        title: 'Các Cột Trụ Sáng Tạo',
        fact: 'Cột Trụ Sáng Tạo trong Tinh vân Đại Bàng là những tháp khí và bụi vũ trụ khổng lồ vươn dài tới 4 đến 5 năm ánh sáng.',
        takeaway: 'Chỉ riêng phần chóp ngón tay nhô ra của cột trụ đã lớn hơn toàn bộ Hệ Mặt Trời của chúng ta gộp lại.'
      }
    }
  },

  // ==========================================
  // HEARTS ♥ (Creatures, Microscopic & Weird Animals)
  // Cards 66 to 78
  // ==========================================
  {
    id: 'deck2-hearts-A',
    suit: '♥',
    suitName: 'hearts',
    rank: 'A',
    cardNumber: 66,
    color: 'red',
    category: 'Bizarre Mammals',
    imageUrl: 'https://images.unsplash.com/photo-1545671913-b89ac1b4ac10?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Platypus swimming with bill under water',
    translations: {
      en: {
        categoryName: 'Fluorescence',
        title: 'The Glowing Platypus',
        fact: 'The platypus already defies biology by laying eggs and producing venom — but scientists recently discovered its fur also glows cyan under ultraviolet light.',
        takeaway: 'It is one of the only known biofluorescent mammals in the world.'
      },
      vi: {
        categoryName: 'Động vật kỳ dị',
        title: 'Thú mỏ vịt phát sáng huyền ảo',
        fact: 'Thú mỏ vịt đẻ trứng và có nọc độc đã đủ kỳ lạ, nhưng gần đây các nhà khoa học phát hiện bộ lông của nó còn phát sáng xanh lục lam dưới ánh đèn cực tím.',
        takeaway: 'Đây là một trong những loài thú có vú hiếm hoi trên thế giới có khả năng phát huỳnh quang tự nhiên.'
      }
    }
  },
  {
    id: 'deck2-hearts-2',
    suit: '♥',
    suitName: 'hearts',
    rank: '2',
    cardNumber: 67,
    color: 'red',
    category: 'Regeneration',
    imageUrl: 'https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Axolotl pink salamander smiling under water',
    translations: {
      en: {
        categoryName: 'Regenerative Marvels',
        title: 'Axolotl: The Master of Regrowth',
        fact: 'The Mexican axolotl can regenerate amputated limbs, lung tissue, crushed spinal cords, and even sections of its own brain without any scarring.',
        takeaway: 'Scientists study its genome to unlock regenerative medicine treatments for human organs.'
      },
      vi: {
        categoryName: 'Kỳ tài tái sinh',
        title: 'Kỳ giông Axolotl tái tạo não bộ',
        fact: 'Loài kỳ giông Axolotl của Mexico có thể mọc lại toàn bộ chân tay bị đứt, mô phổi, tủy sống và thậm chí tái tạo cả một phần bộ não hoàn toàn không để lại sẹo.',
        takeaway: 'Các nhà y học đang nghiên cứu bộ gen của nó để tìm kiếm phương pháp tái tạo nội tạng cho con người.'
      }
    }
  },
  {
    id: 'deck2-hearts-3',
    suit: '♥',
    suitName: 'hearts',
    rank: '3',
    cardNumber: 68,
    color: 'red',
    category: 'Forensics',
    imageUrl: 'https://images.unsplash.com/photo-1505148230895-d9a785a555fa?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Cute koala sitting on eucalyptus tree branch',
    translations: {
      en: {
        categoryName: 'Animal Prints',
        title: 'Koala Fingerprint Mystery',
        fact: 'Koalas have unique ridge-patterned fingerprints so strikingly similar to humans that even electron microscopes struggle to tell them apart.',
        takeaway: 'Police fear koala prints at an Australian crime scene could accidentally contaminate criminal investigations.'
      },
      vi: {
        categoryName: 'Bí ẩn sinh trắc học',
        title: 'Vân tay gấu Koala giống hệt con người',
        fact: 'Gấu Koala sở hữu dấu vân tay có đường nét tinh vi giống người đến mức ngay cả kính hiển vi điện tử cũng rất khó phân biệt đâu là tay người hay tay gấu.',
        takeaway: 'Cảnh sát Úc từng lo ngại dấu tay của gấu koala có thể làm sai lệch hiện trường vụ án hình sự.'
      }
    }
  },
  {
    id: 'deck2-hearts-4',
    suit: '♥',
    suitName: 'hearts',
    rank: '4',
    cardNumber: 69,
    color: 'red',
    category: 'Cryobiology',
    imageUrl: 'https://images.unsplash.com/photo-1518173946687-a4c8a383392e?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Wood frog frozen in icy snow crystals',
    translations: {
      en: {
        categoryName: 'Survival Secrets',
        title: 'The Frog That Freezes Solid',
        fact: 'The Alaskan wood frog freezes up to 70% of its body water solid into ice during winter. Its heart stops beating and its breathing halts for months.',
        takeaway: 'In spring, it thaws from the inside out, its heart restarts spontaneously, and it hops away.'
      },
      vi: {
        categoryName: 'Kỳ tích sinh tồn',
        title: 'Chú ếch đóng băng sống lại',
        fact: 'Ếch gỗ Alaska để 70% lượng nước trong cơ thể đông cứng thành băng suốt mùa đông. Tim ngừng đập, phổi ngừng thở hoàn toàn trong nhiều tháng.',
        takeaway: 'Khi xuân đến, cơ thể nó tự tan băng từ trong ra ngoài, tim đập trở lại và nhảy nhót như chưa từng có chuyện gì.'
      }
    }
  },
  {
    id: 'deck2-hearts-5',
    suit: '♥',
    suitName: 'hearts',
    rank: '5',
    cardNumber: 70,
    color: 'red',
    category: 'Ocean Predators',
    imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Mantis shrimp vibrant colors and strike appendages',
    translations: {
      en: {
        categoryName: 'Shockwaves',
        title: 'The Bullet-Fast Mantis Shrimp',
        fact: 'The mantis shrimp strikes with clubs that accelerate as fast as a .22 caliber bullet (80 km/h), boiling the surrounding water with cavitation bubbles.',
        takeaway: 'The strike collapses with so much heat and light (sonoluminescence) that aquariums must house them in reinforced acrylic.'
      },
      vi: {
        categoryName: 'Đòn đánh siêu tốc',
        title: 'Cú đấm viên đạn của tôm bọ ngựa',
        fact: 'Tôm bọ ngựa vung chiếc càng với gia tốc ngang viên đạn súng lục (80 km/h), đun sôi tức thì nước xung quanh tạo bọt chân không phát sáng.',
        takeaway: 'Cú đập có thể làm vỡ kính bể cá thông thường, buộc các viện hải dương học phải nuôi chúng trong bể mica cường lực.'
      }
    }
  },
  {
    id: 'deck2-hearts-6',
    suit: '♥',
    suitName: 'hearts',
    rank: '6',
    cardNumber: 71,
    color: 'red',
    category: 'Marsupials',
    imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Australian wombat on grass ground',
    translations: {
      en: {
        categoryName: 'Geometry in Nature',
        title: 'Wombat Cube Poop',
        fact: 'Wombats are the only animals in the world that produce cube-shaped feces. They deposit up to 100 cubes a night to mark territory on rocks without rolling off.',
        takeaway: 'Their intestines have varied elasticity in two distinct stiff grooves that mold the cubes.'
      },
      vi: {
        categoryName: 'Hình học tự nhiên',
        title: 'Phân hình lập phương của gấu Wombat',
        fact: 'Gấu túi Wombat là loài vật duy nhất trên thế giới thải ra phân có hình khối lập phương sắc cạnh, giúp phân nằm yên trên tảng đá đánh dấu lãnh thổ mà không bị lăn đi.',
        takeaway: 'Các nếp gấp co giãn đặc biệt ở đoạn cuối ruột già của nó hoạt động như khuôn ép hình vuông kỳ diệu.'
      }
    }
  },
  {
    id: 'deck2-hearts-7',
    suit: '♥',
    suitName: 'hearts',
    rank: '7',
    cardNumber: 72,
    color: 'red',
    category: 'Bioelectricity',
    imageUrl: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Electric underwater creature abstract current discharge',
    translations: {
      en: {
        categoryName: 'Living Batteries',
        title: 'Electric Eels: 860 Volts',
        fact: 'An Amazonian electric eel can unleash electrical discharges of up to 860 volts — enough to stun a full-grown horse or illuminate dozens of lightbulbs.',
        takeaway: 'Over 80% of its body length is occupied by thousands of electrocyte cells acting like batteries in series.'
      },
      vi: {
        categoryName: 'Dòng điện sinh học',
        title: 'Cú phóng điện 860 Vôn của lươn điện',
        fact: 'Lươn điện Amazon có thể phóng luồng điện khủng khiếp lên tới 860 vôn — đủ sức làm choáng váng cả một con ngựa trưởng thành.',
        takeaway: 'Hơn 80% chiều dài cơ thể của nó chứa hàng ngàn tế bào điện học mắc nối tiếp hệt như một chuỗi pin cực mạnh.'
      }
    }
  },
  {
    id: 'deck2-hearts-8',
    suit: '♥',
    suitName: 'hearts',
    rank: '8',
    cardNumber: 73,
    color: 'red',
    category: 'Avian Intelligence',
    imageUrl: 'https://images.unsplash.com/photo-1528659582531-152e92cbbec4?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Pigeon bird looking at reflection',
    translations: {
      en: {
        categoryName: 'Self-Awareness',
        title: 'Pigeons Recognize Themselves',
        fact: 'Pigeons have passed the prestigious mirror self-recognition test, a cognitive milestone that human toddlers only pass around age two.',
        takeaway: 'They can also be trained to distinguish between paintings by Monet and Picasso with 90% accuracy.'
      },
      vi: {
        categoryName: 'Nhận thức loài chim',
        title: 'Bồ câu tự nhận ra mình trong gương',
        fact: 'Chim bồ câu đã vượt qua bài kiểm tra tự nhận thức trước gương danh giá, một cột mốc trí tuệ mà trẻ nhỏ cũng chỉ đạt được vào khoảng 2 tuổi.',
        takeaway: 'Chúng thậm chí có thể được huấn luyện để phân biệt tranh của danh họa Monet và Picasso với độ chính xác 90%.'
      }
    }
  },
  {
    id: 'deck2-hearts-9',
    suit: '♥',
    suitName: 'hearts',
    rank: '9',
    cardNumber: 74,
    color: 'red',
    category: 'Extremophiles',
    imageUrl: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Microscopic water bear tardigrade swimming',
    translations: {
      en: {
        categoryName: 'Indestructible Life',
        title: 'Tardigrades: Space Survivors',
        fact: 'Tardigrades (water bears) can survive the vacuum of space, temperatures from -272°C to 150°C, and radiation doses 1,000 times higher than fatal human limits.',
        takeaway: 'They enter cryptobiosis by replacing their bodily water with protective sugar glass.'
      },
      vi: {
        categoryName: 'Sinh vật bất tử',
        title: 'Gấu nước sống sót ngoài vũ trụ',
        fact: 'Gấu nước (Tardigrade) có thể sống sót ngoài chân không vũ trụ, chịu được nhiệt độ từ -272°C đến 150°C và lượng phóng xạ gấp 1.000 lần mức tử vong của con người.',
        takeaway: 'Chúng đi vào trạng thái tiềm sinh bằng cách thay thế toàn bộ nước trong cơ thể thành một loại thủy tinh sinh học bảo vệ.'
      }
    }
  },
  {
    id: 'deck2-hearts-10',
    suit: '♥',
    suitName: 'hearts',
    rank: '10',
    cardNumber: 75,
    color: 'red',
    category: 'Savannah Giants',
    imageUrl: 'https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Tall giraffe reaching for acacia leaves',
    translations: {
      en: {
        categoryName: 'Sun Protection',
        title: 'The Giraffe’s 50cm Black Tongue',
        fact: 'A giraffe possesses a 45-to-50 cm (20-inch) long tongue that is dark blue-black to protect it from constant sunburn while foraging all day.',
        takeaway: 'Its thick, antiseptic saliva also shields against the razor-sharp thorns of acacia trees.'
      },
      vi: {
        categoryName: 'Chống nắng tự nhiên',
        title: 'Lưỡi hươu cao cổ dài nửa mét',
        fact: 'Lưỡi của hươu cao cổ dài tới gần nửa mét (45-50 cm) và có màu tím đen sẫm để chống cháy nắng khi vươn lên ngọn cây ăn lá suốt ngày.',
        takeaway: 'Nước bọt sánh đặc có tính kháng khuẩn giúp bảo vệ lưỡi khỏi những chiếc gai nhọn hoắt của cây keo.'
      }
    }
  },
  {
    id: 'deck2-hearts-J',
    suit: '♥',
    suitName: 'hearts',
    rank: 'J',
    cardNumber: 76,
    color: 'red',
    category: 'Acoustic Mimicry',
    imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Lyrebird with elaborate tail plumage in lush forest',
    translations: {
      en: {
        categoryName: 'Sound Mimics',
        title: 'The Super-Mimic Lyrebird',
        fact: 'Australia’s lyrebird has the most complex vocal organ of any bird, allowing it to flawlessly mimic chainsaws, camera shutters, crying babies, and car alarms.',
        takeaway: 'It learns sounds in the wild and passes human noises down through bird generations.'
      },
      vi: {
        categoryName: 'Bậc thầy âm thanh',
        title: 'Chim cầm nhại tiếng cưa máy',
        fact: 'Chim cầm (Lyrebird) nước Úc có thanh quản siêu việt nhất thế giới loài chim, bắt chước hoàn hảo tiếng cưa máy gỗ, màn trập máy ảnh và còi báo động xe hơi.',
        takeaway: 'Chúng học tiếng máy móc từ các thợ rừng và truyền các âm thanh đó lại cho các thế hệ chim con.'
      }
    }
  },
  {
    id: 'deck2-hearts-Q',
    suit: '♥',
    suitName: 'hearts',
    rank: 'Q',
    cardNumber: 77,
    color: 'red',
    category: 'Marine Armor',
    imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Great white shark glide underwater smoothly',
    translations: {
      en: {
        categoryName: 'Fluid Dynamics',
        title: 'Shark Skin is Made of Teeth',
        fact: 'Shark skin is not made of traditional fish scales; it is blanketed in millions of microscopic grooved teeth called dermal denticles.',
        takeaway: 'These denticles reduce hydrodynamic drag, inspiring Olympic swimsuits and aircraft coatings.'
      },
      vi: {
        categoryName: 'Động lực học chất lỏng',
        title: 'Da cá mập cấu tạo từ răng',
        fact: 'Da cá mập không phải vảy cá thông thường mà được bao bọc bởi hàng triệu chiếc răng siêu nhỏ gọi là "răng bì" (dermal denticles).',
        takeaway: 'Cấu trúc này triệt tiêu ma sát của dòng nước, tạo cảm hứng cho thiết kế đồ bơi thi đấu Olympic và vỏ máy bay.'
      }
    }
  },
  {
    id: 'deck2-hearts-K',
    suit: '♥',
    suitName: 'hearts',
    rank: 'K',
    cardNumber: 78,
    color: 'red',
    category: 'Underwater Art',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Geometric sand mandala pattern on ocean floor',
    translations: {
      en: {
        categoryName: 'Underwater Architecture',
        title: 'The Pufferfish Sand Mandala',
        fact: 'The tiny male white-spotted pufferfish spends a week tirelessly flapping its fins to sculpt intricate, 2-meter symmetrical geometric sand mandalas.',
        takeaway: 'These sand circles absorb ocean currents so female pufferfish can lay eggs safely in the center.'
      },
      vi: {
        categoryName: 'Kiến trúc đại dương',
        title: 'Vòng tròn cát kỳ ảo của cá nóc',
        fact: 'Chú cá nóc đực nhỏ bé mất cả tuần liền dùng vây điêu khắc dưới đáy cát một vòng tròn hình học mandala đối xứng đường kính 2 mét cực kỳ công phu.',
        takeaway: 'Vòng tròn này làm triệt tiêu dòng hải lưu, giúp cá nóc cái yên tâm đẻ trứng an toàn tại tâm điểm.'
      }
    }
  },

  // ==========================================
  // DIAMONDS ♦ (Vietnam Wonders, Culture & Global Heritage)
  // Cards 79 to 91
  // ==========================================
  {
    id: 'deck2-diamonds-A',
    suit: '♦',
    suitName: 'diamonds',
    rank: 'A',
    cardNumber: 79,
    color: 'red',
    category: 'Vietnam UNESCO',
    imageUrl: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Tràng An limestone peaks reflection on emerald river with boats',
    translations: {
      en: {
        categoryName: 'Vietnam Heritage',
        title: 'Tràng An: Dual UNESCO Crown',
        fact: 'Tràng An in Ninh Bình is Southeast Asia’s very first Dual World Heritage site, recognized by UNESCO for both cultural and natural significance.',
        takeaway: 'Its flooded karst labyrinth hides archaeological evidence of human habitation dating back 30,000 years.'
      },
      vi: {
        categoryName: 'Di sản thế giới',
        title: 'Tràng An: Di sản kép Đông Nam Á',
        fact: 'Quần thể danh thắng Tràng An tại Ninh Bình là di sản thế giới kép đầu tiên và duy nhất tại Đông Nam Á, được UNESCO vinh danh cả về văn hóa lẫn thiên nhiên.',
        takeaway: 'Các hang động ngập nước tại đây lưu giữ dấu tích sinh sống của người tiền sử từ 30.000 năm trước.'
      }
    }
  },
  {
    id: 'deck2-diamonds-2',
    suit: '♦',
    suitName: 'diamonds',
    rank: '2',
    cardNumber: 80,
    color: 'red',
    category: 'Vietnam Culinary',
    imageUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Crispy Vietnamese Banh Mi sandwich packed with fresh herbs',
    translations: {
      en: {
        categoryName: 'Gastronomy',
        title: 'The Evolution of Bánh Mì',
        fact: 'Vietnamese Bánh Mì evolved from the French colonial baguette by replacing pure wheat flour with rice flour, creating its signature crispy, airy crust.',
        takeaway: 'In 2011, the word "banh mi" was officially added to the Oxford English Dictionary.'
      },
      vi: {
        categoryName: 'Ẩm thực Việt Nam',
        title: 'Sự kỳ diệu của Bánh Mì',
        fact: 'Bánh mì Việt Nam biến tấu từ bánh baguette Pháp nhưng được kết hợp bột gạo, tạo nên lớp vỏ giòn rụm và ruột bánh xốp nhẹ đặc trưng.',
        takeaway: 'Năm 2011, từ "banh mi" đã được thêm chính thức vào Từ điển tiếng Anh Oxford danh tiếng.'
      }
    }
  },
  {
    id: 'deck2-diamonds-3',
    suit: '♦',
    suitName: 'diamonds',
    rank: '3',
    cardNumber: 81,
    color: 'red',
    category: 'Imperial Citadel',
    imageUrl: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Imperial city of Hue ancient palace gate and moat',
    translations: {
      en: {
        categoryName: 'Royal Dynasty',
        title: 'The Imperial Citadel of Huế',
        fact: 'Huế Citadel features an astonishing 10-kilometer fortified wall surrounded by moats fed by the Perfume River, housing the Forbidden Purple City.',
        takeaway: 'It was built according to Eastern geomantic principles (feng shui) aligned with the sacred Ngu Binh mountain.'
      },
      vi: {
        categoryName: 'Hoàng thành cổ kính',
        title: 'Kinh thành Huế uy nghiêm',
        fact: 'Kinh thành Huế sở hữu vòng thành kiên cố dài 10 km bao bọc bởi hào nước sông Hương, bên trong là Tử Cấm Thành nguy nga của triều Nguyễn.',
        takeaway: 'Toàn bộ quần thể được xây dựng theo thuật phong thủy phương Đông nghiêm ngặt, lấy núi Ngự Bình làm tiền án.'
      }
    }
  },
  {
    id: 'deck2-diamonds-4',
    suit: '♦',
    suitName: 'diamonds',
    rank: '4',
    cardNumber: 82,
    color: 'red',
    category: 'Ancient Tombs',
    imageUrl: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Terra Cotta warriors standing in formation',
    translations: {
      en: {
        categoryName: 'Archaeology',
        title: 'The 8,000 Terra Cotta Warriors',
        fact: 'The Terra Cotta Army of Emperor Qin Shi Huang contains over 8,000 life-sized soldiers, and remarkably, every single face has distinct facial features.',
        takeaway: 'They were buried in 210 BCE with real bronze weapons that remained razor-sharp for over 2,200 years.'
      },
      vi: {
        categoryName: 'Khảo cổ học cổ đại',
        title: '8.000 tượng Binh mã dũng',
        fact: 'Đội quân đất nung của Tần Thủy Hoàng gồm hơn 8.000 chiến binh kích thước thật, và điều kỳ diệu là mỗi khuôn mặt đều mang thần thái hoàn toàn khác nhau.',
        takeaway: 'Họ được chôn cất từ năm 210 TCN cùng vũ khí bằng đồng thật vẫn sắc bén nguyên vẹn sau hơn 2.200 năm.'
      }
    }
  },
  {
    id: 'deck2-diamonds-5',
    suit: '♦',
    suitName: 'diamonds',
    rank: '5',
    cardNumber: 83,
    color: 'red',
    category: 'Vietnam Peaks',
    imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Fansipan peak touching white cloud sea in Sa Pa Vietnam',
    translations: {
      en: {
        categoryName: 'Roof of Indochina',
        title: 'Fansipan: Indochina’s Summit',
        fact: 'At 3,143 meters (10,312 ft), Mount Fansipan in Sa Pa, Vietnam is the highest peak in all of Indochina (Vietnam, Laos, and Cambodia).',
        takeaway: 'It harbors over 2,000 floral species, many of which exist nowhere else on the globe.'
      },
      vi: {
        categoryName: 'Nóc nhà Đông Dương',
        title: 'Đỉnh Fansipan 3.143 mét',
        fact: 'Với độ cao 3.143 mét tại Sa Pa, đỉnh Fansipan là ngọn núi cao nhất trên toàn cõi bán đảo Đông Dương (Việt Nam, Lào, Campuchia).',
        takeaway: 'Dãy núi này sở hữu hơn 2.000 loài thực vật phong phú, trong đó có nhiều loài đặc hữu chỉ có tại Sa Pa.'
      }
    }
  },
  {
    id: 'deck2-diamonds-6',
    suit: '♦',
    suitName: 'diamonds',
    rank: '6',
    cardNumber: 84,
    color: 'red',
    category: 'Agricultural Wonder',
    imageUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Terraced golden rice fields of Mu Cang Chai curving on mountains',
    translations: {
      en: {
        categoryName: 'Mountain Engineering',
        title: 'Mù Cang Chải Terraced Sculptures',
        fact: 'The terraced rice fields of Mù Cang Chải were carved into steep mountain slopes by the H’Mông people over centuries using only hand tools and gravity irrigation.',
        takeaway: 'Bamboo aqueducts carry pure stream water down steep summits to flood each tiered step uniformly.'
      },
      vi: {
        categoryName: 'Kiệt tác bậc thang',
        title: 'Ruộng bậc thang Mù Cang Chải',
        fact: 'Ruộng bậc thang Mù Cang Chải được đồng bào người Mông khai khẩn trên sườn núi dốc đứng qua nhiều thế kỷ chỉ bằng công cụ thô sơ và sức người.',
        takeaway: 'Hệ thống máng nước bằng tre dẫn nước suối từ đỉnh núi cao chia đều cho từng bậc ruộng vàng óng ả.'
      }
    }
  },
  {
    id: 'deck2-diamonds-7',
    suit: '♦',
    suitName: 'diamonds',
    rank: '7',
    cardNumber: 85,
    color: 'red',
    category: 'Underground Defense',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Camouflaged underground tunnel entrance in dense jungle',
    translations: {
      en: {
        categoryName: 'Củ Chi Labyrinth',
        title: 'Củ Chi: 250km Underground City',
        fact: 'The Củ Chi Tunnels network stretches over 250 kilometers underground, complete with kitchens, hospitals, living quarters, and secret underwater exits.',
        takeaway: 'The kitchens used "Hoang Cam" smoke dispersal trenches so aerial scouts could not spot smoke plumes.'
      },
      vi: {
        categoryName: 'Địa đạo kỳ tích',
        title: 'Củ Chi: 250km thành phố dưới lòng đất',
        fact: 'Hệ thống Địa đạo Củ Chi dài hơn 250 km xuyên trong lòng đất, gồm đầy đủ bệnh viện dã chiến, phòng họp, bếp ăn và ngách thoát bí mật ra sông.',
        takeaway: 'Bếp Hoàng Cầm tài tình tản khói men theo các rãnh đất khiến máy bay tuần tiễu không thể nhận ra khói lửa.'
      }
    }
  },
  {
    id: 'deck2-diamonds-8',
    suit: '♦',
    suitName: 'diamonds',
    rank: '8',
    cardNumber: 86,
    color: 'red',
    category: 'Incan Engineering',
    imageUrl: 'https://images.unsplash.com/photo-1520970014086-2208d157c9e2?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Machu Picchu ancient stone walls in Andes mountains clouds',
    translations: {
      en: {
        categoryName: 'Inca Ashlar Masonry',
        title: 'Machu Picchu Earthquake Defense',
        fact: 'Machu Picchu stones were carved so perfectly that no mortar was needed, and not even a razor blade can slide between the colossal boulders.',
        takeaway: 'During earthquakes, the stones "dance" in place and settle back into their original positions.'
      },
      vi: {
        categoryName: 'Kiến trúc Inca',
        title: 'Machu Picchu chống động đất không dùng vữa',
        fact: 'Các khối đá của thành cổ Machu Picchu được mài nhẵn khớp khít đến mức không cần vữa, ngay cả lưỡi dao lam cũng không thể lách qua khe đá.',
        takeaway: 'Khi động đất xảy ra, những tảng đá rung lắc nhẹ tại chỗ rồi tự động trở về vị trí ban đầu mà không hề sụp đổ.'
      }
    }
  },
  {
    id: 'deck2-diamonds-9',
    suit: '♦',
    suitName: 'diamonds',
    rank: '9',
    cardNumber: 87,
    color: 'red',
    category: 'Vietnam Costume',
    imageUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Vietnamese traditional graceful Ao Dai silk dress',
    translations: {
      en: {
        categoryName: 'National Garment',
        title: 'The Elegance of the Áo Dài',
        fact: 'The Vietnamese Áo Dài features two flowing silk panels over loose trousers, engineered to celebrate graceful movement while remaining remarkably modest.',
        takeaway: 'Its modern form was influenced by the Lemur design created in Hanoi in the 1930s.'
      },
      vi: {
        categoryName: 'Quốc phục Việt Nam',
        title: 'Nét duyên dáng của tà Áo Dài',
        fact: 'Áo dài truyền thống Việt Nam với hai tà lụa thướt tha buông xuống quần dài tôn vinh nét đẹp thanh tao, vừa kín đáo vừa uyển chuyển.',
        takeaway: 'Kiểu dáng áo dài tân thời chịu ảnh hưởng từ mẫu áo dài Le Mur do họa sĩ Cát Tường sáng tạo tại Hà Nội thập niên 1930.'
      }
    }
  },
  {
    id: 'deck2-diamonds-10',
    suit: '♦',
    suitName: 'diamonds',
    rank: '10',
    cardNumber: 88,
    color: 'red',
    category: 'Mughal Architecture',
    imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Taj Mahal white marble monument reflection in pool',
    translations: {
      en: {
        categoryName: 'Marble Symphony',
        title: 'Taj Mahal’s Changing Colors',
        fact: 'The translucent white Makrana marble of the Taj Mahal reflects changing light: pinkish in dawn’s glow, milky white at noon, and golden under full moonlight.',
        takeaway: 'Poets famously compared this shifting color palette to the changing moods of Emperor Shah Jahan’s beloved empress.'
      },
      vi: {
        categoryName: 'Kiến trúc cẩm thạch',
        title: 'Lăng Taj Mahal đổi sắc theo ngày',
        fact: 'Đá cẩm thạch trắng Makrana của Taj Mahal biến ảo kỳ diệu: ửng hồng trong ánh bình minh, trắng muốt giữa trưa và vàng óng dưới trăng rằm.',
        takeaway: 'Các nhà thơ ví sự đổi màu này như những cung bậc cảm xúc của người vợ hiền mà hoàng đế Shah Jahan hết mực yêu thương.'
      }
    }
  },
  {
    id: 'deck2-diamonds-J',
    suit: '♦',
    suitName: 'diamonds',
    rank: 'J',
    cardNumber: 89,
    color: 'red',
    category: 'Vietnam Folk Arts',
    imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Traditional Vietnamese musical instruments and performance',
    translations: {
      en: {
        categoryName: 'Musical Poetry',
        title: 'Ca Trù: Chamber Music of Courtiers',
        fact: 'Recognized by UNESCO as intangible heritage, Ca Trù is a complex 1,000-year-old chamber art featuring a female vocalist singing while tapping the Phách clapper.',
        takeaway: 'The unique three-stringed Đàn Đáy lute was invented exclusively to accompany Ca Trù singing.'
      },
      vi: {
        categoryName: 'Nghệ thuật diễn xướng',
        title: 'Ca Trù: Âm nhạc bác học ngàn năm',
        fact: 'Được UNESCO ghi danh di sản phi vật thể, Ca Trù là bộ môn nghệ thuật thính phòng 1.000 năm tuổi với đào nương vừa hát vừa gõ phách điêu luyện.',
        takeaway: 'Cây đàn đáy 3 dây độc đáo với cần đàn dài được người Việt sáng chế riêng biệt chỉ để hòa tấu đệm cho Ca Trù.'
      }
    }
  },
  {
    id: 'deck2-diamonds-Q',
    suit: '♦',
    suitName: 'diamonds',
    rank: 'Q',
    cardNumber: 90,
    color: 'red',
    category: 'Ancient Masonry',
    imageUrl: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Great Wall of China winding across green mountains',
    translations: {
      en: {
        categoryName: 'Sticky Rice Mortar',
        title: 'The Sticky Rice Secret of the Great Wall',
        fact: 'During the Ming Dynasty, construction workers mixed sticky rice broth with slaked lime to create an adhesive mortar far stronger than standard cement.',
        takeaway: 'Amylopectin in the rice reacted with calcium carbonate to form a waterproof, shock-resistant seal that still stands today.'
      },
      vi: {
        categoryName: 'Vữa gạo nếp cổ đại',
        title: 'Bí mật gạo nếp của Vạn Lý Trường Thành',
        fact: 'Dưới thời nhà Minh, thợ xây đã trộn nước nấu gạo nếp dẻo với vôi tôi để tạo nên loại vữa kết dính bền chắc hơn cả xi măng hiện đại.',
        takeaway: 'Chất amylopectin trong gạo nếp tạo phản ứng hóa học kháng nước và chống chấn động giúp các khối gạch đá vững chãi qua bão táp.'
      }
    }
  },
  {
    id: 'deck2-diamonds-K',
    suit: '♦',
    suitName: 'diamonds',
    rank: 'K',
    cardNumber: 91,
    color: 'red',
    category: 'Mekong River',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Mekong River Delta emerald waterways and coconut trees',
    translations: {
      en: {
        categoryName: 'Nine Dragons Delta',
        title: 'Mekong Delta: Biodiversity Cradle',
        fact: 'The Mekong River Delta (Đồng bằng Sông Cửu Long) is one of Earth’s biological hotspots, with biologists discovering more than 2,500 new species there since 1997.',
        takeaway: 'It supplies over half of Vietnam’s total rice output and feeds millions across Asia.'
      },
      vi: {
        categoryName: 'Vùng đất Chín Rồng',
        title: 'Đồng bằng Sông Cửu Long',
        fact: 'Đồng bằng sông Cửu Long là một trong những cái nôi đa dạng sinh học hàng đầu Trái Đất, nơi các nhà khoa học đã phát hiện hơn 2.500 loài sinh vật mới từ năm 1997.',
        takeaway: 'Vùng châu thổ trù phú này sản xuất hơn một nửa tổng sản lượng lúa gạo nuôi sống hàng chục triệu người khắp châu Á.'
      }
    }
  },

  // ==========================================
  // CLUBS ♣ (Brain Hacks, Tech, Quantum & Odd Physics)
  // Cards 92 to 104
  // ==========================================
  {
    id: 'deck2-clubs-A',
    suit: '♣',
    suitName: 'clubs',
    rank: 'A',
    cardNumber: 92,
    color: 'black',
    category: 'Computing History',
    imageUrl: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Vintage retro circuit boards and memory chips glowing',
    translations: {
      en: {
        categoryName: 'Space Computing',
        title: 'Voyager 1’s Tiny 70KB Brain',
        fact: 'The Voyager 1 space probe has only 69.63 kilobytes of computer memory — less than the data required to store an average smartphone icon.',
        takeaway: 'Despite this, it has operated continuously for nearly 50 years and communicates across 24 billion kilometers.'
      },
      vi: {
        categoryName: 'Lịch sử máy tính',
        title: 'Bộ nhớ 70KB của Voyager 1',
        fact: 'Tàu thám hiểm Voyager 1 chỉ có 69,63 kilobyte bộ nhớ máy tính — còn ít hơn dung lượng của một biểu tượng icon trên điện thoại của bạn.',
        takeaway: 'Thế nhưng nó đã hoạt động bền bỉ gần 50 năm và vẫn gửi dữ liệu xuyên qua 24 tỷ km không gian.'
      }
    }
  },
  {
    id: 'deck2-clubs-2',
    suit: '♣',
    suitName: 'clubs',
    rank: '2',
    cardNumber: 93,
    color: 'black',
    category: 'Cryogenic Physics',
    imageUrl: 'https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Laser beams colliding with luminous trapped atom',
    translations: {
      en: {
        categoryName: 'Laser Cooling',
        title: 'Freezing Atoms with Laser Beams',
        fact: 'While lasers normally burn and heat materials, scientists use counter-propagating laser beams to slow atoms down to within billionths of a degree above absolute zero.',
        takeaway: 'Photons hit incoming atoms head-on, robbing them of kinetic energy like throwing ping pong balls at a bowling ball.'
      },
      vi: {
        categoryName: 'Vật lý nhiệt độ thấp',
        title: 'Làm lạnh nguyên tử bằng tia Laser',
        fact: 'Mặc dù tia laser thường đốt nóng vật thể, các nhà khoa học lại dùng laser bắn ngược chiều để phanh hãm nguyên tử tới gần sát độ không tuyệt đối (-273,15°C).',
        takeaway: 'Các hạt photon va chạm trực diện làm triệt tiêu động năng của nguyên tử một cách kỳ tài.'
      }
    }
  },
  {
    id: 'deck2-clubs-3',
    suit: '♣',
    suitName: 'clubs',
    rank: '3',
    cardNumber: 94,
    color: 'black',
    category: 'Quantum Entanglement',
    imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Two entangled glowing particles connected by quantum filament',
    translations: {
      en: {
        categoryName: 'Quantum Paradox',
        title: 'Spooky Action at a Distance',
        fact: 'Entangled quantum particles mirror each other’s states instantaneously, even if they are placed on opposite sides of the universe.',
        takeaway: 'Albert Einstein famously rejected this consequence of quantum mechanics, calling it "spooky action at a distance".'
      },
      vi: {
        categoryName: 'Nghịch lý lượng tử',
        title: 'Tác động ma quỷ từ khoảng cách xa',
        fact: 'Hai hạt vướng víu lượng tử phản ánh trạng thái của nhau ngay lập tức trong nháy mắt, dù chúng bị đặt ở hai đầu tận cùng của vũ trụ.',
        takeaway: 'Albert Einstein từng hoài nghi và gọi hiện tượng khó tin này là "tác động ma quỷ từ khoảng cách xa".'
      }
    }
  },
  {
    id: 'deck2-clubs-4',
    suit: '♣',
    suitName: 'clubs',
    rank: '4',
    cardNumber: 95,
    color: 'black',
    category: 'Nanotechnology',
    imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Hexagonal carbon graphene lattice sparkling',
    translations: {
      en: {
        categoryName: 'Supermaterials',
        title: 'Graphene: 200x Stronger Than Steel',
        fact: 'Graphene is a single layer of carbon atoms arranged in a honeycomb lattice. It is 200 times stronger than structural steel while being virtually transparent.',
        takeaway: 'It would take an elephant balanced on a pencil tip to pierce a single sheet of plastic wrap made of graphene.'
      },
      vi: {
        categoryName: 'Siêu vật liệu',
        title: 'Graphene: Bền gấp 200 lần thép',
        fact: 'Graphene chỉ dày đúng 1 lớp nguyên tử carbon theo mạng tổ ong. Nó bền gấp 200 lần thép tôi luyện trong khi gần như trong suốt hoàn toàn.',
        takeaway: 'Phải cần sức nặng của một con voi đứng thăng bằng trên đầu bút chì mới có thể chọc thủng một màng graphene siêu mỏng.'
      }
    }
  },
  {
    id: 'deck2-clubs-5',
    suit: '♣',
    suitName: 'clubs',
    rank: '5',
    cardNumber: 96,
    color: 'black',
    category: 'Cellular Renewal',
    imageUrl: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Microscopic human cells dividing in luminous blue matrix',
    translations: {
      en: {
        categoryName: 'Human Body Renewal',
        title: 'You are Rebuilt Every 7 to 10 Years',
        fact: 'About 330 billion cells in your body are replaced every day. Over a span of roughly 7 to 10 years, almost every cell in your body has been regenerated.',
        takeaway: 'Only a few structures, like the cerebral cortex neurons and eye lens proteins, stay with you throughout life.'
      },
      vi: {
        categoryName: 'Tái tạo tế bào',
        title: 'Cơ thể bạn được làm mới mỗi 7-10 năm',
        fact: 'Khoảng 330 tỷ tế bào trong cơ thể bạn được thay mới mỗi ngày. Sau khoảng 7 đến 10 năm, gần như toàn bộ tế bào cũ đã được thay thế hoàn toàn.',
        takeaway: 'Chỉ có một số ít tế bào như nơ-ron vỏ não và protein thể thủy tinh mắt là đồng hành cùng bạn từ khi sinh ra.'
      }
    }
  },
  {
    id: 'deck2-clubs-6',
    suit: '♣',
    suitName: 'clubs',
    rank: '6',
    cardNumber: 97,
    color: 'black',
    category: 'Aerogel',
    imageUrl: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Aerogel translucent blue block floating over flame unharmed',
    translations: {
      en: {
        categoryName: 'Frozen Smoke',
        title: 'Aerogel: 99.8% Pure Air',
        fact: 'Aerogel is the world’s lightest solid material, composed of 99.8% air. Nicknamed "frozen smoke", it can withstand a direct blowtorch without transferring heat.',
        takeaway: 'NASA used aerogel collectors on the Stardust spacecraft to trap cometary dust particles traveling at bullet speeds.'
      },
      vi: {
        categoryName: 'Khói đông kỳ lạ',
        title: 'Aerogel: 99,8% là không khí',
        fact: 'Aerogel là chất rắn nhẹ nhất thế giới với 99,8% thể tích là không khí. Được mệnh danh là "khói đóng băng", nó chịu được ngọn lửa khò trực tiếp mà không truyền nhiệt.',
        takeaway: 'NASA đã dùng tấm aerogel trên tàu Stardust để tóm gọn các hạt bụi sao chổi đang lao vun vút như đạn bắn.'
      }
    }
  },
  {
    id: 'deck2-clubs-7',
    suit: '♣',
    suitName: 'clubs',
    rank: '7',
    cardNumber: 98,
    color: 'black',
    category: 'Insect Communication',
    imageUrl: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Honeybees communicating on golden honey comb',
    translations: {
      en: {
        categoryName: 'Animal Code',
        title: 'The Honeybee Waggle Dance',
        fact: 'Honeybees communicate the precise GPS coordinates of nectar flowers miles away by performing a figure-eight "waggle dance" inside the hive.',
        takeaway: 'The angle of the waggle relative to vertical indicates the exact flight direction relative to the Sun.'
      },
      vi: {
        categoryName: 'Ngôn ngữ loài ong',
        title: 'Điệu nhảy lắc bụng của ong mật',
        fact: 'Ong mật truyền tải tọa độ chính xác của vườn hoa cách xa nhiều cây số cho đồng loại bằng "điệu nhảy lắc bụng" hình số 8 trong tổ.',
        takeaway: 'Góc nghiêng của điệu nhảy so với phương thẳng đứng chỉ rõ hướng bay chính xác theo vị trí Mặt Trời.'
      }
    }
  },
  {
    id: 'deck2-clubs-8',
    suit: '♣',
    suitName: 'clubs',
    rank: '8',
    cardNumber: 99,
    color: 'black',
    category: 'Cloud Physics',
    imageUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Fluffy white cumulus cloud floating in bright blue sky',
    translations: {
      en: {
        categoryName: 'Atmosphere Weight',
        title: 'A Cloud Weighs 500,000 Kilograms',
        fact: 'An average fluffy white cumulus cloud floating peacefully in the sky weighs about 500,000 kg (1.1 million lbs) — roughly the weight of 100 elephants.',
        takeaway: 'It stays afloat because that immense mass is spread across billions of microscopic water droplets supported by warm updrafts.'
      },
      vi: {
        categoryName: 'Trọng lượng mây',
        title: 'Đám mây nặng tới 500 tấn',
        fact: 'Một đám mây tích trắng bồng bềnh lơ lửng trên bầu trời nặng khoảng 500.000 kg (500 tấn) — tương đương sức nặng của 100 con voi.',
        takeaway: 'Nó không rơi xuống vì khối lượng khổng lồ đó phân tán thành hàng tỷ giọt nước li ti được các luồng khí ấm nâng đỡ.'
      }
    }
  },
  {
    id: 'deck2-clubs-9',
    suit: '♣',
    suitName: 'clubs',
    rank: '9',
    cardNumber: 100,
    color: 'black',
    category: 'Speed of Light',
    imageUrl: 'https://images.unsplash.com/photo-1541278107931-e006523892df?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Golden playing card glowing luminous hundred celebration',
    translations: {
      en: {
        categoryName: 'Card #100 Milestone',
        title: '7.5 Earth Laps in One Second',
        fact: 'At 299,792 km/s (186,282 mi/s), light travels so fast that in the single second it took you to read this card, a photon circled Earth 7.5 times.',
        takeaway: 'Yet across cosmic distances, light is so slow it takes 100,000 years just to cross the width of our Milky Way.'
      },
      vi: {
        categoryName: 'Cột mốc lá bài #100',
        title: '7,5 vòng Trái Đất trong 1 giây',
        fact: 'Với tốc độ 299.792 km/s, ánh sáng di chuyển nhanh đến mức trong đúng 1 giây bạn đọc lá bài này, một photon đã kịp bay 7,5 vòng quanh Trái Đất.',
        takeaway: 'Thế nhưng giữa quy mô vũ trụ, ánh sáng lại mất tới 100.000 năm mới băng qua hết chiều dài của dải Ngân Hà.'
      }
    }
  },
  {
    id: 'deck2-clubs-10',
    suit: '♣',
    suitName: 'clubs',
    rank: '10',
    cardNumber: 101,
    color: 'black',
    category: 'Quantum Computing',
    imageUrl: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Golden quantum computer chandelier dilution refrigerator',
    translations: {
      en: {
        categoryName: 'Superposition',
        title: 'The Superposition of Qubits',
        fact: 'While regular computer bits are strictly 0 or 1, quantum qubits can exist in a superposition of both simultaneously, allowing exponential parallelism.',
        takeaway: 'A quantum computer with just 300 perfectly entangled qubits could map more values than there are atoms in the entire observable universe.'
      },
      vi: {
        categoryName: 'Tính toán lượng tử',
        title: 'Trạng thái chồng chập của Qubit',
        fact: 'Trong khi bit máy tính thông thường chỉ là 0 hoặc 1, các qubit lượng tử có thể tồn tại ở cả hai trạng thái cùng lúc, cho phép tính toán song song thần tốc.',
        takeaway: 'Một máy tính lượng tử chỉ với 300 qubit vướng víu hoàn hảo có thể biểu diễn nhiều giá trị hơn tổng số nguyên tử trong toàn vũ trụ.'
      }
    }
  },
  {
    id: 'deck2-clubs-J',
    suit: '♣',
    suitName: 'clubs',
    rank: 'J',
    cardNumber: 102,
    color: 'black',
    category: 'Earth Aromas',
    imageUrl: 'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Fresh raindrops hitting dry earth ground',
    translations: {
      en: {
        categoryName: 'Olfactory Chemistry',
        title: 'Petrichor: The Rain Scent',
        fact: 'The beloved earthy scent after rain on dry soil is called petrichor. Humans are extraordinarily sensitive to it, detecting the compound geosmin at 5 parts per trillion.',
        takeaway: 'Humans are more sensitive to geosmin than sharks are to blood in ocean water.'
      },
      vi: {
        categoryName: 'Hóa học mùi hương',
        title: 'Mùi hương đất sau cơn mưa: Petrichor',
        fact: 'Mùi thơm dịu ngọt của đất sau cơn mưa rào được gọi là Petrichor. Con người nhạy cảm với nó đến mức ngửi thấy hợp chất geosmin ở tỷ lệ 5 phần nghìn tỷ.',
        takeaway: 'Khứu giác con người nhạy với mùi geosmin của mưa hơn cả cá mập đánh hơi thấy máu trong nước biển.'
      }
    }
  },
  {
    id: 'deck2-clubs-Q',
    suit: '♣',
    suitName: 'clubs',
    rank: 'Q',
    cardNumber: 103,
    color: 'black',
    category: 'Human Chemistry',
    imageUrl: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Microscopic chemical reaction bubbling in clear flask',
    translations: {
      en: {
        categoryName: 'Digestive Power',
        title: 'Stomach Acid Dissolves Razor Blades',
        fact: 'Human gastric acid consists of concentrated hydrochloric acid with a pH between 1.0 and 2.0 — strong enough to dissolve single-edge razor blades in 24 hours.',
        takeaway: 'Your stomach protects itself by generating a fresh lining of epithelial mucus every few days.'
      },
      vi: {
        categoryName: 'Hóa học cơ thể',
        title: 'Axit dạ dày hòa tan kim loại',
        fact: 'Axit dịch vị dạ dày người là axit clohidric đậm đặc với độ pH từ 1,0 đến 2,0 — đủ mạnh để làm tan biến một lưỡi dao cạo kim loại sau 24 giờ.',
        takeaway: 'Dạ dày tự bảo vệ mình không bị ăn mòn bằng cách liên tục tiết ra lớp màng nhầy niêm mạc mới vài ngày một lần.'
      }
    }
  },
  {
    id: 'deck2-clubs-K',
    suit: '♣',
    suitName: 'clubs',
    rank: 'K',
    cardNumber: 104,
    color: 'black',
    category: 'Cosmic Network',
    imageUrl: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Cosmic web filaments glowing like human neural brain synapses',
    translations: {
      en: {
        categoryName: 'Universal Fractal',
        title: 'Cosmic Web vs. Human Brain',
        fact: 'Astrophysicists analyzing the large-scale "cosmic web" of dark matter filaments found its network topology is statistically identical to the neural network of the human brain.',
        takeaway: 'Though separated by 27 orders of magnitude in size, both systems evolved along identical self-organizing network principles.'
      },
      vi: {
        categoryName: 'Mạng lưới vạn vật',
        title: 'Mạng lưới Vũ trụ và Bộ não con người',
        fact: 'Các nhà vật lý thiên văn phân tích "mạng lưới vũ trụ" của vật chất tối phát hiện cấu trúc topo của nó giống hệt cấu trúc mạng nơ-ron trong bộ não người.',
        takeaway: 'Dù chênh lệch kích thước tới 27 bậc độ lớn, cả hai hệ thống đều tự tổ chức theo cùng một quy luật mạng lưới kỳ diệu.'
      }
    }
  }
];
