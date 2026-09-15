export interface AreaOfSupport {
  id: string;
  title: string;
  description: string;
}

export interface ApproachItem {
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
}

export interface SpecialtyItem {
  id: string;
  title: string;
  description: string;
}

export const PRACTICE_INFO = {
  name: "Dr. Maya Reynolds, PsyD",
  title: "Licensed Clinical Psychologist",
  location: "Santa Monica, California",
  address: "123th Street 45 W, Santa Monica, CA 90401",
  serviceNote: "Serving adults throughout California via in-person and secure telehealth sessions.",
  sessionFormats: "In-person and secure telehealth sessions available for California clients.",
  emergencyNotice: "Please do not use this form for emergencies or urgent mental health concerns.",
  copyrightYear: 2026,
  disclaimer: "Fictional therapist profile created for demonstration purposes.",
};

export const HOME_CONTENT = {
  hero: {
    eyebrow: "Licensed Clinical Psychologist",
    heading: "Therapy for anxiety, trauma, and the weight of high-achievement.",
    supportingText: "Support for adults who look functional on the outside but feel overwhelmed, exhausted, or stuck on the inside.",
    primaryCta: "Schedule a Consultation",
    secondaryCta: "Learn More",
    trustStatement: "A warm, collaborative approach grounded in evidence-based therapy.",
  },
  intro: {
    heading: "You don't have to keep holding everything together.",
    body: [
      "Many of the people I work with are thoughtful, capable, and high-achieving—but internally they may feel exhausted, anxious, disconnected, or constantly on edge.",
      "Therapy can be a place to slow down, understand what is happening beneath the surface, and develop ways of living that feel more sustainable."
    ],
    cta: "Learn About My Approach",
  },
  supportSummary: {
    heading: "Areas I commonly support",
    cta: "Explore Areas of Support",
    items: [
      {
        id: "anxiety-panic",
        title: "Anxiety & Panic",
        description: "Support for persistent worry, physical tension, panic, and feeling constantly on alert.",
      },
      {
        id: "trauma",
        title: "Trauma",
        description: "Carefully paced therapy for the effects of single-incident and complex trauma.",
      },
      {
        id: "burnout",
        title: "Burnout",
        description: "Support for emotional exhaustion, chronic stress, perfectionism, and high internal pressure.",
      },
      {
        id: "life-transitions",
        title: "Life Transitions",
        description: "Space to process major changes, uncertainty, relationships, and shifts in identity.",
      },
      {
        id: "high-achievement",
        title: "High Achievement & Perfectionism",
        description: "Helping high-achieving adults develop healthier and more sustainable ways of living and working.",
      }
    ] as AreaOfSupport[],
  },
  approachSummary: {
    heading: "Therapy that is collaborative, grounded, and practical.",
    body: [
      "I take a warm, collaborative, and grounded approach to therapy. Sessions are structured enough to feel supportive while still leaving space for reflection and depth.",
      "I integrate evidence-based methods such as cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques depending on the needs of each client."
    ],
    cta: "Explore My Approach",
    items: [
      {
        title: "CBT",
        description: "Practical tools for understanding patterns of thoughts, emotions, and behavior.",
      },
      {
        title: "EMDR",
        description: "A structured approach that may help process distressing experiences and trauma.",
      },
      {
        title: "Mindfulness",
        description: "Practices that support awareness, grounding, and a more regulated response to stress.",
      },
      {
        title: "Body-Oriented Work",
        description: "Attention to the physical experience of stress, anxiety, and emotional activation.",
      }
    ],
  },
  aboutPreview: {
    heading: "A space to feel understood.",
    copy: "I believe therapy works best when clients feel respected, understood, and actively involved in the process. My goal is not simply symptom relief, but helping clients develop insight, resilience, and a stronger relationship with themselves over time.",
    cta: "More About Dr. Reynolds",
  },
  officePreview: {
    heading: "A calm, private space in Santa Monica.",
    copy: [
      "I offer in-person therapy from my Santa Monica office and secure telehealth sessions for clients located in California.",
      "The office is designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment."
    ],
    cta: "View the Office",
  },
  finalCta: {
    heading: "Ready to take the next step?",
    copy: "If you're looking for a therapist who combines practical tools with depth-oriented work, I may be a good fit.",
    button: "Schedule a Consultation",
    secondaryText: "Serving adults throughout California via in-person and secure telehealth sessions.",
  }
};

