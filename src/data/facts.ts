import { FactCard } from '../types/card';

export const DECK_OF_52_FACTS: FactCard[] = [
  // ==========================================
  // SPADES ♠ (Universe & Deep Space)
  // ==========================================
  {
    id: 'spades-A',
    suit: '♠',
    suitName: 'spades',
    rank: 'A',
    cardNumber: 1,
    color: 'black',
    category: 'Deep Space',
    imageUrl: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Deep space galaxy and nebula',
    translations: {
      en: {
        categoryName: 'Cosmos',
        title: 'Neutron Star Density',
        fact: 'A single teaspoon of matter from a neutron star would weigh about 6 billion tons on Earth.',
        takeaway: 'Their density is comparable to packing the entire Mount Everest into a marble.'
      },
      vi: {
        categoryName: 'Vũ trụ',
        title: 'Mật độ sao Neutron',
        fact: 'Một thìa cà phê vật chất từ sao neutron có trọng lượng lên tới khoảng 6 tỷ tấn trên Trái Đất.',
        takeaway: 'Mật độ này tương đương với việc nén cả đỉnh Everest vào kích thước một viên bi.'
      }
    }
  },
  {
    id: 'spades-2',
    suit: '♠',
    suitName: 'spades',
    rank: '2',
    cardNumber: 2,
    color: 'black',
    category: 'Solar System',
    imageUrl: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Planet Venus in the solar system',
    translations: {
      en: {
        categoryName: 'Planets',
        title: 'Venusian Time Warps',
        fact: 'A day on Venus is longer than a year on Venus. It takes 243 Earth days to rotate once, but only 225 days to orbit the Sun.',
        takeaway: 'Venus also rotates backwards compared to most planets in our Solar System.'
      },
      vi: {
        categoryName: 'Hành tinh',
        title: 'Nghịch lý thời gian trên Sao Kim',
        fact: 'Một ngày trên Sao Kim dài hơn cả một năm. Nó mất 243 ngày Trái Đất để tự quay một vòng, nhưng chỉ mất 225 ngày để quay quanh Mặt Trời.',
        takeaway: 'Sao Kim còn tự quay ngược chiều so với hầu hết các hành tinh khác trong Hệ Mặt Trời.'
      }
    }
  },
  {
    id: 'spades-3',
    suit: '♠',
    suitName: 'spades',
    rank: '3',
    cardNumber: 3,
    color: 'black',
    category: 'The Moon',
    imageUrl: 'https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Moon surface and crater',
    translations: {
      en: {
        categoryName: 'Lunar Science',
        title: 'Eternal Lunar Footprints',
        fact: 'Footprints left by Apollo astronauts will stay on the Moon for at least 100 million years because there is no wind or water erosion.',
        takeaway: 'The only thing that will eventually wipe them away is tiny micrometeorite bombardment.'
      },
      vi: {
        categoryName: 'Mặt Trăng',
        title: 'Dấu chân vĩnh cửu trên Mặt Trăng',
        fact: 'Dấu chân của các phi hành gia Apollo sẽ tồn tại trên Mặt Trăng ít nhất 100 triệu năm vì ở đó không có gió hay nước để bào mòn.',
        takeaway: 'Thứ duy nhất có thể xóa chúng là sự bắn phá chậm chạp của các thiên thạch siêu nhỏ.'
      }
    }
  },
  {
    id: 'spades-4',
    suit: '♠',
    suitName: 'spades',
    rank: '4',
    cardNumber: 4,
    color: 'black',
    category: 'Planets',
    imageUrl: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Jupiter swirling storms and Great Red Spot',
    translations: {
      en: {
        categoryName: 'Jupiter',
        title: "The King's Great Red Spot",
        fact: "Jupiter's Great Red Spot is a colossal anticyclonic storm that has been raging for over 350 years and is larger than Earth itself.",
        takeaway: 'Winds inside the storm reach furious speeds of up to 432 km/h (268 mph).'
      },
      vi: {
        categoryName: 'Sao Mộc',
        title: 'Vết Đỏ Lớn khổng lồ',
        fact: 'Vết Đỏ Lớn của sao Mộc là một cơn bão nghịch khổng lồ đã gầm rú hơn 350 năm và có kích thước nuốt chửng cả Trái Đất.',
        takeaway: 'Gió bên trong tâm bão đạt tốc độ kinh hoàng lên tới 432 km/h.'
      }
    }
  },
  {
    id: 'spades-5',
    suit: '♠',
    suitName: 'spades',
    rank: '5',
    cardNumber: 5,
    color: 'black',
    category: 'Sun & Stars',
    imageUrl: 'https://images.unsplash.com/photo-1538370965046-79c0d6907d47?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Blazing Sun atmosphere and solar flares',
    translations: {
      en: {
        categoryName: 'Solar Physics',
        title: "The Sun's Sheer Dominance",
        fact: 'The Sun accounts for 99.86% of all mass in our entire Solar System, with Jupiter and Saturn making up most of the remaining 0.14%.',
        takeaway: 'About 1.3 million Earths could fit inside the Sun.'
      },
      vi: {
        categoryName: 'Thái Dương Hệ',
        title: 'Sự thống trị của Mặt Trời',
        fact: 'Mặt Trời chiếm tới 99,86% toàn bộ khối lượng của cả Hệ Mặt Trời, Trái Đất cùng các hành tinh chỉ chiếm phần nhỏ còn lại.',
        takeaway: 'Khoảng 1,3 triệu Trái Đất có thể nằm gọn trong lòng Mặt Trời.'
      }
    }
  },
  {
    id: 'spades-6',
    suit: '♠',
    suitName: 'spades',
    rank: '6',
    cardNumber: 6,
    color: 'black',
    category: 'Deep Space',
    imageUrl: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Astronaut floating in silent vacuum of space',
    translations: {
      en: {
        categoryName: 'Cosmos',
        title: 'The Terrifying Silence of Space',
        fact: 'Outer space is completely silent. Sound waves require matter like air or water to propagate; in the vacuum of space, nothing makes a sound.',
        takeaway: 'Radio waves can still travel through the vacuum, which is how astronauts speak to Earth.'
      },
      vi: {
        categoryName: 'Vũ trụ',
        title: 'Sự tĩnh lặng tuyệt đối',
        fact: 'Vũ trụ hoàn toàn im lặng. Sóng âm cần môi trường vật chất như không khí để truyền tải; trong chân không, không tiếng động nào tồn tại.',
        takeaway: 'Sóng vô tuyến vẫn di chuyển tự do trong chân không, giúp các phi hành gia đàm thoại với mặt đất.'
      }
    }
  },
  {
    id: 'spades-7',
    suit: '♠',
    suitName: 'spades',
    rank: '7',
    cardNumber: 7,
    color: 'black',
    category: 'Exoplanets',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Exoplanet surface with diamond crystal sheen',
    translations: {
      en: {
        categoryName: 'Exoplanets',
        title: 'The Diamond Super-Earth',
        fact: 'The exoplanet 55 Cancri e is twice the size of Earth and is believed to have a surface made largely of graphite and sparkling diamond.',
        takeaway: 'Its immense internal pressure and carbon-rich composition turn carbon straight into diamond.'
      },
      vi: {
        categoryName: 'Ngoại hành tinh',
        title: 'Hành tinh kim cương 55 Cancri e',
        fact: 'Hành tinh 55 Cancri e có kích thước gấp đôi Trái Đất và bề mặt được cho là cấu tạo chủ yếu từ than chì và kim cương nguyên khối.',
        takeaway: 'Nhiệt độ cực hạn và áp suất khổng lồ đã nén cácbon thành kim cương tự nhiên.'
      }
    }
  },
  {
    id: 'spades-8',
    suit: '♠',
    suitName: 'spades',
    rank: '8',
    cardNumber: 8,
    color: 'black',
    category: 'Physics in Orbit',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Earth viewed from International Space Station',
    translations: {
      en: {
        categoryName: 'Physics',
        title: 'Cold Welding Magic',
        fact: 'If two pieces of the exact same metal touch in the vacuum of space, they will fuse and bond together permanently without heat.',
        takeaway: 'Without air or oxide layers separating them, the atoms have no way of knowing they are different pieces.'
      },
      vi: {
        categoryName: 'Vật lý không gian',
        title: 'Hiện tượng hàn lạnh kỳ lạ',
        fact: 'Nếu hai miếng kim loại cùng loại chạm vào nhau trong môi trường chân không vũ trụ, chúng sẽ lập tức hàn dính vĩnh viễn mà không cần lửa.',
        takeaway: 'Vì không có lớp ô-xít hay không khí ngăn cách, các nguyên tử tự nhận nhau là một khối duy nhất.'
      }
    }
  },
  {
    id: 'spades-9',
    suit: '♠',
    suitName: 'spades',
    rank: '9',
    cardNumber: 9,
    color: 'black',
    category: 'Astrophysics',
    imageUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Golden sunlight beams across sky',
    translations: {
      en: {
        categoryName: 'Light & Time',
        title: '8-Minute Old Sunlight',
        fact: 'Sunlight striking your face right now left the surface of the Sun approximately 8 minutes and 20 seconds ago.',
        takeaway: 'However, that same photon took tens of thousands of years to travel from the Sun’s core to its surface!'
      },
      vi: {
        categoryName: 'Quang học vũ trụ',
        title: 'Ánh nắng từ quá khứ',
        fact: 'Tia nắng đang chạm vào da bạn lúc này đã rời khỏi bề mặt Mặt Trời cách đây khoảng 8 phút và 20 giây.',
        takeaway: 'Nhưng hạt photon đó đã mất hàng chục ngàn năm để len lỏi từ lõi Mặt Trời ra đến bề mặt!'
      }
    }
  },
  {
    id: 'spades-10',
    suit: '♠',
    suitName: 'spades',
    rank: '10',
    cardNumber: 10,
    color: 'black',
    category: 'Mars',
    imageUrl: 'https://images.unsplash.com/photo-1612892483236-52d32a0e0ac1?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Red planet Mars rocky dunes and horizon',
    translations: {
      en: {
        categoryName: 'Mars Exploration',
        title: 'Blue Sunsets on the Red Planet',
        fact: 'Sunsets on Mars appear eerie blue to human eyes, because fine atmospheric dust scatters red light away while letting blue light penetrate.',
        takeaway: 'The exact reverse happens on Earth, where our sky is blue but sunsets are fiery red.'
      },
      vi: {
        categoryName: 'Sao Hỏa',
        title: 'Hoàng hôn xanh trên hành tinh Đỏ',
        fact: 'Hoàng hôn trên sao Hỏa có màu xanh lam ma mị, do các hạt bụi mịn trong khí quyển phân tán ánh sáng đỏ và cho ánh sáng xanh đi qua.',
        takeaway: 'Ngược lại với Trái Đất: bầu trời của chúng ta màu xanh nhưng hoàng hôn lại đỏ rực.'
      }
    }
  },
  {
    id: 'spades-J',
    suit: '♠',
    suitName: 'spades',
    rank: 'J',
    cardNumber: 11,
    color: 'black',
    category: 'Interstellar',
    imageUrl: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Satellite in deep interstellar space',
    translations: {
      en: {
        categoryName: 'Voyager Mission',
        title: 'The Interstellar Golden Record',
        fact: 'Voyager 1 carries a gold-plated phonograph record containing sounds of thunder, animal calls, and greetings in 55 languages.',
        takeaway: 'It is the farthest human-made object from Earth, traveling over 61,000 km/h in interstellar space.'
      },
      vi: {
        categoryName: 'Sứ mệnh Voyager',
        title: 'Đĩa ghi vàng giữa không gian',
        fact: 'Tàu Voyager 1 mang theo chiếc đĩa mạ vàng chứa âm thanh sấm sét, tiếng chim muông và lời chào bằng 55 ngôn ngữ nhân loại.',
        takeaway: 'Đây là vật thể nhân tạo xa nhất cách Trái Đất, đang bay với tốc độ hơn 61.000 km/h ngoài hệ sao.'
      }
    }
  },
  {
    id: 'spades-Q',
    suit: '♠',
    suitName: 'spades',
    rank: 'Q',
    cardNumber: 12,
    color: 'black',
    category: 'Relativity',
    imageUrl: 'https://images.unsplash.com/photo-1543722530-d2c3201371e7?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Abstract gravitational black hole warping space time',
    translations: {
      en: {
        categoryName: 'Black Holes',
        title: 'Time Freezes Near Black Holes',
        fact: 'As you approach the event horizon of a supermassive black hole, gravitational time dilation slows your time relative to outside observers.',
        takeaway: 'To someone watching from afar, you would appear to slow down and freeze in place forever.'
      },
      vi: {
        categoryName: 'Lỗ đen',
        title: 'Thời gian ngưng đọng',
        fact: 'Khi tiếp cận chân trời sự kiện của lỗ đen khổng lồ, hiệu ứng giãn nở thời gian do hấp dẫn khiến thời gian của bạn chậm lại cực độ.',
        takeaway: 'Với người quan sát ở xa, hình ảnh của bạn như dần đóng băng vĩnh cửu tại chân trời sự kiện.'
      }
    }
  },
  {
    id: 'spades-K',
    suit: '♠',
    suitName: 'spades',
    rank: 'K',
    cardNumber: 13,
    color: 'black',
    category: 'Galaxies',
    imageUrl: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Milky Way galaxy night sky',
    translations: {
      en: {
        categoryName: 'Cosmic Collision',
        title: 'The Great Galactic Merger',
        fact: 'In about 4.5 billion years, the Andromeda Galaxy and our Milky Way will collide to form one giant elliptical galaxy nicknamed "Milkomeda".',
        takeaway: 'Because space is mostly empty, stars will almost never directly hit each other.'
      },
      vi: {
        categoryName: 'Thiên hà',
        title: 'Đại va chạm Thiên hà',
        fact: 'Khoảng 4,5 tỷ năm nữa, Thiên hà Tiên Nữ và Ngân Hà sẽ va chạm để hợp nhất thành một siêu thiên hà mang tên "Milkomeda".',
        takeaway: 'Vì khoảng cách giữa các ngôi sao quá lớn, gần như không có ngôi sao nào thực sự đâm trực diện vào nhau.'
      }
    }
  },

  // ==========================================
  // HEARTS ♥ (Animals, Nature & Living Wonders)
  // ==========================================
  {
    id: 'hearts-A',
    suit: '♥',
    suitName: 'hearts',
    rank: 'A',
    cardNumber: 14,
    color: 'red',
    category: 'Marine Biology',
    imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Giant blue whale swimming under water',
    translations: {
      en: {
        categoryName: 'Ocean Giants',
        title: 'The Whale Engine',
        fact: 'The heart of a blue whale weighs roughly 180 kg (400 lbs) — about the size of a golf cart. Its heartbeat can be detected two miles away.',
        takeaway: 'Its main aorta is so wide that a human toddler could crawl through it.'
      },
      vi: {
        categoryName: 'Đại dương',
        title: 'Trái tim cá voi xanh',
        fact: 'Trái tim cá voi xanh nặng khoảng 180 kg, to bằng một chiếc xe nhỏ. Tiếng đập của nó có thể được phát hiện từ khoảng cách hơn 3 km.',
        takeaway: 'Động mạch chủ của nó lớn đến mức một đứa trẻ có thể bò lọt qua.'
      }
    }
  },
  {
    id: 'hearts-2',
    suit: '♥',
    suitName: 'hearts',
    rank: '2',
    cardNumber: 15,
    color: 'red',
    category: 'Creatures',
    imageUrl: 'https://images.unsplash.com/photo-1545671913-b89ac1b4ac10?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Octopus tentacles under ocean blue water',
    translations: {
      en: {
        categoryName: 'Octopus Wonders',
        title: 'Three Hearts, Blue Blood',
        fact: 'Octopuses possess three distinct hearts and blue blood. Two hearts pump blood to the gills, while the third circulates blood through organs.',
        takeaway: 'When an octopus swims, the systemic heart stops beating, which is why they prefer crawling.'
      },
      vi: {
        categoryName: 'Sinh vật biển',
        title: 'Ba trái tim và dòng máu xanh',
        fact: 'Bạch tuộc sở hữu tới 3 trái tim và máu màu xanh lam. Hai tim bơm máu lên mang, quả tim thứ ba bơm máu đi nuôi khắp cơ thể.',
        takeaway: 'Khi bạch tuộc bơi, quả tim chính sẽ tạm ngừng đập, vì vậy chúng thích bò trên đáy biển hơn.'
      }
    }
  },
  {
    id: 'hearts-3',
    suit: '♥',
    suitName: 'hearts',
    rank: '3',
    cardNumber: 16,
    color: 'red',
    category: 'Biology',
    imageUrl: 'https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Glowing translucent jellyfish underwater',
    translations: {
      en: {
        categoryName: 'Biological Immortality',
        title: 'The Immortal Jellyfish',
        fact: 'Turritopsis dohrnii is capable of reverting from an adult jellyfish back into a juvenile polyp colony when injured or starving.',
        takeaway: 'This transdifferentiation process theoretically allows it to live indefinitely.'
      },
      vi: {
        categoryName: 'Bí ẩn sinh học',
        title: 'Sứa bất tử',
        fact: 'Loài sứa Turritopsis dohrnii có khả năng kỳ diệu: khi già hoặc bị thương, nó đảo ngược chu kỳ tế bào để trở về dạng ấu trùng.',
        takeaway: 'Về mặt lý thuyết sinh học, chu trình "cải lão hoàn đồng" này có thể lặp lại vô tận.'
      }
    }
  },
  {
    id: 'hearts-4',
    suit: '♥',
    suitName: 'hearts',
    rank: '4',
    cardNumber: 17,
    color: 'red',
    category: 'Birds',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Vibrant pink flamingo in reflection of lake',
    translations: {
      en: {
        categoryName: 'Birds',
        title: 'The Flamingo Diet Secret',
        fact: 'Flamingos are born with dull gray feathers. They turn pink solely because their diet is packed with beta-carotene from brine shrimp and algae.',
        takeaway: 'If deprived of carotene-rich food in captivity, their plumage turns white.'
      },
      vi: {
        categoryName: 'Loài chim',
        title: 'Bí mật màu hồng của Hồng Hạc',
        fact: 'Chim hồng hạc khi sinh ra có bộ lông màu xám nhạt. Chúng chuyển sang sắc hồng rực rỡ chỉ nhờ ăn tôm ngâm và tảo giàu sắc tố carotene.',
        takeaway: 'Nếu thiếu chế độ ăn giàu carotene trong vườn thú, lông của chúng sẽ dần chuyển sang màu trắng.'
      }
    }
  },
  {
    id: 'hearts-5',
    suit: '♥',
    suitName: 'hearts',
    rank: '5',
    cardNumber: 18,
    color: 'red',
    category: 'Animal Intelligence',
    imageUrl: 'https://images.unsplash.com/photo-1528659582531-152e92cbbec4?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Black crow perched intelligently on branch',
    translations: {
      en: {
        categoryName: 'Avian Mind',
        title: 'Crows Remember Grudges',
        fact: 'Crows remember human faces for years. If a human threatens them, they will caw alarms and teach their chicks to harass that specific person.',
        takeaway: 'They have problem-solving skills comparable to a 7-year-old human child.'
      },
      vi: {
        categoryName: 'Trí thông minh loài vật',
        title: 'Quạ ghi thù nhớ mặt',
        fact: 'Loài quạ ghi nhớ gương mặt con người nhiều năm. Nếu bị đe dọa, chúng sẽ ghi nhớ khuôn mặt đó và dạy con cháu tiếp tục cảnh giác kẻ đó.',
        takeaway: 'Khả năng giải quyết câu đố của quạ được đánh giá tương đương đứa trẻ 7 tuổi.'
      }
    }
  },
  {
    id: 'hearts-6',
    suit: '♥',
    suitName: 'hearts',
    rank: '6',
    cardNumber: 19,
    color: 'red',
    category: 'Rainforest',
    imageUrl: 'https://images.unsplash.com/photo-1505148230895-d9a785a555fa?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Cute sloth hanging upside down in green forest canopy',
    translations: {
      en: {
        categoryName: 'Forest Life',
        title: 'The Sloth Month-Long Feast',
        fact: 'A sloth has the slowest metabolic rate of any non-hibernating mammal. It can take up to 30 days to digest a single leaf.',
        takeaway: 'Two-thirds of a sloth’s body weight can be the contents of its stomach.'
      },
      vi: {
        categoryName: 'Rừng nhiệt đới',
        title: 'Bữa ăn cả tháng của chú lười',
        fact: 'Con lười có tốc độ trao đổi chất chậm nhất trong số các loài có vú. Chúng có thể mất tới 30 ngày chỉ để tiêu hóa xong một chiếc lá.',
        takeaway: 'Thức ăn trong dạ dày có thể chiếm tới hai phần ba tổng trọng lượng cơ thể của nó.'
      }
    }
  },
  {
    id: 'hearts-7',
    suit: '♥',
    suitName: 'hearts',
    rank: '7',
    cardNumber: 20,
    color: 'red',
    category: 'Nature Chemistry',
    imageUrl: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Golden honey pouring from dipper with honeycomb',
    translations: {
      en: {
        categoryName: 'Food Chemistry',
        title: 'The Immortal Honey Pot',
        fact: 'Archaeologists excavating ancient Egyptian tombs found 3,000-year-old pots of honey that are still completely edible and sweet.',
        takeaway: 'Its low moisture content and natural acidity create an inhospitable environment for bacteria.'
      },
      vi: {
        categoryName: 'Kỳ quan hóa học',
        title: 'Hũ mật ong nghìn năm không hỏng',
        fact: 'Các nhà khảo cổ khai quật lăng mộ Ai Cập cổ đại đã tìm thấy những hũ mật ong 3.000 năm tuổi vẫn ngọt lành và ăn được bình thường.',
        takeaway: 'Độ ẩm cực thấp cùng tính axit tự nhiên khiến vi khuẩn không thể nào sinh sôi trong mật ong.'
      }
    }
  },
  {
    id: 'hearts-8',
    suit: '♥',
    suitName: 'hearts',
    rank: '8',
    cardNumber: 21,
    color: 'red',
    category: 'Marine Mammals',
    imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Sea otters floating on water together',
    translations: {
      en: {
        categoryName: 'Ocean Life',
        title: 'Otters Holding Hands',
        fact: 'Sea otters hold hands while resting or sleeping in coastal waters to prevent ocean currents from drifting them apart.',
        takeaway: 'They also wrap themselves in giant kelp forests as natural anchors.'
      },
      vi: {
        categoryName: 'Sinh vật biển',
        title: 'Rái cá nắm tay khi ngủ',
        fact: 'Rái cá biển có thói quen nắm chặt tay nhau khi trôi nổi ngủ trên mặt biển để không bị dòng hải lưu cuốn trôi lạc mất nhau.',
        takeaway: 'Chúng cũng thường quấn thân mình vào những tán rong biển khổng lồ như một chiếc mỏ neo tự nhiên.'
      }
    }
  },
  {
    id: 'hearts-9',
    suit: '♥',
    suitName: 'hearts',
    rank: '9',
    cardNumber: 22,
    color: 'red',
    category: 'Animal Emotions',
    imageUrl: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Cows resting in green meadow with flowers',
    translations: {
      en: {
        categoryName: 'Animal Empathy',
        title: 'Cows Have Best Friends',
        fact: 'Research shows cows form close emotional bonds with specific companions. When separated from their best friends, their stress levels spike.',
        takeaway: 'Their heart rates drop and cortisol levels stabilize immediately when reunited.'
      },
      vi: {
        categoryName: 'Cảm xúc loài vật',
        title: 'Những chú bò có bạn thân',
        fact: 'Nghiên cứu khoa học chứng minh bò kết bạn thân thiết. Khi bị tách khỏi người bạn thân nhất, nhịp tim và độ căng thẳng của chúng tăng vọt.',
        takeaway: 'Chỉ số hormone cortisol và nhịp tim của chúng dịu lại ngay khi được hội ngộ bên bạn thân.'
      }
    }
  },
  {
    id: 'hearts-10',
    suit: '♥',
    suitName: 'hearts',
    rank: '10',
    cardNumber: 23,
    color: 'red',
    category: 'Birds',
    imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Small emerald hummingbird in mid-air flight',
    translations: {
      en: {
        categoryName: 'Aerodynamics',
        title: 'The Backward-Flying Hummingbird',
        fact: 'Hummingbirds are the only avian species on Earth that can fly upside down, hover in place, and fly completely backwards.',
        takeaway: 'Their wings can flap up to 80 times per second, rotating in a figure-eight pattern.'
      },
      vi: {
        categoryName: 'Khí động học tự nhiên',
        title: 'Loài chim duy nhất bay lùi',
        fact: 'Chim ruồi là loài chim duy nhất trên Trái Đất có thể bay lùi về phía sau, bay lộn ngược và lơ lửng tại chỗ như trực thăng.',
        takeaway: 'Cánh của chúng đập tới 80 lần mỗi giây theo quỹ đạo hình số 8 kỳ diệu.'
      }
    }
  },
  {
    id: 'hearts-J',
    suit: '♥',
    suitName: 'hearts',
    rank: 'J',
    cardNumber: 24,
    color: 'red',
    category: 'Predators',
    imageUrl: 'https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Cheetah sprinting on golden African savannah',
    translations: {
      en: {
        categoryName: 'Velocity',
        title: 'Cheetah Supercar Acceleration',
        fact: 'A cheetah can accelerate from 0 to 96 km/h (60 mph) in just 3 seconds flat — quicker than many multi-million dollar supercars.',
        takeaway: 'During a high-speed sprint, a cheetah spends more time airborne than touching the ground.'
      },
      vi: {
        categoryName: 'Tốc độ tự nhiên',
        title: 'Cú tăng tốc của báo săn',
        fact: 'Báo săn cheetah có thể tăng tốc từ 0 lên 96 km/h chỉ trong vòng 3 giây ngắn ngủi — nhanh hơn cả phần lớn siêu xe thể thao.',
        takeaway: 'Khi phi nước đại hết tốc lực, thời gian báo săn ở trên không trung nhiều hơn thời gian chạm đất.'
      }
    }
  },
  {
    id: 'hearts-Q',
    suit: '♥',
    suitName: 'hearts',
    rank: 'Q',
    cardNumber: 25,
    color: 'red',
    category: 'Insects',
    imageUrl: 'https://images.unsplash.com/photo-1535083783855-76ae62b2914e?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Vibrant monarch butterfly resting on flower petal',
    translations: {
      en: {
        categoryName: 'Sensory Organs',
        title: 'Butterflies Taste With Feet',
        fact: 'Butterflies have taste sensors located on their tiny feet called chemoreceptors, which tell them whether a leaf is edible for their caterpillars.',
        takeaway: 'They simply land on a plant and scratch the leaf to sample its chemical flavor.'
      },
      vi: {
        categoryName: 'Giác quan kỳ thú',
        title: 'Bướm nếm vị bằng đôi chân',
        fact: 'Bướm có các cơ quan thụ cảm vị giác nằm ngay dưới lòng bàn chân nhỏ bé để phát hiện lá cây có an toàn cho sâu bướm ăn hay không.',
        takeaway: 'Chúng chỉ cần đậu lên cành và cào nhẹ mặt lá là đã nếm trọn hương vị hóa học của cây.'
      }
    }
  },
  {
    id: 'hearts-K',
    suit: '♥',
    suitName: 'hearts',
    rank: 'K',
    cardNumber: 26,
    color: 'red',
    category: 'Marine Mammals',
    imageUrl: 'https://images.unsplash.com/photo-1570481662006-a3a1374699e8?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Two dolphins jumping above calm blue water',
    translations: {
      en: {
        categoryName: 'Neuroscience',
        title: 'Half-Brain Dolphin Sleep',
        fact: 'Dolphins practice unihemispheric sleep: one hemisphere of their brain rests while the other stays awake with an open eye to surface for breath.',
        takeaway: 'This prevents them from drowning and lets them stay alert against sharks.'
      },
      vi: {
        categoryName: 'Thần kinh học',
        title: 'Cá heo ngủ một nửa não',
        fact: 'Cá heo ngủ theo cơ chế nửa não: một bán cầu não nghỉ ngơi trong khi nửa còn lại vẫn tỉnh táo và mở một mắt để bơi lên thở dưỡng khí.',
        takeaway: 'Cơ chế này bảo vệ cá heo không bị ngạt nước và luôn cảnh giác trước cá mập săn mồi.'
      }
    }
  },

  // ==========================================
  // DIAMONDS ♦ (Vietnam Wonders & World Heritage)
  // ==========================================
  {
    id: 'diamonds-A',
    suit: '♦',
    suitName: 'diamonds',
    rank: 'A',
    cardNumber: 27,
    color: 'red',
    category: 'Vietnam Natural Marvel',
    imageUrl: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Sơn Đoòng massive cave entrance in Vietnam with jungle',
    translations: {
      en: {
        categoryName: 'Vietnam Wonders',
        title: 'Sơn Đoòng: Underground World',
        fact: "Sơn Đoòng Cave in Quảng Bình, Vietnam is the largest natural cave on Earth. It has its own localized weather system, clouds, and primeval jungle.",
        takeaway: 'Its main passage is so cavernous it could house an entire 40-story Manhattan skyscraper.'
      },
      vi: {
        categoryName: 'Kỳ quan Việt Nam',
        title: 'Sơn Đoòng: Thế giới dưới lòng đất',
        fact: 'Hang Sơn Đoòng tại Quảng Bình là hang động tự nhiên lớn nhất hành tinh. Hang sở hữu hệ sinh thái rừng nhiệt đới và hệ thống mây riêng biệt.',
        takeaway: 'Khoang lớn nhất của hang có thể chứa vừa cả tòa nhà chọc trời 40 tầng của Manhattan.'
      }
    }
  },
  {
    id: 'diamonds-2',
    suit: '♦',
    suitName: 'diamonds',
    rank: '2',
    cardNumber: 28,
    color: 'red',
    category: 'Vietnam Agriculture',
    imageUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Fresh roasted coffee beans and cup of Vietnamese coffee',
    translations: {
      en: {
        categoryName: 'Global Commodities',
        title: 'Vietnam’s Coffee Crown',
        fact: 'Vietnam produces nearly 40% of the world’s entire supply of Robusta coffee beans, making it the undeniable global superpower of Robusta.',
        takeaway: 'Its rich volcanic soil in the Central Highlands provides the ideal climate for bold coffee.'
      },
      vi: {
        categoryName: 'Nông nghiệp Việt Nam',
        title: 'Ngôi vương cà phê Robusta',
        fact: 'Việt Nam cung cấp gần 40% sản lượng cà phê Robusta trên toàn thế giới, khẳng định vị thế cường quốc xuất khẩu Robusta số 1 hành tinh.',
        takeaway: 'Đất đỏ bazan trù phú vùng Tây Nguyên tạo nên hương vị đậm đà đặc trưng không đâu có được.'
      }
    }
  },
  {
    id: 'diamonds-3',
    suit: '♦',
    suitName: 'diamonds',
    rank: '3',
    cardNumber: 29,
    color: 'red',
    category: 'Architecture',
    imageUrl: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Golden Bridge Da Nang held by giant stone hands',
    translations: {
      en: {
        categoryName: 'Iconic Bridges',
        title: 'The Golden Hands of Bà Nà',
        fact: 'Suspended 1,400 meters above sea level in Da Nang, the Golden Bridge looks as if it is cradled in the giant weathered stone hands of a mountain deity.',
        takeaway: 'The hands are actually sculpted from fiberglass and wire mesh on steel frames.'
      },
      vi: {
        categoryName: 'Kiến trúc biểu tượng',
        title: 'Cầu Vàng Bà Nà Hills',
        fact: 'Tọa lạc ở độ cao 1.400 mét so với mực nước biển tại Đà Nẵng, Cầu Vàng như một dải lụa được nâng niu bởi đôi bàn tay khổng lồ phủ rêu phong.',
        takeaway: 'Đôi bàn tay được chế tác khéo léo từ sợi thủy tinh và lưới thép trên khung xương thép chịu lực.'
      }
    }
  },
  {
    id: 'diamonds-4',
    suit: '♦',
    suitName: 'diamonds',
    rank: '4',
    cardNumber: 30,
    color: 'red',
    category: 'Ancient Engineering',
    imageUrl: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Great Pyramids of Giza in golden desert twilight',
    translations: {
      en: {
        categoryName: 'Archaeology',
        title: 'Pyramid Cardinal Alignment',
        fact: 'The Great Pyramid of Giza is aligned to true north with an accuracy of within four-sixtieths of a degree — more precise than the Meridian Building in Greenwich.',
        takeaway: 'Ancient Egyptian builders achieved this feat without compasses or modern instruments.'
      },
      vi: {
        categoryName: 'Khảo cổ học',
        title: 'Độ chính xác của Kim Tự Tháp Giza',
        fact: 'Đại kim tự tháp Giza hướng về đúng hướng Bắc địa lý với sai số chưa tới 1/15 độ — chuẩn xác hơn cả đài thiên văn Greenwich ở London.',
        takeaway: 'Người Ai Cập cổ đại đã làm được kỳ tích này hoàn toàn không cần la bàn hay máy đo tọa độ hiện đại.'
      }
    }
  },
  {
    id: 'diamonds-5',
    suit: '♦',
    suitName: 'diamonds',
    rank: '5',
    cardNumber: 31,
    color: 'red',
    category: 'UNESCO Heritage',
    imageUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Ha Long Bay limestone karst emerald waters and traditional boat',
    translations: {
      en: {
        categoryName: 'Vietnam Landscape',
        title: 'Hạ Long Bay’s 1,600 Isles',
        fact: 'Hạ Long Bay is home to more than 1,600 towering limestone pillars carved over 500 million years of marine karst formation.',
        takeaway: 'According to legend, a mother dragon descended to spit jade jewels that transformed into islands.'
      },
      vi: {
        categoryName: 'Di sản thế giới',
        title: 'Hơn 1.600 đảo đá Vịnh Hạ Long',
        fact: 'Vịnh Hạ Long sở hữu hơn 1.600 cột đá vôi sừng sững hình thành qua 500 triệu năm kiến tạo địa chất và nước biển xâm thực.',
        takeaway: 'Truyền thuyết kể rằng đàn rồng mẹ giáng trần đã phun ngọc châu hóa thành muôn trùng đảo biếc chở che cho đất nước.'
      }
    }
  },
  {
    id: 'diamonds-6',
    suit: '♦',
    suitName: 'diamonds',
    rank: '6',
    cardNumber: 32,
    color: 'red',
    category: 'History',
    imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Ancient Egyptian historical artifacts and papyrus',
    translations: {
      en: {
        categoryName: 'Chronology',
        title: 'Cleopatra and the iPhone',
        fact: 'Cleopatra VII lived closer in time to the Moon landing and the invention of the iPhone than she did to the construction of the Great Pyramids.',
        takeaway: 'The Pyramids were built around 2500 BCE; Cleopatra ruled around 30 BCE.'
      },
      vi: {
        categoryName: 'Trục thời gian',
        title: 'Cleopatra sống gần thời iPhone hơn',
        fact: 'Nữ hoàng Cleopatra sống gần thời điểm con người đặt chân lên Mặt Trăng và iPhone ra đời hơn là thời kỳ xây Đại Kim Tự Tháp.',
        takeaway: 'Kim tự tháp được xây năm 2500 TCN; trong khi Cleopatra cai trị khoảng năm 30 TCN.'
      }
    }
  },
  {
    id: 'diamonds-7',
    suit: '♦',
    suitName: 'diamonds',
    rank: '7',
    cardNumber: 33,
    color: 'red',
    category: 'Ancient Academia',
    imageUrl: 'https://images.unsplash.com/photo-1520970014086-2208d157c9e2?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Oxford University ancient college library and stones',
    translations: {
      en: {
        categoryName: 'History of Knowledge',
        title: 'Oxford is Older Than the Aztecs',
        fact: 'Teaching existed at the University of Oxford as early as 1096 CE. The Aztec Empire was founded hundreds of years later, around 1428 CE.',
        takeaway: 'Scholars were writing Latin manuscripts in Oxford centuries before Tenochtitlan rose.'
      },
      vi: {
        categoryName: 'Lịch sử tri thức',
        title: 'Đại học Oxford lâu hơn Đế chế Aztec',
        fact: 'Đại học Oxford đã bắt đầu giảng dạy từ năm 1096. Trong khi đó, Đế chế Aztec chỉ mới được thành lập vào khoảng năm 1428.',
        takeaway: 'Các học giả Oxford đã tranh luận triết học hàng trăm năm trước khi thủ đô Tenochtitlan của người Aztec ra đời.'
      }
    }
  },
  {
    id: 'diamonds-8',
    suit: '♦',
    suitName: 'diamonds',
    rank: '8',
    cardNumber: 34,
    color: 'red',
    category: 'Vietnam Folk Culture',
    imageUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Traditional Vietnamese water puppet theater art',
    translations: {
      en: {
        categoryName: 'Traditional Arts',
        title: 'Múa Rối Nước: The Flooded Rice Stage',
        fact: 'Vietnamese water puppetry originated in the 11th century when Red River Delta villagers turned flooded rice paddies into playful entertainment.',
        takeaway: 'Puppeteers stand waist-deep in water behind bamboo screens, manipulating puppets on long underwater poles.'
      },
      vi: {
        categoryName: 'Nghệ thuật dân gian',
        title: 'Múa Rối Nước: Sân khấu mặt nước',
        fact: 'Nghệ thuật múa rối nước Việt Nam ra đời từ thế kỷ 11, khi nông dân đồng bằng sông Hồng tận dụng những thửa ruộng ngập nước làm sân khấu diễn xướng.',
        takeaway: 'Các nghệ nhân ngâm mình dưới nước sau bức rèm tre, điều khiển con rối bằng sào và dây ngầm cực kỳ điêu luyện.'
      }
    }
  },
  {
    id: 'diamonds-9',
    suit: '♦',
    suitName: 'diamonds',
    rank: '9',
    cardNumber: 35,
    color: 'red',
    category: 'Material Science',
    imageUrl: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Ancient Roman Colosseum standing tall over 2000 years',
    translations: {
      en: {
        categoryName: 'Roman Wonders',
        title: 'Self-Healing Roman Concrete',
        fact: 'Ancient Roman harbor concrete has stood underwater for over 2,000 years because seawater triggers mineral crystallization that heals microcracks.',
        takeaway: 'Their mix of volcanic ash and quicklime grows stronger over centuries rather than decaying.'
      },
      vi: {
        categoryName: 'Vật liệu cổ đại',
        title: 'Bê tông La Mã tự chữa lành',
        fact: 'Bê tông bến cảng La Mã cổ đại sừng sững hơn 2.000 năm dưới đáy biển nhờ nước mặn kích hoạt phản ứng tạo khoáng chất tự vá lành các vết nứt nhỏ.',
        takeaway: 'Hỗn hợp tro núi lửa và vôi sống giúp công trình càng để lâu qua thời gian lại càng thêm rắn chắc.'
      }
    }
  },
  {
    id: 'diamonds-10',
    suit: '♦',
    suitName: 'diamonds',
    rank: '10',
    cardNumber: 36,
    color: 'red',
    category: 'Vietnam Geography',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Underground cave river crystal clear water in Vietnam',
    translations: {
      en: {
        categoryName: 'Underground Rivers',
        title: 'Phong Nha’s Subterranean Highway',
        fact: 'Phong Nha-Kẻ Bàng National Park features an underground river system spanning over 44 kilometers, one of the longest on our planet.',
        takeaway: 'Some caves inside the park are over 400 million years old, making them Asia’s oldest karst mountains.'
      },
      vi: {
        categoryName: 'Địa chất Việt Nam',
        title: 'Dòng sông ngầm Phong Nha',
        fact: 'Vườn quốc gia Phong Nha - Kẻ Bàng sở hữu mạng lưới sông ngầm dài hơn 44 km, thuộc hàng dài và kỳ vĩ nhất thế giới.',
        takeaway: 'Một số hang động tại đây có niên đại hơn 400 triệu năm, là hệ thống karst đá vôi cổ nhất châu Á.'
      }
    }
  },
  {
    id: 'diamonds-J',
    suit: '♦',
    suitName: 'diamonds',
    rank: 'J',
    cardNumber: 37,
    color: 'red',
    category: 'Vietnam Heritage',
    imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Hoi An glowing colorful paper lanterns along ancient river',
    translations: {
      en: {
        categoryName: 'Cultural Traditions',
        title: 'Hội An Lantern Enchantment',
        fact: 'On every full moon night, the UNESCO-listed ancient town of Hội An switches off electric lights, illuminating the riverbanks with silk lanterns.',
        takeaway: 'People float flower lanterns on the Hoài River to pray for peace and prosperity.'
      },
      vi: {
        categoryName: 'Di sản văn hóa',
        title: 'Đêm phố cổ Hội An lung linh',
        fact: 'Vào mỗi đêm rằm, phố cổ Hội An tắt hết ánh đèn điện hiện đại, nhường chỗ cho hàng ngàn chiếc đèn lồng lụa đa sắc thắp sáng khắp các ngõ phố.',
        takeaway: 'Du khách và người dân cùng thả đèn hoa đăng trôi trên dòng sông Hoài cầu bình an và may mắn.'
      }
    }
  },
  {
    id: 'diamonds-Q',
    suit: '♦',
    suitName: 'diamonds',
    rank: 'Q',
    cardNumber: 38,
    color: 'red',
    category: 'Thermal Physics',
    imageUrl: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Eiffel Tower standing in Paris sunny summer sky',
    translations: {
      en: {
        categoryName: 'Metals & Heat',
        title: 'The Growing Eiffel Tower',
        fact: 'During scorching summer days, thermal expansion of puddle iron can cause the Eiffel Tower to grow by up to 15 centimeters (6 inches).',
        takeaway: 'Sunlight on one side also causes the tip of the tower to tilt away from the heat by several centimeters.'
      },
      vi: {
        categoryName: 'Vật lý nhiệt',
        title: 'Tháp Eiffel cao thêm vào mùa hè',
        fact: 'Vào những ngày hè oi ả, sự giãn nở nhiệt của hàng ngàn tấn sắt rèn khiến tháp Eiffel có thể cao thêm tới 15 cm.',
        takeaway: 'Nhiệt lượng từ ánh nắng chiếu vào một phía còn làm đỉnh tháp nghiêng đi vài centimet so với phương thẳng đứng.'
      }
    }
  },
  {
    id: 'diamonds-K',
    suit: '♦',
    suitName: 'diamonds',
    rank: 'K',
    cardNumber: 39,
    color: 'red',
    category: 'Limnology',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Crystal clear frozen freshwater lake blue waters',
    translations: {
      en: {
        categoryName: 'Freshwater Wonders',
        title: 'Lake Baikal’s Deep Reserves',
        fact: 'Lake Baikal in Siberia contains 20% of the world’s unfrozen surface fresh water — more than all five North American Great Lakes combined.',
        takeaway: 'It is both the deepest (1,642m) and oldest (25 million years) freshwater lake on Earth.'
      },
      vi: {
        categoryName: 'Kỳ quan nước ngọt',
        title: 'Hồ Baikal: Túi nước ngọt Trái Đất',
        fact: 'Hồ Baikal chứa tới 20% tổng lượng nước ngọt không đóng băng trên bề mặt Trái Đất — nhiều hơn cả 5 Ngũ Đại Hồ Bắc Mỹ cộng lại.',
        takeaway: 'Đây là hồ nước ngọt sâu nhất (1.642 m) và cổ xưa nhất (25 triệu năm tuổi) từng được ghi nhận.'
      }
    }
  },

  // ==========================================
  // CLUBS ♣ (Science, Quantum & Mind-Blowing Trivia)
  // ==========================================
  {
    id: 'clubs-A',
    suit: '♣',
    suitName: 'clubs',
    rank: 'A',
    cardNumber: 40,
    color: 'black',
    category: 'Neuroscience',
    imageUrl: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Artistic human brain synapses glowing with electric signals',
    translations: {
      en: {
        categoryName: 'Human Brain',
        title: '2.5 Petabytes of Memory',
        fact: 'The human brain consists of 86 billion neurons forming 100 trillion connections, giving it an estimated storage capacity of 2.5 petabytes.',
        takeaway: 'That is equivalent to recording 3 million hours of non-stop TV shows.'
      },
      vi: {
        categoryName: 'Bộ não con người',
        title: 'Dung lượng 2,5 Petabyte',
        fact: 'Bộ não con người có khoảng 86 tỷ nơ-ron tạo thành 100 nghìn tỷ kết nối synap, tương đương dung lượng lưu trữ 2,5 petabyte dữ liệu.',
        takeaway: 'Mức dung lượng này đủ để ghi lại 3 triệu giờ chương trình truyền hình phát liên tục.'
      }
    }
  },
  {
    id: 'clubs-2',
    suit: '♣',
    suitName: 'clubs',
    rank: '2',
    cardNumber: 41,
    color: 'black',
    category: 'Thermodynamics',
    imageUrl: 'https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Bubbles boiling in glass beaker with ice crystals',
    translations: {
      en: {
        categoryName: 'Thermodynamics',
        title: 'Water’s Triple Point',
        fact: 'At 0.01°C and 0.006 atmospheres of pressure, water reaches its triple point where it exists simultaneously as ice, liquid water, and boiling vapor.',
        takeaway: 'At this unique thermodynamic junction, boiling and freezing happen at the exact same instant.'
      },
      vi: {
        categoryName: 'Nhiệt động học',
        title: 'Điểm ba của nước',
        fact: 'Tại 0,01°C và áp suất 0,006 atm, nước đạt "điểm ba kỳ diệu", nơi ba trạng thái rắn, lỏng và khí đồng thời tồn tại cân bằng cùng lúc.',
        takeaway: 'Ở trạng thái này, nước vừa sôi sùng sục vừa đóng băng ngay trước mắt bạn.'
      }
    }
  },
  {
    id: 'clubs-3',
    suit: '♣',
    suitName: 'clubs',
    rank: '3',
    cardNumber: 42,
    color: 'black',
    category: 'Nuclear Physics',
    imageUrl: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Bright yellow ripe bananas bunch',
    translations: {
      en: {
        categoryName: 'Everyday Physics',
        title: 'Bananas are Naturally Radioactive',
        fact: 'Because bananas are exceptionally rich in potassium, they contain trace amounts of the natural radioactive isotope Potassium-40.',
        takeaway: 'You would need to eat 10 million bananas at once to suffer fatal radiation sickness!'
      },
      vi: {
        categoryName: 'Vật lý đời sống',
        title: 'Chuối có tính phóng xạ tự nhiên',
        fact: 'Do chứa lượng kali dồi dào, mỗi quả chuối đều chứa một lượng nhỏ đồng vị phóng xạ tự nhiên Kali-40 (K-40).',
        takeaway: 'Tuy nhiên, bạn phải ăn tới 10 triệu quả chuối cùng lúc mới bị ngộ độc phóng xạ!'
      }
    }
  },
  {
    id: 'clubs-4',
    suit: '♣',
    suitName: 'clubs',
    rank: '4',
    cardNumber: 43,
    color: 'black',
    category: 'Chemistry',
    imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Clear transparent glass droplets and window reflection',
    translations: {
      en: {
        categoryName: 'Material Science',
        title: 'The Enigma of Glass',
        fact: 'Glass is neither a typical solid nor a liquid; it is an amorphous solid with the disordered atomic structure of a liquid frozen in time.',
        takeaway: 'Old church window glass being thicker at the bottom is actually due to medieval manufacturing, not flowing over centuries.'
      },
      vi: {
        categoryName: 'Khoa học vật liệu',
        title: 'Bí ẩn của thủy tinh',
        fact: 'Thủy tinh không phải chất rắn thông thường cũng chẳng phải chất lỏng; nó là "chất rắn vô định hình" với cấu trúc phân tử bất trật tự như chất lỏng bị khóa chặt.',
        takeaway: 'Kính nhà thờ cổ dày ở đáy là do kỹ thuật thổi kính thời xưa, chứ không phải do thủy tinh "chảy" xuống qua nhiều thế kỷ.'
      }
    }
  },
  {
    id: 'clubs-5',
    suit: '♣',
    suitName: 'clubs',
    rank: '5',
    cardNumber: 44,
    color: 'black',
    category: 'Quantum Mechanics',
    imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Quantum wave particle duality abstract luminous geometric pattern',
    translations: {
      en: {
        categoryName: 'Quantum Mechanics',
        title: 'Quantum Tunneling Through Walls',
        fact: 'In quantum physics, subatomic particles can teleport through solid energy barriers that classical physics says are impenetrable.',
        takeaway: 'Without quantum tunneling, the Sun could not fuse hydrogen and would immediately stop shining.'
      },
      vi: {
        categoryName: 'Vật lý lượng tử',
        title: 'Xuyên hầm lượng tử',
        fact: 'Trong cơ học lượng tử, các hạt hạ nguyên tử có thể "dịch chuyển tức thời" đi xuyên qua các bức tường rào cản năng lượng vững chắc.',
        takeaway: 'Nếu không có hiệu ứng xuyên hầm lượng tử, phản ứng nhiệt hạch trong Mặt Trời sẽ tắt lịm ngay lập tức.'
      }
    }
  },
  {
    id: 'clubs-6',
    suit: '♣',
    suitName: 'clubs',
    rank: '6',
    cardNumber: 45,
    color: 'black',
    category: 'Genetics',
    imageUrl: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'DNA double helix model scientific render',
    translations: {
      en: {
        categoryName: 'Genetics',
        title: 'DNA Across the Solar System',
        fact: 'If uncoiled and placed end-to-end, all the DNA inside a single human body would stretch approximately 10 billion miles — from Earth to Pluto and back.',
        takeaway: 'Each individual cell packs about 2 meters (6 feet) of DNA into a microscopic nucleus.'
      },
      vi: {
        categoryName: 'Di truyền học',
        title: 'Sợi ADN vươn tới Sao Diêm Vương',
        fact: 'Nếu kéo dãn và nối liền tất cả sợi ADN trong cơ thể một con người, nó sẽ dài khoảng 16 tỷ km — đủ để chạm tới sao Diêm Vương và quay về.',
        takeaway: 'Mỗi tế bào đơn lẻ của bạn đã cuộn gọn tới 2 mét chiều dài sợi ADN trong nhân siêu hiển vi.'
      }
    }
  },
  {
    id: 'clubs-7',
    suit: '♣',
    suitName: 'clubs',
    rank: '7',
    cardNumber: 46,
    color: 'black',
    category: 'Physics Paradox',
    imageUrl: 'https://images.unsplash.com/photo-1518173946687-a4c8a383392e?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Crystalline ice cubes and cold water droplets',
    translations: {
      en: {
        categoryName: 'Thermodynamics',
        title: 'The Mpemba Paradox',
        fact: 'Under certain thermodynamic conditions, hot water freezes faster than cold water — a counter-intuitive phenomenon named the Mpemba Effect.',
        takeaway: 'First noted by Aristotle in 300 BCE, it was rediscovered in 1963 by a Tanzanian student while making ice cream.'
      },
      vi: {
        categoryName: 'Nghịch lý nhiệt học',
        title: 'Hiệu ứng Mpemba: Nước nóng đông đá trước',
        fact: 'Dưới một số điều kiện nhiệt động học nhất định, nước nóng có thể đóng băng nhanh hơn nước lạnh — hiện tượng mang tên Hiệu ứng Mpemba.',
        takeaway: 'Từng được Aristotle ghi nhận năm 300 TCN, hiện tượng được một học sinh Tanzania tái phát hiện năm 1963 khi làm kem.'
      }
    }
  },
  {
    id: 'clubs-8',
    suit: '♣',
    suitName: 'clubs',
    rank: '8',
    cardNumber: 47,
    color: 'black',
    category: 'Meteorology',
    imageUrl: 'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Dramatic lightning strike across dark stormy night sky',
    translations: {
      en: {
        categoryName: 'Atmospheric Physics',
        title: 'Lightning: 5x Hotter than the Sun',
        fact: 'A single bolt of lightning heats the surrounding air channel to roughly 30,000 kelvins (53,540°F) — five times hotter than the surface of the Sun.',
        takeaway: 'This sudden explosive thermal expansion of air creates the deafening shockwave we hear as thunder.'
      },
      vi: {
        categoryName: 'Khí quyển học',
        title: 'Tia sét nóng gấp 5 lần Mặt Trời',
        fact: 'Một tia sét làm nóng kênh không khí xung quanh lên tới khoảng 30.000 độ K (khoảng 29.700°C) — nóng gấp 5 lần bề mặt Mặt Trời.',
        takeaway: 'Sự giãn nở nhiệt bùng nổ tức thì của không khí chính là nguyên nhân tạo ra tiếng sấm rền vang trời.'
      }
    }
  },
  {
    id: 'clubs-9',
    suit: '♣',
    suitName: 'clubs',
    rank: '9',
    cardNumber: 48,
    color: 'black',
    category: 'Combinatorics',
    imageUrl: 'https://images.unsplash.com/photo-1541278107931-e006523892df?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Deck of cards fanned out on dark velvet table',
    translations: {
      en: {
        categoryName: 'Mathematics',
        title: 'The Cosmic Uniqueness of 52 Cards',
        fact: 'There are 52! (8 × 10⁶⁷) ways to arrange a standard deck of 52 cards. Every thorough shuffle creates an order that has almost certainly never existed in human history.',
        takeaway: 'That number of combinations is larger than the number of atoms on the surface of Earth.'
      },
      vi: {
        categoryName: 'Toán học xác suất',
        title: 'Độ độc nhất vô nhị của bộ 52 lá',
        fact: 'Có tới 52! (khoảng 8 × 10⁶⁷) cách sắp xếp bộ bài 52 lá. Mỗi lần xào bài kỹ lưỡng, thứ tự đó gần như chắc chắn chưa từng tồn tại trong lịch sử vũ trụ.',
        takeaway: 'Con số tổ hợp này thậm chí còn lớn hơn tổng số nguyên tử trên toàn bộ bề mặt Trái Đất.'
      }
    }
  },
  {
    id: 'clubs-10',
    suit: '♣',
    suitName: 'clubs',
    rank: '10',
    cardNumber: 49,
    color: 'black',
    category: 'Biochemistry',
    imageUrl: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Macro microscopic crystal structure reflection',
    translations: {
      en: {
        categoryName: 'Human Biology',
        title: 'The Geometry of Emotional Tears',
        fact: 'Microscopic analysis reveals emotional tears have a completely different biochemical structure and protein content than tears caused by chopping onions.',
        takeaway: 'Emotional tears contain leucine-enkephalin, a natural painkiller that helps relieve stress.'
      },
      vi: {
        categoryName: 'Hóa sinh học',
        title: 'Hình thái giọt nước mắt xúc động',
        fact: 'Khi quan sát dưới kính hiển vi, nước mắt xúc động kết tinh thành hình thái cấu trúc hoàn toàn khác biệt so với nước mắt khi thái hành tây.',
        takeaway: 'Nước mắt cảm xúc chứa hormone leucine-enkephalin, một chất giảm đau tự nhiên giúp cơ thể giải tỏa căng thẳng.'
      }
    }
  },
  {
    id: 'clubs-J',
    suit: '♣',
    suitName: 'clubs',
    rank: 'J',
    cardNumber: 50,
    color: 'black',
    category: 'General Relativity',
    imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Majestic mountain peak rising high into clouds',
    translations: {
      en: {
        categoryName: 'Einstein’s Universe',
        title: 'Time Ticks Faster on Mountaintops',
        fact: 'Due to gravitational time dilation, gravity is weaker further from Earth’s core, meaning clocks at the top of Mount Everest tick slightly faster than clocks at sea level.',
        takeaway: 'Your head is technically fractions of a nanosecond older than your feet!'
      },
      vi: {
        categoryName: 'Thuyết tương đối',
        title: 'Thời gian đỉnh núi trôi nhanh hơn',
        fact: 'Theo thuyết tương đối của Einstein, trọng lực yếu hơn khi ở xa tâm Trái Đất, khiến đồng hồ đặt trên đỉnh Everest chạy nhanh hơn đồng hồ dưới mực nước biển.',
        takeaway: 'Về mặt vật lý học, đỉnh đầu của bạn thực chất già hơn bàn chân vài phần tỷ giây!'
      }
    }
  },
  {
    id: 'clubs-Q',
    suit: '♣',
    suitName: 'clubs',
    rank: 'Q',
    cardNumber: 51,
    color: 'black',
    category: 'Neurophysiology',
    imageUrl: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Abstract electric blue light trails racing through circuits',
    translations: {
      en: {
        categoryName: 'Human Body',
        title: 'Nerve Highway Speeds',
        fact: 'Action potentials traveling along myelinated neurons can reach speeds up to 430 km/h (267 mph) — faster than a Formula 1 racing car at full throttle.',
        takeaway: 'This speed lets you yank your finger back from a burning stove before you even consciously perceive the pain.'
      },
      vi: {
        categoryName: 'Sinh lý học thần kinh',
        title: 'Tốc độ xa lộ thần kinh',
        fact: 'Các xung thần kinh truyền dọc theo các sợi trục có bao myelin có thể đạt vận tốc tới 430 km/h — nhanh hơn cả xe đua F1 lao dốc hết ga.',
        takeaway: 'Tốc độ kinh hoàng này giúp bạn rụt tay khỏi bếp lửa bỏng trước khi não bộ kịp cảm nhận trọn vẹn cơn đau.'
      }
    }
  },
  {
    id: 'clubs-K',
    suit: '♣',
    suitName: 'clubs',
    rank: 'K',
    cardNumber: 52,
    color: 'black',
    category: 'Atomic Physics',
    imageUrl: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Microscopic abstract crystal particles floating in void',
    translations: {
      en: {
        categoryName: 'Atomic Structure',
        title: 'Humanity Inside a Sugar Cube',
        fact: 'Atoms are 99.9999999999999% empty space. If you eliminated all the empty space inside the atoms of all 8 billion humans, humanity would fit in a sugar cube.',
        takeaway: 'However, that dense sugar cube would still weigh roughly 500 million tons.'
      },
      vi: {
        categoryName: 'Vật lý nguyên tử',
        title: 'Toàn nhân loại trong viên đường',
        fact: 'Nguyên tử cấu tạo bởi 99,9999999999999% là khoảng trống. Nếu rút hết toàn bộ khoảng trống này, cả 8 tỷ người trên Trái Đất sẽ vừa vặn trong một viên đường nhỏ.',
        takeaway: 'Tuy bé bằng viên đường, khối vật chất cô đặc đó vẫn nặng tương đương 500 triệu tấn.'
      }
    }
  }
];
