interface IProjectTech {
    icon: string;
    tech: string;
  }

interface IProjectComponent {
    projectName: string;
    projectLogo: string;
    projectDescription: string;
    projectRole: string;
    projectDate: string;
    projectTech: IProjectTech[];
    projectType?: string;
    projectLink: string;
}

export default IProjectComponent