export const ABOUT_CONTENT = {
  heading: "About Dr. Maya Reynolds, PsyD",
  subheading: "Licensed Clinical Psychologist",
  paragraphs: [
    "I’m a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many of the people I work with are high-achieving, thoughtful, and self-aware—but internally feel exhausted, stuck in overthinking, or emotionally on edge.",
    "My work often focuses on anxiety, panic, trauma, and burnout. Clients frequently come to me feeling “functional” on the outside while quietly struggling with constant worry, tension in their body, difficulty sleeping, or a sense that they’re always bracing for something to go wrong. Others are navigating the impact of earlier life experiences that continue to affect their relationships, confidence, or sense of safety.",
    "I take a warm, collaborative, and grounded approach to therapy. Sessions are structured enough to feel supportive, while still leaving space for reflection and depth. I integrate evidence-based methods such as cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques to help clients understand both the emotional and physiological sides of what they’re experiencing.",
    "Trauma work is an important part of my practice. I work with adults who have experienced single-incident trauma as well as more complex, long-standing patterns that may stem from childhood, relationships, or chronic stress. My approach is paced carefully, with an emphasis on safety, stabilization, and helping clients feel more regulated in their daily lives—not just during sessions.",
    "In addition to trauma and anxiety, I frequently support clients dealing with professional burnout, perfectionism, and high internal pressure. Many are entrepreneurs, creatives, or professionals who feel disconnected from themselves after years of pushing through stress. Therapy can become a space to slow down, reconnect, and develop more sustainable ways of living and working.",
    "I offer both in-person therapy from my Santa Monica office and secure telehealth sessions for clients located in California. My office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment. Clients often share that the space itself helps them feel more at ease when they arrive.",
    "I believe therapy works best when clients feel respected, understood, and actively involved in the process. My goal is not just symptom relief, but helping clients develop insight, resilience, and a stronger relationship with themselves over time.",
    "If you’re looking for a therapist who combines practical tools with depth-oriented work—and who understands the realities of living and working in a fast-paced environment—I may be a good fit."
  ]
};

export const APPROACH_CONTENT = {
  heading: "My Approach",
  intro: "Therapy should feel like a collaborative process—not something being done to you.",
  supportingText: "I take a warm, collaborative, and grounded approach to therapy. Sessions are structured enough to feel supportive while still leaving space for reflection and depth. I combine practical tools with deeper reflection to help clients understand both the emotional and physiological dimensions of their experiences.",
  methods: [
    {
      number: "01",
      title: "Cognitive Behavioral Therapy",
      shortDesc: "Practical tools for understanding patterns of thoughts, emotions, and behavior.",
      fullDesc: "CBT provides practical tools for identifying and shifting habitual thought loops, core beliefs, and behavioral responses. It helps you recognize how interpretations shape your emotional experience and offers concrete strategies to break cycles of rumination, panic, and self-criticism."
    },
    {
      number: "02",
      title: "EMDR",
      shortDesc: "A structured approach that may help process distressing experiences and trauma.",
      fullDesc: "Eye Movement Desensitization and Reprocessing (EMDR) is a structured, evidence-based modality designed to help the brain reprocess unresolved, distressing memories and traumatic events. This allows past experiences to be stored more adaptively without triggering constant emotional or physiological distress."
    },
    {
      number: "03",
      title: "Mindfulness-Based Practices",
      shortDesc: "Practices that support awareness, grounding, and a more regulated response to stress.",
      fullDesc: "Mindfulness cultivates present-moment awareness and non-judgmental observation. By learning to pause and notice internal states without immediate reactivity, clients build greater emotional bandwidth, reduced reactivity to stressors, and a steadier relationship with their inner thoughts."
    },
    {
      number: "04",
      title: "Body-Oriented Techniques",
      shortDesc: "Attention to the physical experience of stress, anxiety, and emotional activation.",
      fullDesc: "Stress and trauma are held deeply within the nervous system and body. Body-oriented somatic techniques invite gentle attention to physical sensations, muscle bracing, and breathing patterns, helping you discharge tension and cultivate genuine physiological safety."
    },
    {
      number: "05",
      title: "Trauma-Informed Care",
      shortDesc: "Carefully paced therapy with an emphasis on safety and stabilization.",
      fullDesc: "All work is paced with an uncompromising focus on safety, consent, and stabilization. Whether addressing single-incident events or complex relational trauma, care is structured so you feel supported and regulated in your everyday life—not just during our sessions."
    }
  ] as ApproachItem[],
  timelineSteps: [
    { step: "Understand", desc: "Clarify your history, current symptoms, and what you need from our work together." },
    { step: "Stabilize", desc: "Build immediate coping resources, emotional grounding, and nervous system regulation." },
    { step: "Explore", desc: "Examine underlying patterns, past experiences, and unresolved emotional triggers." },
    { step: "Practice", desc: "Apply new insights, cognitive tools, and somatic responses in real-life situations." },
    { step: "Integrate", desc: "Consolidate lasting growth, self-compassion, and sustainable ways of living." }
  ],
  timelineNote: "Therapy is an individualized journey. While these phases describe the general rhythm of care, sessions flex organically to meet you where you are."
};

