<template>
  <!-- Menu -->
  <MenuVue :links="links">~/vedant<span class="prim">pople</span></MenuVue>
  <HeroSection id="hero" pic="header.png">
    <template v-slot:welcome>Welcome!</template>
    My name is <b>Vedant Pople</b> and I'm a
    <hi-word>Software Engineer</hi-word>. My passion is building
    <hi-word>Web applications</hi-word> and
    <hi-word>designing websites</hi-word> using modern frameworks. Currently
    looking for <b>Full time software development</b> opportunitites
    <template v-slot:buttons>
      <simple-button
        class="btn-primary text-white"
        url="https://www.linkedin.com/in/vedantpople/"
        icon="fab linkedin-in"
        >LinkedIn</simple-button
      >
      <simple-button
        class="btn-primary text-white"
        url="https://drive.google.com/file/d/1h7k0OSfX3Pe_NSv9xKfXna1Df2NsHyFf/view?usp=sharing"
        icon="fa-regular fa-file-lines"
        >Resume</simple-button
      >
      <simple-button
        class="btn-outline-secondary"
        url="mailto:vedantpoplegrad@gmail.com"
        icon="fa-regular fa-file-lines"
        >Contact me</simple-button
      >
    </template>
  </HeroSection>
  <SkillsGrid id="skills" :skills="skills" />
  <ExperienceTable id="edu-exp" :experience="experience" />
  <AwardsGrid id="awards" :awards="awards" />
  <ProjectsGrid id="projects" :projects="projects" />
  <FooterVue :links="socials" :copyright="copyright" />
</template>
<script>
import MenuVue from "@/components/shared/AppMenu.vue";
import FooterVue from "@/components/shared/AppFooter.vue";
import HeroSection from "@/components/hero/HeroSection.vue";
import SkillsGrid from "@/components/skills/SkillsGrid.vue";
import ExperienceTable from "@/components/experience/ExperienceTable.vue";
//import AwardsGrid from "@/components/awards/AwardsGrid.vue";
import ProjectsGrid from "@/components/projects/ProjectsGrid.vue";

// data to fill components
import skills from "@/data/skills";
import experience from "@/data/experience";
//import awards from "@/data/awards";
import projects from "@/data/projects";

import SimpleButton from "@/components/reusable/SimpleButton.vue";
import HiWord from "@/components/reusable/HighlightIt.vue";

export default {
  name: "HomeView",
  data: () => {
    return {
      delay: 100,
      links: [
        {
          name: "home",
          url: "#hero",
        },
        {
          name: "skills",
          url: "#skills",
        },
        {
          name: "experience",
          url: "#edu-exp",
        },
        {
          name: "projects",
          url: "#projects",
        },
      ],
      skills,
      experience,
      projects,
      socials: [
        {
          id: 1,
          icon: "fab linkedin-in",
          url: "https://linkedin.com/in/vedantpople/",
        },
        {
          id: 2,
          icon: "fab github",
          url: "https://github.com/vedantpople4",
        },
      ],
      copyright: "2024 Vedant Pople",
    };
  },
  components: {
    MenuVue,
    FooterVue,
    HeroSection,
    SkillsGrid,
    ExperienceTable,
    ProjectsGrid,
    SimpleButton,
    HiWord,
  },
};
</script>
<style lang="scss" scoped>
.prim {
  color: $primary;
}
</style>
