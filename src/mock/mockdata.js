import kidsActivity from "../../public/images/kidsActivity.jpg"
import elementary from "../../public/images/elementary.jpg"
import middle from "../../public/images/middle.jpg"
import martial from "../../public/images/martial.jpg"
import outdoor from "../../public/images/outdoor.jpg"
import sport from "../../public/images/sports.jpg"
import table from "../../public/images/table.jpg"
import traditional from "../../public/images/traditional.jpg"
import heroImage from "../../public/images/sports.jpg"
import { Facebook, Youtube } from "lucide-react";

export const pageContent = {
  hero: {
    title: "Admission",
    badgePrefix: "OPEN FOR",
    badgeYear: "2025-2026",
    ctaPrimary: "Enroll Now",
  },

  announcement: [
    "Appropriately engage diverse resources for next-generation systems.",
    "Professionally foster extensive paradigms via multidisciplinary systems.",
    "Synergistically deploy maintainable products and frictionless methodologies.",
  ],

  features: [
    {
      title: "Target Stillness",
      desc: "Help kids improve focus, calmness, and attention through guided activities.",
      icon: "🎯",
    },
    {
      title: "Extra Activities",
      desc: "Fun clubs and events that boost creativity and confidence.",
      icon: "✨",
    },
    {
      title: "Complete Tracking",
      desc: "Progress tracking and updates to support every child's learning journey.",
      icon: "📍",
    },
    {
      title: "Individual Bus",
      desc: "Safe and convenient transport support for children when needed.",
      icon: "🚌",
    },
  ],

  courses: [
    {
      title: "Kids Activity Clubs",
      desc: "Creative play, music, art, and group activities for growth.",
      img: kidsActivity,
      imgAlt: "Kids participating in creative activity clubs",
    },
    {
      title: "Elementary School",
      desc: "Strong foundation learning with caring guidance and fun lessons.",
      img: elementary,
      imgAlt: "elementary school"
    },
    {
      title: "Middle (10-10) Years",
      desc: "Skill building, teamwork, and confidence development.",
      img: middle,
      imgAlt: "Kid staring to learn"
    },
    {
      title: "Martial",
      desc: "Discipline, fitness, and balance through beginner-friendly training.",
      img: martial,
      imgAlt: "learn Discipline activity"
    },
  ],

  activities: {
    header: "We Provide the Main Kids Activities",
    descriptions: [
      "Engaging activities that support learning and development.",
      "Safe and enjoyable environment for children to explore.",
      "Balanced programs for creativity, movement, and teamwork.",
      "Friendly teachers and well-structured activity plans.",
      "Fun-based learning to build confidence and good habits.",
    ],
    cards: [
      { title: "Outdoor Games", img: outdoor, imgAlt: "Kids playing outdoor games in a safe playground" },
      { title: "Sport Activities", img: sport, imgAlt: "Physical Activity" },
      { title: "Table/Floor Toys", img: table, imgAlt: "floor Activity" },
      { title: "Traditional Activities", img: traditional, imgAlt: "cultural events" },
    ],
    viewAll: "View All",
  },

  cta: {
    text: "Make your children's life special by enrolling them in our academy",
    button: "Enroll Now",
  },
};

