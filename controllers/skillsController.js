const getSkills = async (_, res, next) => {
    try {
      const skills = [
        { name: 'React', level: 'Expert', description: 'Building user interfaces with React' },
        { name: 'Node.js', level: 'Expert' },
        { name: 'MongoDB', level: 'Expert' },
        { name: 'aws', level: 'Expert' },
        { name: 'GitHub', level: 'Expert'},
        { name: 'Bootstrap', level: 'Expert'},
        { name: 'JavaScript', level: 'Expert'}
      ];
      res.json(skills);
    } catch (error) {
      next(error);
    }
  };
  
  export { getSkills };