import { Button, Card, CardContent, Typography } from "@mui/material";

const Projects = () => {
  const projectData = [
    {
      title: "Aritmatika Solver",
      description:
        "An application designed to help users solve arithmetic problems automatically and efficiently.",
      githubLink: "https://github.com/your-repo-1", // Replace with actual GitHub link
    },
    {
      title: "AutoChat-Discord",
      description:
        "A solution to automate sending messages to Discord channels with scheduled delivery.",
      githubLink: "https://github.com/your-repo-2", // Replace with actual GitHub link
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-8">
      {/* Section Heading */}
      <h1 className="text-4xl font-bold mb-8 text-center animate-fade-in">
        My Projects
      </h1>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="animate-fade-in-up hover:scale-105 transition-transform duration-300"
            style={{ animationDelay: `${index * 0.2}s` }} // Delay animation for each card
          >
            <Card className="bg-gray-800 text-white rounded-lg shadow-lg">
              <CardContent>
                {/* Project Title */}
                <Typography variant="h5" component="div" className="font-bold">
                  {project.title}
                </Typography>

                {/* Project Description */}
                <Typography
                  variant="body2"
                  color="textSecondary"
                  className="text-gray-400 mt-2"
                >
                  {project.description}
                </Typography>

                {/* GitHub Button */}
                <div className="mt-4 flex justify-end">
                  <Button
                    variant="contained"
                    color="primary"
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-indigo-600 hover:bg-indigo-500"
                  >
                    View on GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;