export const galleryContent = {
  categories: ["Baby/Bay", "Activities", "Painting", "Baby sitting","Dancing"],

  photos: {
    "Baby/Bay": [
      { id: 1, alt: "Baby smiling in classroom", aspect: "portrait", imagePath: "/images/gallery/baby-1.jpeg" },
      { id: 2, alt: "Kids playing with toys", aspect: "landscape", imagePath: "/images/gallery/baby-2.jpeg" },
      { id: 3, alt: "Child learning with blocks", aspect: "square", imagePath: "/images/gallery/baby-3.jpeg" },
      { id: 4, alt: "Kids reading picture book", aspect: "landscape", imagePath: "/images/gallery/baby-4.jpeg" },
      
    ],
    "Activities": [
      { id: 6, alt: "Outdoor play session", aspect: "landscape", imagePath: "/images/gallery/activity-1.jpeg" },
      { id: 7, alt: "Group activity in classroom", aspect: "portrait", imagePath: "/images/gallery/activity-2.jpeg" },
      { id: 8, alt: "Kids running game", aspect: "square", imagePath: "/images/gallery/activity-3.jpeg" },
      { id: 9, alt: "Team building activity", aspect: "landscape", imagePath: "/images/gallery/activity-4.jpeg" },
    ],
    "Painting": [
      { id: 10, alt: "Child painting with brush", aspect: "portrait", imagePath: "/images/gallery/painting-1.jpeg" },
      { id: 11, alt: "Art class painting session", aspect: "landscape", imagePath: "/images/gallery/painting-2.jpeg" },
      { id: 12, alt: "Kids showing artwork", aspect: "square", imagePath: "/images/gallery/painting-3.jpeg" },
      { id: 13, alt: "Color mixing activity", aspect: "landscape", imagePath: "/images/gallery/painting-4.jpeg" },
    ],
    "Baby sitting": [
      { id: 14, alt: "Teacher guiding toddler", aspect: "portrait", imagePath: "/images/gallery/babysitting-1.jpeg" },
      { id: 15, alt: "Safe play supervision", aspect: "landscape", imagePath: "/images/gallery/babysitting-2.jpeg" },
      { id: 16, alt: "Care time activity", aspect: "square", imagePath: "/images/gallery/babysitting-3.jpeg" },
      { id: 17, alt: "Kids resting in cozy corner", aspect: "landscape", imagePath: "/images/gallery/babysitting-4.jpeg" },
    ],
    "Dancing": [
      { id: 14, alt: "Teacher guiding toddler", aspect: "portrait", imagePath: "/images/gallery/Dancing1.jpeg" },
      { id: 15, alt: "Safe play supervision", aspect: "landscape", imagePath: "/images/gallery/Dancing2.jpeg" },
      { id: 16, alt: "Care time activity", aspect: "square", imagePath: "/images/gallery/Dancing3.jpeg" },
      { id: 17, alt: "Kids resting in cozy corner", aspect: "landscape", imagePath: "/images/gallery/Dancing4.jpeg" },
    ],
  },

  testimonials: [
    {
      id: 1,
      date: "SATURDAY",
      text: "Blessings & Wishes from Parents Mini Meracal Preschool & Best Child Development Centre We are truly grateful to Mini Meracal Preschool for providing a safe, loving, and joyful place for our children to learn and grow.May God bless the teachers and staff who care for our children with patience, kindness, and dedication every day.Thank you for building a strong foundation for our children’s future through love, guidance, and quality early education.We wish Mini Meracal Preschool continued success in shaping confident, happy, and curious little learners. ✨ “As parents, we feel proud and at peace knowing our children are nurtured, respected, and encouraged here.",
      author: "John Corda",
      role: "Parent",
    },
    {
      id: 2,
      date: "SATURDAY",
      text: "Very clean environment and well-organized activities. My child enjoys going every day.",
      author: "Nimali Perera",
      role: "Parent",
    },
    {
      id: 3,
      date: "SATURDAY",
      text: "Great balance of learning and fun. I love the progress updates and friendly staff.",
      author: "Arun Kumar",
      role: "Parent",
    },
  ],

  statistics: {
    parentsCount: 66,
  },

  testimonials: [
    {
      id: 1,
      text: "Blessings & Wishes from Parents Mini Meracal Preschool & Best Child Development Centre We are truly grateful to Mini Meracal Preschool for providing a safe, loving, and joyful place for our children to learn and grow.May God bless the teachers and staff who care for our children with patience, kindness, and dedication every day.Thank you for building a strong foundation for our children’s future through love, guidance, and quality early education.We wish Mini Meracal Preschool continued success in shaping confident, happy, and curious little learners. ✨ “As parents, we feel proud and at peace knowing our children are nurtured, respected, and encouraged here.",
      author: "Mr&Mrs.Nishanth",
      role: "Parent",
    },
    {
      id: 2,
      text: "As the guardian of N.J. Aadvik Jeshurun, I am truly grateful to Mini Miracles for the exceptional care and guidance they provide. This preschool is genuinely child-centred, always focusing on the individual skills, strengths, and needs of each child. I have seen Aadvik grow confidently in his learning, social skills, and healthy habits. The teachers also emphasise good nutrition and encourage healthy food practices, which I deeply appreciate.Mini Miracles creates a vibrant learning environment by conducting exhibitions, a variety of cultural programmes, and even religious activities that help children understand and respect diversity. One of the things I admire most is that they celebrate every child’s birthday with love and without any partiality, making each child feel valued and special.I am truly thankful for the dedication and kindness shown by the entire team at Mini Miracles. It is reassuring to know that my child is in a safe, nurturing, and inspiring place every single day..",
      author: "N.J.Priyanga Angel.",
      role: "Diploma in English (Peradeniya NCoE) B.Ed in English.Government teacher.(Guardian of N.J. Aadvik Jeshurun)",
    },
    {
      id:3,
      text:"🌼 பெற்றோரின் ஆசீர்வாதமும் வாழ்த்துகளும் Mini Meracal Preschool & Best Child Development Centre💖 “எங்கள் குழந்தைகளுக்கு அன்பும் பாதுகாப்பும் நிறைந்த சிறந்த கல்வி சூழலை வழங்கும் Mini Meracal Preschool-க்கு எங்கள் மனமார்ந்த நன்றி.”🙏 “எங்கள் குழந்தைகளை பொறுமையுடனும் அன்புடனும் கவனிக்கும் ஆசிரியர்கள் மற்றும் பணியாளர்கள் அனைவரும் இறைவனால் ஆசீர்வதிக்கப்பட வாழ்த்துகிறோம்.”🌱 “எங்கள் குழந்தைகளின் எதிர்காலத்திற்கு வலுவான அடித்தளத்தை அமைத்து தரும் Mini Meracal Preschool-க்கு எங்கள் வாழ்த்துகளும் நன்றியும்.”🌈 “மகிழ்ச்சியும் தன்னம்பிக்கையும் கொண்ட சிறந்த குழந்தைகளை உருவாக்கும் இந்த பள்ளி தொடர்ந்து வெற்றியடைய வாழ்த்துகிறோம் ”✨ “பெற்றோராகிய எங்களுக்கு மனநிம்மதியையும் பெருமையையும் அளிக்கும் இந்த பள்ளிக்கு எங்கள் இதயப்பூர்வமான வாழ்த்துகள்.”",
      
    },
    {
      id:4,
      text:"Mini Meracal Preschool & Best Child Development Centre தொடர்ந்து வளர்ச்சி, ஞானம், மற்றும் அன்புடன் பல தலைமுறைகளுக்கு வழிகாட்ட இறைவன் அருள்புரிவாராக."
    }
  ],

  statistics: {
    parentsCount: 66,
  },
};

