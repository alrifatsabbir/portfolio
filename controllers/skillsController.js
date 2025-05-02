const getSkills = async (_, res, next) => {
    try {
      const skills = [
        { name: 'React', level: 'Expert', description: 'Building user interfaces with React' },
        { name: 'Node.js', level: 'Expert' },
        { name: 'MongoDB', level: 'Expert' },
        { name: 'Express.js', level: 'Expert' },
        { name: 'Tailwind CSS', level: 'Intermediate' },
        { name: 'Daisy UI', level: 'Intermediate' }
      ];
      res.json(skills);
    } catch (error) {
      next(error);
    }
  };
  
  export { getSkills };