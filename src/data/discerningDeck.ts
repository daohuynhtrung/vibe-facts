import { DiscerningCard } from '../types/card';

export const DISCERNING_DECK_OF_52: DiscerningCard[] = [
  // ==========================================
  // SPADES ♠ (Cosmos & Space Physics)
  // Cards 1 to 13 (7 Facts, 6 Fakes)
  // ==========================================
  {
    id: 'disc-spades-A',
    suit: '♠',
    suitName: 'spades',
    rank: 'A',
    cardNumber: 1,
    color: 'black',
    category: 'Animal Memory',
    imageUrl: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Golden fish swimming in water',
    isReal: false,
    translations: {
      en: {
        categoryName: 'Memory Myths',
        title: 'The 3-Second Goldfish Memory',
        claim: 'Goldfish have a memory span of only 3 seconds, forgetting everything immediately after swimming in a circle.',
        explanation: 'Scientific experiments prove goldfish retain memories for at least 5 months and can navigate mazes and recognize colors.'
      },
      vi: {
        categoryName: 'Hiểu lầm trí nhớ',
        title: 'Trí nhớ 3 giây của cá vàng',
        claim: 'Cá vàng chỉ có trí nhớ ngắn hạn vỏn vẹn 3 giây, quên sạch mọi thứ ngay sau khi bơi xong một vòng tròn.',
        explanation: 'Các thí nghiệm khoa học chứng minh cá vàng có thể nhớ ít nhất 5 tháng, biết phân biệt màu sắc và vượt mê cung.'
      }
    }
  },
  {
    id: 'disc-spades-2',
    suit: '♠',
    suitName: 'spades',
    rank: '2',
    cardNumber: 2,
    color: 'black',
    category: 'Planetary Science',
    imageUrl: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Venus planet glowing in space',
    isReal: true,
    translations: {
      en: {
        categoryName: 'Planets',
        title: 'Venusian Day vs Year',
        claim: 'A single day on the planet Venus is longer than a full year on Venus.',
        explanation: 'Venus takes 243 Earth days to rotate once on its axis, but only 225 Earth days to complete an orbit around the Sun.'
      },
      vi: {
        categoryName: 'Hành tinh học',
        title: 'Nghịch lý thời gian trên Sao Kim',
        claim: 'Một ngày duy nhất trên sao Kim dài hơn cả một năm trọn vẹn trên hành tinh này.',
        explanation: 'Sao Kim mất 243 ngày Trái Đất để tự quay một vòng, nhưng chỉ mất 225 ngày để hoàn thành quỹ đạo quay quanh Mặt Trời.'
      }
    }
  },
  {
    id: 'disc-spades-3',
    suit: '♠',
    suitName: 'spades',
    rank: '3',
    cardNumber: 3,
    color: 'black',
    category: 'Astronomy & Vision',
    imageUrl: 'https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Great Wall of China winding over hills',
    isReal: false,
    translations: {
      en: {
        categoryName: 'Space Sight',
        title: 'The Great Wall from the Moon',
        claim: 'The Great Wall of China is the only human-made structure visible from the surface of the Moon with the naked eye.',
        explanation: 'Astronauts from the Apollo missions confirmed no human structures are visible from the Moon without optical magnification.'
      },
      vi: {
        categoryName: 'Tầm nhìn vũ trụ',
        title: 'Vạn Lý Trường Thành nhìn từ Mặt Trăng',
        claim: 'Vạn Lý Trường Thành là công trình nhân tạo duy nhất có thể nhìn thấy từ bề mặt Mặt Trăng bằng mắt thường.',
        explanation: 'Các phi hành gia Apollo xác nhận không có bất kỳ công trình nhân tạo nào nhìn thấy được từ Mặt Trăng nếu không có kính viễn vọng.'
      }
    }
  },
  {
    id: 'disc-spades-4',
    suit: '♠',
    suitName: 'spades',
    rank: '4',
    cardNumber: 4,
    color: 'black',
    category: 'Black Holes',
    imageUrl: 'https://images.unsplash.com/photo-1543722530-d2c3201371e7?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Abstract black hole warping light',
    isReal: false,
    translations: {
      en: {
        categoryName: 'Astrophysics',
        title: 'Cosmic Vacuum Cleaners',
        claim: 'Black holes act like giant cosmic vacuum cleaners, actively sucking in and swallowing everything in their galaxies.',
        explanation: 'Black holes only pull in matter that crosses their event horizon. If our Sun became an equal-mass black hole, Earth’s orbit wouldn’t change.'
      },
      vi: {
        categoryName: 'Vật lý thiên văn',
        title: 'Máy hút bụi vũ trụ',
        claim: 'Lỗ đen hoạt động như chiếc máy hút bụi khổng lồ, chủ động hút cạn và nuốt chửng mọi vật thể xung quanh nó trong thiên hà.',
        explanation: 'Lỗ đen chỉ kéo vật thể khi nó vượt qua chân trời sự kiện. Nếu Mặt Trời biến thành lỗ đen cùng khối lượng, Trái Đất vẫn quay bình thường.'
      }
    }
  },
  {
    id: 'disc-spades-5',
    suit: '♠',
    suitName: 'spades',
    rank: '5',
    cardNumber: 5,
    color: 'black',
    category: 'Mars Exploration',
    imageUrl: 'https://images.unsplash.com/photo-1612892483236-52d32a0e0ac1?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Blue sunset on dusty horizon of Mars',
    isReal: true,
    translations: {
      en: {
        categoryName: 'Martian Sky',
        title: 'Blue Sunsets on Mars',
        claim: 'Sunsets on Mars appear blue to human observers, in direct contrast to Earth’s fiery red sunsets.',
        explanation: 'Fine iron-rich atmospheric dust on Mars scatters reddish light away while letting high-frequency blue photons penetrate directly.'
      },
      vi: {
        categoryName: 'Bầu trời Sao Hỏa',
        title: 'Hoàng hôn xanh trên Sao Hỏa',
        claim: 'Hoàng hôn trên sao Hỏa có màu xanh lam đối với mắt người, trái ngược hoàn toàn với hoàng hôn đỏ rực của Trái Đất.',
        explanation: 'Bụi mịn giàu oxit sắt trong bầu khí quyển sao Hỏa phân tán bước sóng đỏ và cho phép ánh sáng xanh lam đi thẳng tới mắt người nhìn.'
      }
    }
  },
  {
    id: 'disc-spades-6',
    suit: '♠',
    suitName: 'spades',
    rank: '6',
    cardNumber: 6,
    color: 'black',
    category: 'Gravity & Orbit',
    imageUrl: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Astronaut floating in International Space Station',
    isReal: false,
    translations: {
      en: {
        categoryName: 'Orbital Physics',
        title: 'Zero Gravity in Space Station',
        claim: 'There is zero gravity aboard the International Space Station, which is why astronauts float effortlessly.',
        explanation: 'Gravity on the ISS is roughly 90% of Earth’s surface. Astronauts float because the station is in perpetual free-fall around the planet.'
      },
      vi: {
        categoryName: 'Vật lý quỹ đạo',
        title: 'Không trọng lực trên Trạm Không Gian',
        claim: 'Hoàn toàn không có trọng lực bên trong Trạm Vũ trụ Quốc tế (ISS), đó là lý do vì sao các phi hành gia lơ lửng.',
        explanation: 'Trọng lực ở độ cao trạm ISS bằng khoảng 90% trên mặt đất. Họ trôi nổi vì trạm đang rơi tự do liên tục quanh Trái Đất.'
      }
    }
  },
  {
    id: 'disc-spades-7',
    suit: '♠',
    suitName: 'spades',
    rank: '7',
    cardNumber: 7,
    color: 'black',
    category: 'Extreme Weather',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Diamond crystals falling in deep turquoise void',
    isReal: true,
    translations: {
      en: {
        categoryName: 'Ice Giants',
        title: 'Diamond Rain on Ice Giants',
        claim: 'Deep inside Neptune and Uranus, colossal atmospheric pressure causes literal diamond rain to fall towards their planetary cores.',
        explanation: 'Experiments simulating the interior of ice giants confirm that high temperature and pressure break methane into solid carbon diamonds.'
      },
      vi: {
        categoryName: 'Hành tinh băng',
        title: 'Mưa kim cương trên Sao Hải Vương',
        claim: 'Sâu trong lòng sao Thiên Vương và Hải Vương, áp suất khổng lồ tạo ra những cơn mưa kim cương thực sự rơi xuống lõi.',
        explanation: 'Các thí nghiệm mô phỏng lòng các hành tinh băng xác nhận nhiệt độ và áp suất cực hạn ép khí metan kết tinh thành kim cương nguyên khối.'
      }
    }
  },
  {
    id: 'disc-spades-8',
    suit: '♠',
    suitName: 'spades',
    rank: '8',
    cardNumber: 8,
    color: 'black',
    category: 'Lunar Science',
    imageUrl: 'https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Moon surface and shadows',
    isReal: false,
    translations: {
      en: {
        categoryName: 'Moon Phases',
        title: 'The Permanent Dark Side of the Moon',
        claim: 'One hemisphere of the Moon is permanently shrouded in perpetual freezing darkness that never receives sunlight.',
        explanation: 'The Moon is tidally locked so only one face looks at Earth, but all sides experience day and night as it orbits the Sun.'
      },
      vi: {
        categoryName: 'Chu kỳ Mặt Trăng',
        title: 'Mặt tối vĩnh cửu của Mặt Trăng',
        claim: 'Một nửa của Mặt Trăng bị bao phủ trong bóng tối băng giá vĩnh cửu và không bao giờ nhận được ánh sáng Mặt Trời.',
        explanation: 'Mặt Trăng bị khóa thủy triều nên chỉ quay một mặt về Trái Đất, nhưng mọi mặt của nó đều nhận đủ ánh nắng theo chu kỳ ngày đêm.'
      }
    }
  },
  {
    id: 'disc-spades-9',
    suit: '♠',
    suitName: 'spades',
    rank: '9',
    cardNumber: 9,
    color: 'black',
    category: 'Acoustics in Vacuum',
    imageUrl: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Silent starry cosmic space',
    isReal: true,
    translations: {
      en: {
        categoryName: 'Deep Space',
        title: 'The Terrifying Silence of Space',
        claim: 'Outer space is completely silent because sound waves require a physical medium to travel.',
        explanation: 'Sound is mechanical vibration through atoms. In the vacuum of space, particles are too sparsely spread to transmit acoustic waves.'
      },
      vi: {
        categoryName: 'Vũ trụ chân không',
        title: 'Sự tĩnh lặng tuyệt đối của không gian',
        claim: 'Vũ trụ hoàn toàn im lặng vì sóng âm bắt buộc phải có môi trường vật chất để lan truyền.',
        explanation: 'Sóng âm là dao động cơ học của các phân tử. Trong chân không vũ trụ, các hạt quá thưa thớt để truyền tải sóng âm thanh.'
      }
    }
  },
  {
    id: 'disc-spades-10',
    suit: '♠',
    suitName: 'spades',
    rank: '10',
    cardNumber: 10,
    color: 'black',
    category: 'Earth Seasons',
    imageUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Summer sun flare and winter frost split',
    isReal: false,
    translations: {
      en: {
        categoryName: 'Seasons',
        title: 'Proximity to the Sun Causes Summer',
        claim: 'Summer occurs because Earth’s elliptical orbit moves our entire planet significantly closer to the blazing Sun.',
        explanation: 'Seasons are driven exclusively by Earth’s 23.5° axial tilt. Earth is actually closest to the Sun in January during northern winter!'
      },
      vi: {
        categoryName: 'Thời tiết & Mùa màng',
        title: 'Gần Mặt Trời hơn sinh ra mùa hè',
        claim: 'Mùa hè xuất hiện do quỹ đạo elip đưa toàn bộ Trái Đất đến khoảng cách gần Mặt Trời hơn so với mùa đông.',
        explanation: 'Các mùa sinh ra do trục Trái Đất nghiêng 23,5 độ. Thực tế Trái Đất ở vị trí gần Mặt Trời nhất vào tháng 1 (mùa đông bắc bán cầu)!'
      }
    }
  },
  {
    id: 'disc-spades-J',
    suit: '♠',
    suitName: 'spades',
    rank: 'J',
    cardNumber: 11,
    color: 'black',
    category: 'Materials in Orbit',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Shiny metallic surfaces in orbit',
    isReal: true,
    translations: {
      en: {
        categoryName: 'Cold Welding',
        title: 'Metals Fuse Automatically in Space',
        claim: 'If two clean pieces of the exact same metal touch in the vacuum of space, they fuse together permanently without heat.',
        explanation: 'Without air or an oxide barrier separating them, the metal atoms have no way of knowing they belong to different pieces.'
      },
      vi: {
        categoryName: 'Vật liệu vũ trụ',
        title: 'Kim loại tự hàn dính ngoài không gian',
        claim: 'Nếu hai miếng kim loại cùng loại sạch sẽ chạm vào nhau trong chân không vũ trụ, chúng sẽ hàn dính vĩnh viễn không cần lửa.',
        explanation: 'Vì không có oxy hay lớp màng ô-xít ngăn cách, các nguyên tử kim loại tự động kết nối như một khối đồng nhất.'
      }
    }
  },
  {
    id: 'disc-spades-Q',
    suit: '♠',
    suitName: 'spades',
    rank: 'Q',
    cardNumber: 12,
    color: 'black',
    category: 'Astrophysics',
    imageUrl: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Bright stars shining in night sky',
    isReal: false,
    translations: {
      en: {
        categoryName: 'Night Sky',
        title: 'Polaris: The Brightest Star in the Sky',
        claim: 'The North Star (Polaris) is the brightest star visible in our entire night sky.',
        explanation: 'Sirius (the Dog Star) is the brightest star in the night sky. Polaris is actually around 48th in apparent brightness!'
      },
      vi: {
        categoryName: 'Bầu trời đêm',
        title: 'Sao Bắc Đẩu sáng nhất bầu trời đêm',
        claim: 'Sao Bắc Cực (Polaris) là ngôi sao sáng rực rỡ nhất có thể nhìn thấy trên toàn bộ bầu trời đêm.',
        explanation: 'Sao Thiên Lang (Sirius) mới là ngôi sao sáng nhất bầu trời đêm. Sao Bắc Cực chỉ đứng khoảng thứ 48 về độ sáng biểu kiến!'
      }
    }
  },
  {
    id: 'disc-spades-K',
    suit: '♠',
    suitName: 'spades',
    rank: 'K',
    cardNumber: 13,
    color: 'black',
    category: 'Light & Time',
    imageUrl: 'https://images.unsplash.com/photo-1538370965046-79c0d6907d47?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Golden sunlight beams shining down',
    isReal: true,
    translations: {
      en: {
        categoryName: 'Light Travel',
        title: 'Sunlight is Over 8 Minutes Old',
        claim: 'Sunlight hitting your skin right now departed from the surface of the Sun approximately 8 minutes and 20 seconds ago.',
        explanation: 'Traveling at 299,792 km/s across 150 million kilometers, photons take roughly 500 seconds to reach Earth.'
      },
      vi: {
        categoryName: 'Vận tốc ánh sáng',
        title: 'Ánh nắng Mặt Trời từ quá khứ',
        claim: 'Tia nắng đang chạm vào da bạn lúc này đã rời khỏi bề mặt Mặt Trời cách đây khoảng 8 phút và 20 giây.',
        explanation: 'Với tốc độ 299.792 km/s qua quãng đường 150 triệu km, hạt ánh sáng mất đúng khoảng 500 giây để tới được Trái Đất.'
      }
    }
  },

  // ==========================================
  // HEARTS ♥ (Living Biology, Animals & Humans)
  // Cards 14 to 26 (6 Facts, 7 Fakes)
  // ==========================================
  {
    id: 'disc-hearts-A',
    suit: '♥',
    suitName: 'hearts',
    rank: 'A',
    cardNumber: 14,
    color: 'red',
    category: 'Neuroscience',
    imageUrl: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Brain synapses glowing with electric blue signals',
    isReal: false,
    translations: {
      en: {
        categoryName: 'Brain Capacity',
        title: 'The 10% Brain Myth',
        claim: 'Humans only use roughly 10% of their brain capacity; unlocking the other 90% enables superhuman intelligence.',
        explanation: 'Functional brain scans (fMRI) reveal that humans use virtually 100% of their brain across different activities throughout the day.'
      },
      vi: {
        categoryName: 'Năng lực não bộ',
        title: 'Hiểu lầm chỉ dùng 10% não bộ',
        claim: 'Con người chỉ sử dụng khoảng 10% công suất não bộ; mở khóa 90% còn lại sẽ giúp con người có siêu trí tuệ.',
        explanation: 'Hình ảnh chụp cộng hưởng từ chức năng (fMRI) cho thấy chúng ta sử dụng gần như 100% bộ não cho các hoạt động thường ngày.'
      }
    }
  },
  {
    id: 'disc-hearts-2',
    suit: '♥',
    suitName: 'hearts',
    rank: '2',
    cardNumber: 15,
    color: 'red',
    category: 'Marine Creatures',
    imageUrl: 'https://images.unsplash.com/photo-1545671913-b89ac1b4ac10?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Octopus swimming with tentacles underwater',
    isReal: true,
    translations: {
      en: {
        categoryName: 'Cephalopods',
        title: 'Three Hearts and Blue Blood',
        claim: 'An octopus has three functioning hearts and blue copper-based blood instead of iron-based red blood.',
        explanation: 'Two branchial hearts pump blood to the gills, while a systemic heart pumps blue hemocyanin blood to the body.'
      },
      vi: {
        categoryName: 'Sinh vật biển',
        title: 'Ba trái tim và dòng máu xanh',
        claim: 'Bạch tuộc sở hữu 3 quả tim hoạt động độc lập và dòng máu màu xanh lam gốc đồng thay vì gốc sắt như con người.',
        explanation: 'Hai quả tim mang bơm máu qua mang, một quả tim chính bơm dòng máu chứa sắc tố hemocyanin xanh đi nuôi khắp cơ thể.'
      }
    }
  },
  {
    id: 'disc-hearts-3',
    suit: '♥',
    suitName: 'hearts',
    rank: '3',
    cardNumber: 16,
    color: 'red',
    category: 'Reptile Biology',
    imageUrl: 'https://images.unsplash.com/photo-1535083783855-76ae62b2914e?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Chameleon perched on leafy branch',
    isReal: false,
    translations: {
      en: {
        categoryName: 'Camouflage',
        title: 'Chameleons Change Color for Camouflage',
        claim: 'Chameleons change their skin color primarily to blend in and camouflage with whatever background surface they touch.',
        explanation: 'Chameleons change color mainly for social signaling (dominance, mating) and thermoregulation to absorb or reflect heat.'
      },
      vi: {
        categoryName: 'Ngụy trang sinh học',
        title: 'Tắc kè đổi màu để ngụy trang',
        claim: 'Tắc kè hoa đổi màu da mục đích chính là để hòa nhập và ngụy trang tiệp với màu của đồ vật chúng bám vào.',
        explanation: 'Tắc kè đổi màu chủ yếu để thể hiện cảm xúc (giao phối, cảnh báo kẻ thù) và điều hòa thân nhiệt dưới ánh nắng mặt trời.'
      }
    }
  },
  {
    id: 'disc-hearts-4',
    suit: '♥',
    suitName: 'hearts',
    rank: '4',
    cardNumber: 17,
    color: 'red',
    category: 'Ocean Giants',
    imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Blue whale massive body deep blue water',
    isReal: true,
    translations: {
      en: {
        categoryName: 'Blue Whales',
        title: 'The Car-Sized Whale Heart',
        claim: 'The heart of an adult blue whale weighs approximately 180 kg (400 lbs), comparable in size to a golf cart.',
        explanation: 'Its primary aorta is wide enough that a human toddler could crawl through it, pumping 220 liters of blood per beat.'
      },
      vi: {
        categoryName: 'Khổng lồ đại dương',
        title: 'Trái tim to bằng ô tô',
        claim: 'Trái tim của cá voi xanh trưởng thành nặng khoảng 180 kg, có kích thước tương đương một chiếc xe ô tô nhỏ.',
        explanation: 'Động mạch chủ của nó lớn tới mức một đứa trẻ có thể bò qua, và mỗi nhịp tim bơm tới 220 lít máu đi khắp cơ thể.'
      }
    }
  },
  {
    id: 'disc-hearts-5',
    suit: '♥',
    suitName: 'hearts',
    rank: '5',
    cardNumber: 18,
    color: 'red',
    category: 'Animal Vision',
    imageUrl: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Bull looking intensely at red cape',
    isReal: false,
    translations: {
      en: {
        categoryName: 'Color Perception',
        title: 'Bulls Hate the Color Red',
        claim: 'Bulls become furiously enraged in bullfights because the color red biologically provokes extreme aggressive hostility in them.',
        explanation: 'Cattle are dichromatic (red-green colorblind). Bulls react entirely to the aggressive whipping motion of the matador’s cape.'
      },
      vi: {
        categoryName: 'Thị giác động vật',
        title: 'Bò tót phát điên vì màu đỏ',
        claim: 'Bò tót trong các trận đấu bò trở nên hung dữ phát cuồng vì sắc tố đỏ kích thích bản năng thù địch của chúng.',
        explanation: 'Bò bị mù màu đỏ - xanh lá. Chúng nổi giận lao tới tấn công hoàn toàn là do chuyển động phất phơ khiêu khích của tấm vải.'
      }
    }
  },
  {
    id: 'disc-hearts-6',
    suit: '♥',
    suitName: 'hearts',
    rank: '6',
    cardNumber: 19,
    color: 'red',
    category: 'Rainforest Biology',
    imageUrl: 'https://images.unsplash.com/photo-1505148230895-d9a785a555fa?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Sloth hanging peacefully upside down in forest',
    isReal: true,
    translations: {
      en: {
        categoryName: 'Metabolism',
        title: 'The Sloth’s Month-Long Digestion',
        claim: 'It can take a wild sloth up to 30 days to fully digest a single leaf.',
        explanation: 'Sloths have the slowest metabolic rate of any mammal, using specialized multi-chambered stomachs packed with symbiotic bacteria.'
      },
      vi: {
        categoryName: 'Trao đổi chất',
        title: 'Bữa ăn tiêu hóa 1 tháng của chú lười',
        claim: 'Một con lười có thể mất tới 30 ngày chỉ để tiêu hóa xong trọn vẹn một chiếc lá cây duy nhất.',
        explanation: 'Con lười có tốc độ trao đổi chất chậm nhất trong thế giới thú, dạ dày 4 ngăn chứa vi khuẩn tiêu hóa lá cây vô cùng chậm chạp.'
      }
    }
  },
  {
    id: 'disc-hearts-7',
    suit: '♥',
    suitName: 'hearts',
    rank: '7',
    cardNumber: 20,
    color: 'red',
    category: 'Avian Myths',
    imageUrl: 'https://images.unsplash.com/photo-1528659582531-152e92cbbec4?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Baby bird resting in nest',
    isReal: false,
    translations: {
      en: {
        categoryName: 'Nesting Habits',
        title: 'Human Scent Causes Mother Birds to Abandon Chicks',
        claim: 'If you touch a fallen baby bird, the mother will smell human scent on it and immediately abandon the chick to die.',
        explanation: 'Most birds have a very weak sense of smell and cannot detect human scent; mother birds will readily continue caring for returned chicks.'
      },
      vi: {
        categoryName: 'Tập tính loài chim',
        title: 'Mùi người khiến chim mẹ bỏ rơi con',
        claim: 'Nếu bạn chạm tay vào chim non rơi khỏi tổ, chim mẹ ngửi thấy hơi người sẽ lập tức ruồng bỏ con đến chết.',
        explanation: 'Hầu hết các loài chim có khứu giác rất kém và không ngửi được mùi người; chim mẹ vẫn sẽ ân cần chăm sóc nếu bạn nhặt chim non về tổ.'
      }
    }
  },
  {
    id: 'disc-hearts-8',
    suit: '♥',
    suitName: 'hearts',
    rank: '8',
    cardNumber: 21,
    color: 'red',
    category: 'Marine Mammals',
    imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Two sea otters floating holding hands',
    isReal: true,
    translations: {
      en: {
        categoryName: 'Otters',
        title: 'Sea Otters Hold Hands Sleeping',
        claim: 'Sea otters hold paws with each other while sleeping on the ocean surface to avoid drifting apart in currents.',
        explanation: 'Rafts of otters link paws and wrap themselves in kelp canopies as natural anchoring systems while resting.'
      },
      vi: {
        categoryName: 'Rái cá biển',
        title: 'Rái cá nắm tay nhau khi ngủ',
        claim: 'Rái cá biển có thói quen nắm chặt tay nhau khi trôi nổi ngủ trên mặt biển để không bị dòng nước cuốn trôi xa nhau.',
        explanation: 'Các đàn rái cá nắm tay nhau thành bè và quấn mình vào những tán tảo bẹ như mỏ neo tự nhiên để giữ an toàn khi ngủ.'
      }
    }
  },
  {
    id: 'disc-hearts-9',
    suit: '♥',
    suitName: 'hearts',
    rank: '9',
    cardNumber: 22,
    color: 'red',
    category: 'Dermatology',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Razor shaving close-up skin',
    isReal: false,
    translations: {
      en: {
        categoryName: 'Hair Growth',
        title: 'Shaving Makes Hair Grow Back Thicker',
        claim: 'Shaving body hair cuts follicles in a way that causes the hair to grow back noticeably thicker, darker, and faster.',
        explanation: 'Shaving only cuts hair at the surface with a blunt edge, making it feel temporarily coarser. It does not affect follicle density or color.'
      },
      vi: {
        categoryName: 'Da liễu học',
        title: 'Cạo lông làm lông mọc dày và đen hơn',
        claim: 'Việc cạo lông sẽ kích thích chân lông khiến các sợi lông mọc lại sau đó dày hơn, đậm màu hơn và nhanh hơn.',
        explanation: 'Dao cạo chỉ cắt phần ngọn tạo đầu tù phẳng khiến bạn sờ thấy ram ráp, chứ hoàn toàn không làm thay đổi số lượng hay độ dày của nang lông.'
      }
    }
  },
  {
    id: 'disc-hearts-10',
    suit: '♥',
    suitName: 'hearts',
    rank: '10',
    cardNumber: 23,
    color: 'red',
    category: 'Avian Aerodynamics',
    imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Tiny emerald hummingbird hovering',
    isReal: true,
    translations: {
      en: {
        categoryName: 'Hummingbirds',
        title: 'The Backward-Flying Bird',
        claim: 'Hummingbirds are the only birds on Earth with the aerodynamic capability to fly backwards.',
        explanation: 'Their unique ball-and-socket shoulder joints allow wings to rotate 180 degrees in a figure-eight pattern, creating lift in all directions.'
      },
      vi: {
        categoryName: 'Khí động học loài chim',
        title: 'Loài chim duy nhất bay lùi',
        claim: 'Chim ruồi là loài chim duy nhất trên Trái Đất có khả năng khí động học đặc biệt cho phép chúng bay lùi về phía sau.',
        explanation: 'Khớp cánh linh hoạt xoay 180 độ theo hình số 8 giúp chim ruồi tạo lực nâng ở mọi hướng: lơ lửng, bay lộn ngược và bay giật lùi.'
      }
    }
  },
  {
    id: 'disc-hearts-J',
    suit: '♥',
    suitName: 'hearts',
    rank: 'J',
    cardNumber: 24,
    color: 'red',
    category: 'Chiroptera',
    imageUrl: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Bat flying in dark cave',
    isReal: false,
    translations: {
      en: {
        categoryName: 'Bat Myths',
        title: 'Bats are Completely Blind',
        claim: 'All bat species are completely blind, relying 100% on ultrasonic echolocation to find prey and avoid objects.',
        explanation: 'No bat species is blind. Fruit bats have exceptional eyesight adapted for low light, and insect-hunting bats use eyes alongside sonar.'
      },
      vi: {
        categoryName: 'Hiểu lầm về loài dơi',
        title: 'Loài dơi hoàn toàn bị mù',
        claim: 'Tất cả các loài dơi đều bị mù hoàn toàn, phải dựa 100% vào sóng siêu âm định vị để săn mồi và tránh chướng ngại vật.',
        explanation: 'Không có loài dơi nào mù cả. Dơi ăn quả có thị lực ban đêm cực kỳ tinh tường, còn dơi ăn côn trùng dùng mắt kết hợp sóng siêu âm.'
      }
    }
  },
  {
    id: 'disc-hearts-Q',
    suit: '♥',
    suitName: 'hearts',
    rank: 'Q',
    cardNumber: 25,
    color: 'red',
    category: 'Food Chemistry',
    imageUrl: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Golden honey dripping from wooden wand',
    isReal: true,
    translations: {
      en: {
        categoryName: 'Honey Preservation',
        title: 'Honey Never Spoils',
        claim: 'Pure natural honey is chemically immortal and will never spoil over thousands of years if kept sealed.',
        explanation: 'Honey’s extremely low moisture content, high acidity (pH ~3.9), and natural hydrogen peroxide prevent all bacteria from reproducing.'
      },
      vi: {
        categoryName: 'Hóa học thực phẩm',
        title: 'Mật ong nghìn năm không hỏng',
        claim: 'Mật ong nguyên chất về mặt hóa học là vĩnh cửu và sẽ không bao giờ bị hỏng dù để qua hàng nghìn năm nếu được đậy kín.',
        explanation: 'Độ ẩm cực thấp, tính axit cao (pH ~3,9) và enzyme tiết ra hydrogen peroxide tự nhiên ngăn chặn tuyệt đối vi khuẩn sinh sôi.'
      }
    }
  },
  {
    id: 'disc-hearts-K',
    suit: '♥',
    suitName: 'hearts',
    rank: 'K',
    cardNumber: 26,
    color: 'red',
    category: 'Marine Oncology',
    imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Shark swimming in deep ocean water',
    isReal: false,
    translations: {
      en: {
        categoryName: 'Shark Immunity',
        title: 'Sharks Never Get Cancer',
        claim: 'Sharks possess unique cartilage antibodies that make them 100% biologically immune to developing any forms of cancer.',
        explanation: 'Sharks definitely get cancer. Scientists have documented malignant tumors and carcinomas in over 40 distinct shark and ray species.'
      },
      vi: {
        categoryName: 'Miễn dịch cá mập',
        title: 'Cá mập không bao giờ bị ung thư',
        claim: 'Cá mập sở hữu sụn kháng thể đặc biệt giúp chúng miễn nhiễm 100% về mặt sinh học trước tất cả các bệnh ung thư.',
        explanation: 'Cá mập vẫn bị ung thư bình thường. Các nhà sinh học biển đã ghi nhận khối u ác tính ở hơn 40 loài cá mập và cá đuối khác nhau.'
      }
    }
  },

  // ==========================================
  // DIAMONDS ♦ (Vietnam, History, Culture & Food)
  // Cards 27 to 39 (7 Facts, 6 Fakes)
  // ==========================================
  {
    id: 'disc-diamonds-A',
    suit: '♦',
    suitName: 'diamonds',
    rank: 'A',
    cardNumber: 27,
    color: 'red',
    category: 'Vietnam Natural Marvel',
    imageUrl: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Son Doong cave massive cavern entrance',
    isReal: true,
    translations: {
      en: {
        categoryName: 'World Caves',
        title: 'Sơn Đoòng: The World’s Largest Cave',
        claim: 'Hang Sơn Đoòng in Vietnam is the largest natural cave in the world, capable of fitting a 40-story skyscraper inside its main passage.',
        explanation: 'Surveyed by the British Cave Research Association, its colossal passage volume reaches 38.5 million cubic meters.'
      },
      vi: {
        categoryName: 'Kỳ quan Việt Nam',
        title: 'Sơn Đoòng: Hang động lớn nhất thế giới',
        claim: 'Hang Sơn Đoòng tại Quảng Bình là hang động tự nhiên lớn nhất thế giới, chứa vừa một tòa nhà chọc trời 40 tầng.',
        explanation: 'Hiệp hội Hang động Hoàng gia Anh đã đo đạc thể tích khoang chính lên tới 38,5 triệu mét khối, vượt qua mọi hang động khác trên Trái Đất.'
      }
    }
  },
  {
    id: 'disc-diamonds-2',
    suit: '♦',
    suitName: 'diamonds',
    rank: '2',
    cardNumber: 28,
    color: 'red',
    category: 'Culinary History',
    imageUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Golden fortune cookie broken in half with paper slip',
    isReal: false,
    translations: {
      en: {
        categoryName: 'Food Origins',
        title: 'Fortune Cookies Came from China',
        claim: 'Fortune cookies originated as an ancient traditional imperial palace snack in China centuries ago.',
        explanation: 'Fortune cookies were invented by Japanese immigrants in California in the early 20th century. Most people in China have never eaten them.'
      },
      vi: {
        categoryName: 'Lịch sử ẩm thực',
        title: 'Bánh may mắn xuất xứ từ Trung Quốc',
        claim: 'Bánh quy may mắn (fortune cookie) bắt nguồn từ món bánh truyền thống cổ xưa của cung đình Trung Hoa hàng thế kỷ trước.',
        explanation: 'Bánh may mắn được sáng tạo bởi những người nhập cư Nhật Bản tại California (Mỹ) đầu thế kỷ 20; tại Trung Quốc phần lớn người dân không biết món này.'
      }
    }
  },
  {
    id: 'disc-diamonds-3',
    suit: '♦',
    suitName: 'diamonds',
    rank: '3',
    cardNumber: 29,
    color: 'red',
    category: 'Vietnam Agriculture',
    imageUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Dark roasted coffee beans pile',
    isReal: true,
    translations: {
      en: {
        categoryName: 'Coffee Production',
        title: 'Vietnam Leads Robusta Worldwide',
        claim: 'Vietnam produces and exports roughly 40% of the entire world’s supply of Robusta coffee beans.',
        explanation: 'Vietnam’s rich volcanic basalt soil in the Central Highlands (Tây Nguyên) has made it the undisputed global powerhouse of bold Robusta.'
      },
      vi: {
        categoryName: 'Nông nghiệp Việt Nam',
        title: 'Việt Nam dẫn đầu Robusta toàn cầu',
        claim: 'Việt Nam sản xuất và xuất khẩu khoảng 40% tổng sản lượng cà phê Robusta trên toàn thế giới.',
        explanation: 'Đất đỏ bazan màu mỡ vùng Tây Nguyên đưa Việt Nam trở thành cường quốc số 1 không thể tranh cãi về xuất khẩu cà phê Robusta.'
      }
    }
  },
  {
    id: 'disc-diamonds-4',
    suit: '♦',
    suitName: 'diamonds',
    rank: '4',
    cardNumber: 30,
    color: 'red',
    category: 'Historical Chronology',
    imageUrl: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Pyramids of Giza in twilight',
    isReal: false,
    translations: {
      en: {
        categoryName: 'Chronology',
        title: 'Cleopatra Lived Closer to the Pyramids',
        claim: 'Queen Cleopatra VII lived much closer in chronological history to the construction of the Great Pyramids than to the modern Moon landing.',
        explanation: 'The Pyramids were built around 2500 BCE. Cleopatra lived around 30 BCE (2,470 years later), which is closer to the 1969 Moon landing (2,000 years later)!'
      },
      vi: {
        categoryName: 'Trục thời gian',
        title: 'Cleopatra sống gần thời Kim Tự Tháp hơn',
        claim: 'Nữ hoàng Cleopatra sống gần thời kỳ xây dựng Đại Kim Tự Tháp hơn nhiều so với thời điểm con người đặt chân lên Mặt Trăng.',
        explanation: 'Kim tự tháp xây năm 2500 TCN, Cleopatra sống năm 30 TCN (cách 2.470 năm), trong khi từ thời Cleopatra đến cuộc đổ bộ Mặt Trăng chỉ cách 2.000 năm!'
      }
    }
  },
  {
    id: 'disc-diamonds-5',
    suit: '♦',
    suitName: 'diamonds',
    rank: '5',
    cardNumber: 31,
    color: 'red',
    category: 'UNESCO World Heritage',
    imageUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Ha Long Bay limestone islands rising emerald water',
    isReal: true,
    translations: {
      en: {
        categoryName: 'Vietnam Karsts',
        title: 'Over 1,600 Isles in Hạ Long Bay',
        claim: 'Hạ Long Bay in northern Vietnam comprises more than 1,600 towering limestone pillars and isles shaped over 500 million years.',
        explanation: 'UNESCO recognized Hạ Long Bay for its exceptional geological karst value formed through repetitive marine transgressions.'
      },
      vi: {
        categoryName: 'Kỳ quan Hạ Long',
        title: 'Hơn 1.600 đảo đá Vịnh Hạ Long',
        claim: 'Vịnh Hạ Long của Việt Nam sở hữu hơn 1.600 hòn đảo và cột đá vôi sừng sững hình thành qua hơn 500 triệu năm.',
        explanation: 'UNESCO đã công nhận Vịnh Hạ Long là di sản thiên nhiên thế giới nhờ giá trị địa chất karst độc nhất vô nhị trải qua các thời kỳ biển tiến biển thoái.'
      }
    }
  },
  {
    id: 'disc-diamonds-6',
    suit: '♦',
    suitName: 'diamonds',
    rank: '6',
    cardNumber: 32,
    color: 'red',
    category: 'Thermoregulation',
    imageUrl: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Glass of alcoholic spirit with ice in snowy weather',
    isReal: false,
    translations: {
      en: {
        categoryName: 'Alcohol & Cold',
        title: 'Alcohol Warms You Up in Freezing Cold',
        claim: 'Drinking strong alcohol like whiskey or vodka keeps your internal body core warm and helps prevent deadly hypothermia in winter.',
        explanation: 'Alcohol dilates blood vessels near the skin, giving a deceptive sensation of warmth while rapidly draining heat from vital internal organs.'
      },
      vi: {
        categoryName: 'Nhiệt độ cơ thể',
        title: 'Uống rượu giúp giữ ấm cơ thể mùa lạnh',
        claim: 'Uống rượu mạnh như whisky hay vodka giúp giữ ấm các cơ quan nội tạng và ngăn ngừa hạ thân nhiệt nguy hiểm vào mùa đông.',
        explanation: 'Rượu làm giãn mạch máu dưới da khiến bạn cảm giác ấm lên tức thì, nhưng thực chất làm nhiệt lượng bên trong cơ thể thoát ra ngoài cực nhanh.'
      }
    }
  },
  {
    id: 'disc-diamonds-7',
    suit: '♦',
    suitName: 'diamonds',
    rank: '7',
    cardNumber: 33,
    color: 'red',
    category: 'Ancient Universities',
    imageUrl: 'https://images.unsplash.com/photo-1520970014086-2208d157c9e2?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Oxford university historic stone quadrangle',
    isReal: true,
    translations: {
      en: {
        categoryName: 'History of Academia',
        title: 'Oxford is Older than the Aztecs',
        claim: 'The University of Oxford in England was already educating students centuries before the Aztec Empire was founded in Mesoamerica.',
        explanation: 'Teaching at Oxford was underway by 1096 CE. The Aztec Empire only formed in 1428 CE with the Triple Alliance.'
      },
      vi: {
        categoryName: 'Lịch sử giáo dục',
        title: 'Đại học Oxford lâu hơn Đế chế Aztec',
        claim: 'Đại học Oxford tại Anh đã mở cửa giảng dạy nhiều thế kỷ trước khi Đế chế Aztec được thành lập ở châu Mỹ.',
        explanation: 'Oxford bắt đầu giảng dạy từ năm 1096. Trong khi đó, Đế chế Aztec chỉ được thành lập vào năm 1428 sau liên minh ba thành bang.'
      }
    }
  },
  {
    id: 'disc-diamonds-8',
    suit: '♦',
    suitName: 'diamonds',
    rank: '8',
    cardNumber: 34,
    color: 'red',
    category: 'Food Myths',
    imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Seasoning powder spoon over delicious bowl of pho',
    isReal: false,
    translations: {
      en: {
        categoryName: 'MSG Science',
        title: 'MSG is Toxic to the Human Brain',
        claim: 'Monosodium glutamate (MSG / mì chính) is a dangerous food additive that causes nerve damage and "Chinese Restaurant Syndrome".',
        explanation: 'Decades of clinical studies evaluated by the FDA and WHO found no evidence that MSG causes health harm; glutamate is naturally high in cheese and tomatoes.'
      },
      vi: {
        categoryName: 'Khoa học gia vị',
        title: 'Mì chính (bột ngọt) gây hại cho não',
        claim: 'Mì chính (bột ngọt / MSG) là chất phụ gia độc hại gây tổn thương thần kinh và hội chứng nhà hàng Trung Hoa.',
        explanation: 'Nhiều thập kỷ nghiên cứu của FDA và WHO khẳng định bột ngọt an toàn; chất glutamate này có tự nhiên trong cà chua, phô mai và nấm với lượng lớn.'
      }
    }
  },
  {
    id: 'disc-diamonds-9',
    suit: '♦',
    suitName: 'diamonds',
    rank: '9',
    cardNumber: 35,
    color: 'red',
    category: 'Ancient Masonry',
    imageUrl: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Ancient Roman aqueduct and colosseum stones',
    isReal: true,
    translations: {
      en: {
        categoryName: 'Roman Concrete',
        title: 'Self-Healing Roman Concrete',
        claim: 'Ancient Roman harbor concrete was engineered to heal its own cracks when exposed to seawater over centuries.',
        explanation: 'Volcanic ash and lime clasts react with incoming saltwater to trigger the crystallization of aluminous tobermorite, strengthening the structure.'
      },
      vi: {
        categoryName: 'Bê tông La Mã',
        title: 'Bê tông La Mã tự vá lành vết nứt',
        claim: 'Bê tông bến cảng La Mã cổ đại có khả năng tự hàn gắn các vết nứt nhỏ khi tiếp xúc với nước biển qua nhiều thế kỷ.',
        explanation: 'Tro núi lửa và vôi sống phản ứng với nước biển kích hoạt tinh thể tobermorite phát triển, giúp công trình càng ngâm nước lại càng thêm bền chắc.'
      }
    }
  },
  {
    id: 'disc-diamonds-10',
    suit: '♦',
    suitName: 'diamonds',
    rank: '10',
    cardNumber: 36,
    color: 'red',
    category: 'Physical Geography',
    imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'High snow mountain peak reaching towards space',
    isReal: false,
    translations: {
      en: {
        categoryName: 'Earth Summits',
        title: 'Mount Everest is Closest to Space',
        claim: 'Because Mount Everest is the highest peak above sea level, its summit is the closest spot on Earth to outer space.',
        explanation: 'Because Earth bulges at the equator, Mount Chimborazo in Ecuador is 2,072 meters farther from Earth’s core than Everest, making it closest to space!'
      },
      vi: {
        categoryName: 'Địa lý đỉnh cao',
        title: 'Đỉnh Everest ở gần vũ trụ nhất',
        claim: 'Vì đỉnh Everest có độ cao lớn nhất so với mực nước biển, nên đỉnh núi này là điểm trên mặt đất ở gần không gian vũ trụ nhất.',
        explanation: 'Trái Đất phình to ở xích đạo, nên đỉnh núi Chimborazo tại Ecuador mới là điểm cách xa tâm Trái Đất nhất, gần vũ trụ hơn Everest tới 2.072 m!'
      }
    }
  },
  {
    id: 'disc-diamonds-J',
    suit: '♦',
    suitName: 'diamonds',
    rank: 'J',
    cardNumber: 37,
    color: 'red',
    category: 'Vietnam Folk Tradition',
    imageUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Vietnamese traditional water puppetry figures on water',
    isReal: true,
    translations: {
      en: {
        categoryName: 'Folk Theater',
        title: 'Múa Rối Nước: The Ricefield Stage',
        claim: 'Vietnamese water puppetry originated in the 11th century when farmers turned flooded rice paddies into floating theatrical stages.',
        explanation: 'Puppeteers submerged in flooded paddies manipulated wooden puppets on long bamboo poles behind woven screens to celebrate harvest festivals.'
      },
      vi: {
        categoryName: 'Nghệ thuật dân gian',
        title: 'Múa Rối Nước trên đồng lúa',
        claim: 'Nghệ thuật múa rối nước Việt Nam bắt nguồn từ thế kỷ 11 khi nông dân biến những thửa ruộng ngập nước thành sân khấu biểu diễn.',
        explanation: 'Các nghệ nhân ngâm mình dưới nước sau rèm tre điều khiển con rối bằng sào tre dài để giúp vui cho dân làng vào những dịp hội làng sau mùa gặt.'
      }
    }
  },
  {
    id: 'disc-diamonds-Q',
    suit: '♦',
    suitName: 'diamonds',
    rank: 'Q',
    cardNumber: 38,
    color: 'red',
    category: 'Beverage Science',
    imageUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Fresh cup of coffee steam rising',
    isReal: false,
    translations: {
      en: {
        categoryName: 'Hydration',
        title: 'Coffee Causes Net Dehydration',
        claim: 'Drinking a cup of brewed coffee dehydrates your body faster than the volume of water you consumed in the beverage.',
        explanation: 'While caffeine has a very mild diuretic effect, studies show the water content in coffee easily offsets it, contributing positively to hydration.'
      },
      vi: {
        categoryName: 'Cân bằng nước',
        title: 'Uống cà phê làm cơ thể mất nước',
        claim: 'Uống một ly cà phê sẽ làm cơ thể bạn mất nước nhiều hơn tổng lượng nước bạn vừa uống vào từ ly cà phê đó.',
        explanation: 'Dù caffeine có tác dụng lợi tiểu nhẹ, nghiên cứu chứng minh lượng nước dồi dào trong ly cà phê vẫn giúp bù nước hiệu quả cho cơ thể.'
      }
    }
  },
  {
    id: 'disc-diamonds-K',
    suit: '♦',
    suitName: 'diamonds',
    rank: 'K',
    cardNumber: 39,
    color: 'red',
    category: 'Freshwater Wonders',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Deep crystal blue frozen lake water',
    isReal: true,
    translations: {
      en: {
        categoryName: 'Lake Baikal',
        title: 'Lake Baikal: 20% of Fresh Water',
        claim: 'Lake Baikal contains 20% of the world’s unfrozen surface freshwater — more than all 5 North American Great Lakes combined.',
        explanation: 'Reaching a depth of 1,642 meters (5,387 ft), it is both the deepest and oldest freshwater lake on our planet.'
      },
      vi: {
        categoryName: 'Hồ nước ngọt khổng lồ',
        title: 'Hồ Baikal chứa 20% nước ngọt thế giới',
        claim: 'Hồ Baikal chứa tới 20% tổng lượng nước ngọt không đóng băng trên bề mặt Trái Đất — nhiều hơn cả 5 Ngũ Đại Hồ Bắc Mỹ cộng lại.',
        explanation: 'Với độ sâu kỷ lục 1.642 m và tuổi đời 25 triệu năm, đây là hồ nước ngọt sâu nhất và cổ xưa nhất trên hành tinh chúng ta.'
      }
    }
  },

  // ==========================================
  // CLUBS ♣ (Science, Chemistry, Physics & Everyday Myths)
  // Cards 40 to 52 (6 Facts, 7 Fakes)
  // ==========================================
  {
    id: 'disc-clubs-A',
    suit: '♣',
    suitName: 'clubs',
    rank: 'A',
    cardNumber: 40,
    color: 'black',
    category: 'Atmospheric Physics',
    imageUrl: 'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Lightning striking the exact same spot in stormy sky',
    isReal: false,
    translations: {
      en: {
        categoryName: 'Lightning',
        title: 'Lightning Never Strikes the Same Place Twice',
        claim: 'A bolt of lightning will never strike the exact same physical location twice under natural atmospheric conditions.',
        explanation: 'Lightning repeatedly strikes tall, conductive points. The Empire State Building is struck by lightning an average of 25 times every single year!'
      },
      vi: {
        categoryName: 'Khí quyển sấm sét',
        title: 'Sét không bao giờ đánh một chỗ hai lần',
        claim: 'Tia sét tự nhiên sẽ không bao giờ giáng xuống cùng một vị trí hai lần trong điều kiện khí quyển bình thường.',
        explanation: 'Sét đánh liên tục vào các điểm cao dẫn điện. Tòa nhà Empire State tại New York bị sét đánh trúng trung bình 25 lần mỗi năm!'
      }
    }
  },
  {
    id: 'disc-clubs-2',
    suit: '♣',
    suitName: 'clubs',
    rank: '2',
    cardNumber: 41,
    color: 'black',
    category: 'Thermodynamics',
    imageUrl: 'https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Ice crystals and boiling bubbles in glass beaker',
    isReal: true,
    translations: {
      en: {
        categoryName: 'Triple Point',
        title: 'Water Boils and Freezes Simultaneously',
        claim: 'Under precise thermodynamic conditions, water can boil violently and freeze into solid ice at the exact same instant.',
        explanation: 'At 0.01°C and 0.006 atm of pressure (the triple point), solid, liquid, and vapor phases of water exist in thermodynamic equilibrium.'
      },
      vi: {
        categoryName: 'Nhiệt động học',
        title: 'Nước vừa sôi vừa đóng băng cùng lúc',
        claim: 'Dưới điều kiện nhiệt động học đặc biệt, nước có thể sôi sùng sục và đóng băng thành đá rắn ngay tại cùng một khoảnh khắc.',
        explanation: 'Tại 0,01°C và áp suất 0,006 atm (điểm ba), ba thể rắn, lỏng và khí của nước cùng tồn tại ở trạng thái cân bằng kỳ diệu.'
      }
    }
  },
  {
    id: 'disc-clubs-3',
    suit: '♣',
    suitName: 'clubs',
    rank: '3',
    cardNumber: 42,
    color: 'black',
    category: 'Material Science',
    imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Old stained glass church window glass reflection',
    isReal: false,
    translations: {
      en: {
        categoryName: 'Glass Physics',
        title: 'Glass is a Slow-Flowing Liquid',
        claim: 'Window glass is actually a supercooled liquid that slowly flows downward over centuries, which is why old church windows are thicker at the bottom.',
        explanation: 'Glass is an amorphous solid. Antique windows are thicker at the bottom because medieval glassblowers deliberately placed the thicker edge down for stability.'
      },
      vi: {
        categoryName: 'Khoa học vật liệu',
        title: 'Thủy tinh là chất lỏng chảy chậm',
        claim: 'Kính cửa sổ thực chất là chất lỏng siêu lạnh tự chảy chầm chậm xuống đáy qua nhiều thế kỷ, khiến kính nhà thờ cổ dày ở phần đáy.',
        explanation: 'Thủy tinh là chất rắn vô định hình không thể tự chảy. Kính nhà thờ cổ dày ở đáy là do kỹ thuật xoay thổi kính thủ công ngày xưa tạo độ dày không đều.'
      }
    }
  },
  {
    id: 'disc-clubs-4',
    suit: '♣',
    suitName: 'clubs',
    rank: '4',
    cardNumber: 43,
    color: 'black',
    category: 'Nuclear Physics',
    imageUrl: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Ripe yellow bananas bunch on table',
    isReal: true,
    translations: {
      en: {
        categoryName: 'Radioactivity',
        title: 'Bananas are Naturally Radioactive',
        claim: 'Due to their natural mineral composition, ordinary bananas are naturally radioactive.',
        explanation: 'Bananas are rich in potassium, a small fraction of which is the natural radioactive isotope Potassium-40 (K-40).'
      },
      vi: {
        categoryName: 'Vật lý hạt nhân',
        title: 'Chuối có tính phóng xạ tự nhiên',
        claim: 'Do thành phần khoáng chất tự nhiên của mình, những quả chuối thông thường có phát ra phóng xạ.',
        explanation: 'Chuối rất giàu kali, trong đó có một tỷ lệ nhỏ là đồng vị phóng xạ tự nhiên Kali-40 (K-40) phát ra các hạt bức xạ ion hóa.'
      }
    }
  },
  {
    id: 'disc-clubs-5',
    suit: '♣',
    suitName: 'clubs',
    rank: '5',
    cardNumber: 44,
    color: 'black',
    category: 'Terminal Velocity',
    imageUrl: 'https://images.unsplash.com/photo-1541278107931-e006523892df?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Shiny coin falling through high altitude city air',
    isReal: false,
    translations: {
      en: {
        categoryName: 'Aerodynamics',
        title: 'A Penny Dropped from a Skyscraper Kills',
        claim: 'A coin dropped from the top of the Empire State Building will accelerate fast enough to penetrate a human skull or concrete sidewalk.',
        explanation: 'Because a coin is flat, air resistance limits its terminal velocity to only ~40–60 km/h (25–38 mph). It would sting, but cannot crack skull or concrete.'
      },
      vi: {
        categoryName: 'Vận tốc giới hạn',
        title: 'Đồng xu rơi từ nhà chọc trời gây chết người',
        claim: 'Một đồng xu rơi từ đỉnh tòa nhà chọc trời sẽ tăng tốc đủ lớn để xuyên thủng sọ người hoặc làm nứt vỡ vỉa hè bê tông.',
        explanation: 'Vì đồng xu dẹt, sức cản không khí giới hạn vận tốc rơi tối đa của nó chỉ khoảng 40–60 km/h. Nó có thể làm bạn hơi đau nhưng không thể gây chết người.'
      }
    }
  },
  {
    id: 'disc-clubs-6',
    suit: '♣',
    suitName: 'clubs',
    rank: '6',
    cardNumber: 45,
    color: 'black',
    category: 'Genetics',
    imageUrl: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Luminous DNA double helix model render',
    isReal: true,
    translations: {
      en: {
        categoryName: 'DNA Length',
        title: 'Human DNA Stretches to Pluto and Back',
        claim: 'If all DNA strands inside a single human body were uncoiled and linked end-to-end, they would stretch from Earth to Pluto and back.',
        explanation: 'A human has ~37 trillion cells, each packing 2 meters of DNA, totaling over 16 billion kilometers of molecular length.'
      },
      vi: {
        categoryName: 'Độ dài sợi ADN',
        title: 'Sợi ADN vươn tới Sao Diêm Vương',
        claim: 'Nếu kéo dãn và nối liền tất cả sợi ADN trong một cơ thể người, nó sẽ vươn từ Trái Đất tới sao Diêm Vương rồi quay trở lại.',
        explanation: 'Cơ thể bạn có khoảng 37 nghìn tỷ tế bào, mỗi tế bào chứa 2 mét ADN, tổng cộng dài hơn 16 tỷ km — vượt xa khoảng cách tới sao Diêm Vương.'
      }
    }
  },
  {
    id: 'disc-clubs-7',
    suit: '♣',
    suitName: 'clubs',
    rank: '7',
    cardNumber: 46,
    color: 'black',
    category: 'Gastroenterology',
    imageUrl: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Pink chewing bubble gum ball',
    isReal: false,
    translations: {
      en: {
        categoryName: 'Digestion',
        title: 'Swallowed Gum Stays in Stomach for 7 Years',
        claim: 'If you accidentally swallow chewing gum, your stomach acids cannot dissolve it, so it remains stuck in your gut for seven full years.',
        explanation: 'While gum base is indigestible, stomach motility moves it along with normal food waste, naturally passing it through the digestive tract in a few days.'
      },
      vi: {
        categoryName: 'Tiêu hóa học',
        title: 'Nuốt kẹo cao su tồn tại 7 năm trong ruột',
        claim: 'Nếu bạn vô tình nuốt bã kẹo cao su, axit dạ dày không thể phân hủy khiến nó dính chặt trong ruột bạn suốt 7 năm trời.',
        explanation: 'Dù gốc kẹo cao su không tiêu hóa được, các nhu động ruột vẫn đẩy nó di chuyển cùng phân và đào thải ra ngoài tự nhiên chỉ sau vài ngày.'
      }
    }
  },
  {
    id: 'disc-clubs-8',
    suit: '♣',
    suitName: 'clubs',
    rank: '8',
    cardNumber: 47,
    color: 'black',
    category: 'Plasma Physics',
    imageUrl: 'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Blazing electric blue lightning bolt cracking night sky',
    isReal: true,
    translations: {
      en: {
        categoryName: 'Thermal Plasma',
        title: 'Lightning is 5x Hotter than the Sun',
        claim: 'A single strike of lightning heats the surrounding air channel to roughly 30,000 kelvins — five times hotter than the surface of the Sun.',
        explanation: 'The surface of the Sun is ~5,800 K, while the rapid electrical discharge of lightning instantly superheats air into plasma at ~30,000 K.'
      },
      vi: {
        categoryName: 'Nhiệt lượng Plasma',
        title: 'Tia sét nóng gấp 5 lần Mặt Trời',
        claim: 'Một tia sét nổ làm nóng kênh không khí xung quanh lên tới khoảng 30.000 độ Kelvin — nóng gấp 5 lần bề mặt của Mặt Trời.',
        explanation: 'Bề mặt Mặt Trời có nhiệt độ khoảng 5.800 K, trong khi luồng phóng điện tức thời của tia sét nung nóng không khí thành plasma lên tới 30.000 K.'
      }
    }
  },
  {
    id: 'disc-clubs-9',
    suit: '♣',
    suitName: 'clubs',
    rank: '9',
    cardNumber: 48,
    color: 'black',
    category: 'Combinatorics',
    imageUrl: 'https://images.unsplash.com/photo-1541278107931-e006523892df?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Deck of playing cards fanned out on table',
    isReal: true,
    translations: {
      en: {
        categoryName: '52 Cards Math',
        title: 'The Cosmic Uniqueness of 52 Cards',
        claim: 'Every time you thoroughly shuffle a standard deck of 52 cards, the resulting order has almost certainly never existed before in human history.',
        explanation: 'There are 52! (8 × 10^67) possible permutations — vastly more than all the seconds that have elapsed since the Big Bang.'
      },
      vi: {
        categoryName: 'Toán học tổ hợp',
        title: 'Độ độc nhất vô nhị của bộ 52 lá',
        claim: 'Mỗi khi bạn xào kỹ một bộ bài 52 lá, thứ tự kết quả nhận được gần như chắc chắn chưa từng tồn tại trước đó trong lịch sử nhân loại.',
        explanation: 'Có tới 52! (khoảng 8 × 10^67) cách sắp xếp — con số này lớn hơn rất nhiều so với tổng số giây trôi qua từ khi vũ trụ hình thành.'
      }
    }
  },
  {
    id: 'disc-clubs-10',
    suit: '♣',
    suitName: 'clubs',
    rank: '10',
    cardNumber: 49,
    color: 'black',
    category: 'Electromagnetic Heating',
    imageUrl: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Modern kitchen microwave heating food inside',
    isReal: false,
    translations: {
      en: {
        categoryName: 'Microwave Science',
        title: 'Microwaves Cook Food from the Inside Out',
        claim: 'Microwave ovens work by generating high-frequency radiation that penetrates straight to the center, cooking food strictly from the inside out.',
        explanation: 'Microwave radiation only penetrates 2 to 4 cm (1–1.5 inches) into food from the outside. The center heats entirely via thermal conduction.'
      },
      vi: {
        categoryName: 'Sóng vi ba',
        title: 'Lò vi sóng nấu chín từ trong ra ngoài',
        claim: 'Lò vi sóng hoạt động bằng cách phát bức xạ xuyên thẳng vào tâm thức ăn, nấu chín từ trong lõi ra ngoài lớp vỏ.',
        explanation: 'Sóng vi ba chỉ thâm nhập sâu từ 2 đến 4 cm từ bề mặt bên ngoài vào. Phần tâm thức ăn nóng lên hoàn toàn là nhờ truyền nhiệt dẫn nhiệt.'
      }
    }
  },
  {
    id: 'disc-clubs-J',
    suit: '♣',
    suitName: 'clubs',
    rank: 'J',
    cardNumber: 50,
    color: 'black',
    category: 'Relativity',
    imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Tall mountain peak and clock time concept',
    isReal: true,
    translations: {
      en: {
        categoryName: 'Time Dilation',
        title: 'Clocks Run Faster on Mountain Tops',
        claim: 'Due to Einstein’s general relativity, time ticks fractions of a second faster on top of a mountain than at sea level.',
        explanation: 'Gravitational time dilation dictates that clocks in stronger gravitational fields (closer to Earth’s core) tick slower relative to higher altitudes.'
      },
      vi: {
        categoryName: 'Thuyết tương đối',
        title: 'Thời gian trôi nhanh hơn trên đỉnh núi',
        claim: 'Theo thuyết tương đối của Einstein, thời gian trôi nhanh hơn từng phần nhỏ của giây trên đỉnh núi cao so với dưới mực nước biển.',
        explanation: 'Hiệu ứng giãn nở thời gian do hấp dẫn khiến đồng hồ chịu trường trọng lực mạnh hơn (gần tâm Trái Đất hơn) chạy chậm hơn so với trên cao.'
      }
    }
  },
  {
    id: 'disc-clubs-Q',
    suit: '♣',
    suitName: 'clubs',
    rank: 'Q',
    cardNumber: 51,
    color: 'black',
    category: 'Joint Physiology',
    imageUrl: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Human hand flexing fingers and joints',
    isReal: false,
    translations: {
      en: {
        categoryName: 'Knuckle Cracking',
        title: 'Cracking Knuckles Leads to Arthritis',
        claim: 'Habitually cracking the knuckles of your fingers damages articular cartilage and causes painful arthritis later in life.',
        explanation: 'The popping sound is caused by cavitation bubbles bursting in synovial fluid. Rigorous medical studies found no link between knuckle cracking and arthritis.'
      },
      vi: {
        categoryName: 'Sinh lý khớp ngón tay',
        title: 'Bẻ khớp ngón tay gây viêm khớp',
        claim: 'Thói quen bẻ khớp ngón tay răng rắc sẽ làm mòn sụn khớp và gây bệnh thoái hóa viêm khớp khi về già.',
        explanation: 'Tiếng kêu răng rắc là do bọt khí gas trong dịch khớp bị vỡ ra. Các nghiên cứu y học dài hạn chứng minh bẻ ngón tay không hề gây viêm khớp.'
      }
    }
  },
  {
    id: 'disc-clubs-K',
    suit: '♣',
    suitName: 'clubs',
    rank: 'K',
    cardNumber: 52,
    color: 'black',
    category: 'Subatomic Physics',
    imageUrl: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Microscopic crystalline particles floating in black space',
    isReal: true,
    translations: {
      en: {
        categoryName: 'Atomic Emptiness',
        title: 'Humanity Inside a Sugar Cube',
        claim: 'Atoms are over 99.9999999% empty space; if all empty space inside human atoms were removed, humanity would fit in a sugar cube.',
        explanation: 'The atomic nucleus contains 99.9% of mass in an unimaginably tiny volume. Removing the electron cloud void concentrates humanity into a sugar cube weighing 500 million tons.'
      },
      vi: {
        categoryName: 'Khoảng trống nguyên tử',
        title: 'Toàn nhân loại trong một viên đường',
        claim: 'Nguyên tử cấu tạo bởi hơn 99,9999999% là khoảng trống; nếu rút hết khoảng trống này, toàn bộ 8 tỷ người sẽ vừa trong một viên đường.',
        explanation: 'Hạt nhân nguyên tử chiếm 99,9% khối lượng trong một thể tích siêu hiển vi. Nếu loại bỏ khoảng trống của đám mây electron, cả nhân loại sẽ cô đặc thành một viên đường nặng 500 triệu tấn.'
      }
    }
  }
];