export const aboutContent = {
  header: {
    title: "About us",
    subtitle: "Birds play form studied",
    heroImage: heroImage,
    watermarkText: "BABY",
  },

  contactInfo: {
    title: "Get In Touch",
    image: "/images/contact-girl.png",
    items: [
      { id: 1, type: "phone", text: "144 0055 9175" },
      { id: 2, type: "email", text: "drenomil@demo.com" },
      { id: 3, type: "address", text: "16 Glazelord Street Glasgow" },
      { id: 4, type: "address", text: "G1 UU, New York, USA" },
    ],
  },

  serviceAreas: {
    primary: {
      title: "Way in use",
      locations: [
        "Hastings-On-Hudson",
        "Eastchester",
        "Tuckahoe",
        "Brotwylle",
        "Minnaroneck",
        "Larchmont",
        "Mt Vernon",
        "New Rochelle",
      ],
    },
    secondary: {
      title: "Road and Road",
      columns: [
        { locations: ["Westwood", "Paramus", "River Edge", "Tenafly"] },
        { locations: ["Alpine", "Yonkers", "Roxville", "Harrison", "Memaroneck", "Larchmont"] },
      ],
    },
  },

  cta: {
    text: "Ask About Kids Acts",
    image: "/images/cta-kids.png",
    formPlaceholders: ["Your Name", "Your Address", "Phone Number", "Emailing", "Message"],
  },
};

export const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://web.facebook.com/groups/1069615483659040/?ref=share_group_link&rdid=nJFVYqOJdSESasR0&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2Fg%2F1AEsWbv7Ef%2F%3F_rdc%3D1%26_rdr#",
  },
  {
    name: "YouTube",
    icon: Youtube,
    url: "https://www.youtube.com/@nishaanthenadarajah8103",
  },
];

import About from "../../public/images/About.jpg"
import principal from "../../public/images/staff/principal.png" 
import schoolLife1 from "../../public/images/schoolLife1.jpg"
import schoolLife2 from "../../public/images/schoolLife2.jpg"
import schoolLife3 from "../../public/images/schoolLife3.jpg"
import schoolLife4 from "../../public/images/schoolLife4.jpg"
import map from "../../public/images/map.jpg"