export const SPECIALTIES_CONTENT = {
  heading: "Areas of Support",
  individualizedNote: "Therapy is individualized to each person's needs, history, goals, and circumstances.",
  items: [
    {
      id: "anxiety",
      title: "Anxiety",
      description: "Support for persistent worry, anticipatory anxiety, overthinking, and feeling unable to fully relax even when things are going well."
    },
    {
      id: "panic",
      title: "Panic",
      description: "Care for sudden surges of intense fear, acute physical distress, hyperventilation, and the fear of panic sensations returning."
    },
    {
      id: "trauma",
      title: "Trauma",
      description: "Carefully paced therapy for the effects of single-incident and complex trauma, focused on safety, processing, and long-term stabilization."
    },
    {
      id: "burnout",
      title: "Burnout",
      description: "Support for emotional exhaustion, chronic workplace stress, depleted motivation, and the toll of persistent overfunctioning."
    },
    {
      id: "perfectionism",
      title: "Perfectionism",
      description: "Navigating high internal pressure, fear of mistakes, harsh self-criticism, and the exhausting belief that self-worth depends on performance."
    },
    {
      id: "high-achievement",
      title: "High Achievement",
      description: "Helping high-achieving professionals, entrepreneurs, and creatives develop healthier and more sustainable ways of living and working."
    },
    {
      id: "chronic-stress",
      title: "Chronic Stress",
      description: "Addressing constant nervous system activation, tension in the body, sleep difficulties, and the lingering sense of bracing for what is next."
    },
    {
      id: "life-transitions",
      title: "Life Transitions",
      description: "Space to process major changes, career shifts, relationship evolutions, uncertainty, and adjustments in identity and purpose."
    }
  ] as SpecialtyItem[],
};

export const OFFICE_CONTENT = {
  heading: "A quiet space for meaningful work.",
  subheading: "Santa Monica, California",
  address: "123th Street 45 W, Santa Monica, CA 90401",
  description: "My office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment.",
  features: [
    "In-person sessions",
    "Secure telehealth for California clients",
    "Private environment",
    "Natural light",
    "Comfortable seating"
  ]
};

export const CONTACT_CONTENT = {
  heading: "Let's connect.",
  copy: "If you’re considering therapy and would like to learn more about working together, you’re welcome to get in touch.",
  location: "Santa Monica, California",
  serviceNote: "In-person and secure telehealth sessions available for California clients.",
  emergencyNotice: "Please do not use this form for emergencies or urgent mental health concerns.",
};