export const aboutPage = {
  hero: {
    title: "About Us",
    tagline: "Where little learners grow with joy, confidence, and care.",
    visionTitle: "Vision",
    visionText:
      "Let us become the wings of childhood, nurturing talent, creativity, and values. Developing self-discipline, and creating a successful school year and bright future. Let's lead the society to victory...",
    missionTitle: "Mission",
    missionText:
      "The roots of childhood are the ladder to future with character creation. Develop motivation, promote talent, realize the need for education, and elevate sports. Let's find a way of life and conquer the future.",
    stats: [
      { label: "Happy Students", value: 200, suffix: "+" },
      { label: "Programs", value: 25, suffix: "+" },
      { label: "Teachers", value: 60, suffix: "+" },
    ],
    heroImage: About,
  },

  director: {
    title: "Principal's Message",
    name: "Nishaanthe Nadarajah",
    role: "Principal / Director/ head teacher",
    message:
      "Every child deserves a safe, respectful, and happy childhood.Learning begins with love, care, and curiosity.We grow together—children, parents, and educators.",
    image: principal,
  },

  programs: {
    title: "Programs & Activities",
    subtitle:
      "A balanced experience that builds academic strength, creativity, and social skills.",
    items: [
      {
        title: "Academics",
        desc: "Strong foundation in reading, writing, and numeracy through fun learning.",
        icon: "book",
      },
      {
        title: "Arts & Creativity",
        desc: "Drawing, music, craft, drama, and projects that spark imagination.",
        icon: "palette",
      },
      {
        title: "Sports & Movement",
        desc: "Games, basic athletics, and movement activities to build health and teamwork.",
        icon: "trophy",
      },
      {
        title: "Extracurricular Clubs",
        desc: "Dance, martial arts, language clubs, and confidence-building activities.",
        icon: "sparkles",
      },
      {
        title: "Values & Character",
        desc: "Kindness, respect, discipline, and responsibility in everyday school life.",
        icon: "heart",
      },
      {
        title: "Tech & Discovery",
        desc: "Age-friendly technology, puzzles, and STEM play for curious minds.",
        icon: "monitor",
      },
    ],
  },

  photos: {
    title: "School Life Moments",
    subtitle: "A glimpse of joyful learning and playful discovery.",
    images: [
      schoolLife1,
      schoolLife2,
      schoolLife3,
      schoolLife4,
    ],
  },

  community: {
    title: "Community & Parent Involvement",
    subtitle:
      "We grow together. Parents are part of our school journey through events and engagement.",
    points: [
      "PTA meetings and feedback sessions",
      "Volunteering for school events and trips",
      "Parent workshops and child development talks",
      "Annual concerts, sports meets, and celebration days",
    ],
    ctaText: "Join Our Parent Community",
  },

  contact: {
    title: "Contact Information",
    phone: "+94 (76) 15 10 070 ",
    email: "nishaanthenadarajah@gmail.com",
    addressLine1: "No: 20 Pansala Road. Hatton, Sri Lanka",
   
    mapImage: map,
  },
};

// Staff Section - use direct paths from public folder
import staff from "../../public/images/staff.jpg"

export const staffPage = {
  hero: {
    title: "Our Staff",
    subtitle:
      "Meet our caring team of educators and mentors who guide children with love, learning, and confidence.",
    bannerImage: staff,
    stats: [
      { label: "Teachers", value: 60, suffix: "+" },
      { label: "Experience", value: 12, suffix: "+ years" },
      { label: "Happy Students", value: 1000, suffix: "+" },
    ],
  },

  categories: ["All", "Teachers", "Support Staff"],

  staff: [
    {
      id: 1,
      name: "Mrs.Nishaanthe Nadarajah ",
      role: "Founder and head teacher",
      category: "Teachers",
      image: "/images/staff/principal.png", // Direct path from public folder
      bio:
        "Dip In Early Childhood Education NVQ4",
      highlights: ["Leadership", "Student wellbeing", "Parent communication"],
      contact: { email: "principal@demo.com", phone: "144 0055 9175" },
    },
    {
      id: 2,
      name: "Mrs.Nishanthakumary.k",
      role: " Assistant Teacher",
      category: "Teachers",
      image: "/images/staff/vice-principal.png", // Direct path from public folder
      bio:
        "Dip In Early Childhood Education NVQ4",
      highlights: ["Academic planning", "Teacher support", "Discipline & values"],
      contact: { email: "kevin@demo.com", phone: "144 1111 2222" },
    },
    {
      id: 3,
      name: "Mrs.P.Rubika",
      role: "Assistant Teacher",
      category: "Teachers",
      image: "/images/staff/teacher1.png", // Direct path from public folder
      bio:
        "Dip In Early Childhood Education NVQ4",
      highlights: ["Early literacy", "Creative learning", "Classroom care"],
      contact: { email: "nisha@demo.com", phone: "144 2222 3333" },
    },
    {
      id: 4,
      name: "Miss.Madushi Hanshika",
      role: "Trainee Teacher",
      category: "Teachers",
      image: "/images/staff/teacher2.png", // Direct path from public folder
      bio:
        "Builds teamwork and confidence through fun games and basic athletics.",
      highlights: ["Teamwork", "Motor skills", "Healthy habits"],
      contact: { email: "arjun@demo.com", phone: "144 3333 4444" },
    },
    {
      id: 5,
      name: "Miss R.Sannika",
      role: "Assistant Teacher",
      category: "Teachers",
      image: "/images/staff/teacher3.png", // Direct path from public folder
      bio:
        "Encourages imagination through drawing, craft, music, and performance.",
      highlights: ["Arts & craft", "Music", "Creative thinking"],
      contact: { email: "maya@demo.com", phone: "144 4444 5555" },
    },
    
  ],
};