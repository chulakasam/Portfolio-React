const Skills = () => {
    const skills = [
        { name: 'HTML5', icon: 'icons8-html-64.png' },
        { name: 'CSS3', icon: 'icons8-css-48.png' },
        { name: 'JavaScript (ES6+)', icon: 'icons8-java-48.png' },
        { name: 'React', icon: 'icons8-react-80.png' },
        { name: 'Node.js', icon: 'icons8-nodejs-48.png' },
        { name: 'Git', icon: 'icons8-git-64.png' },
        { name: 'Spring Boot', icon: 'icons8-spring-boot-48.png' },
        { name: 'TypeScript', icon: 'icons8-typescript-48.png' },
        { name: 'MongoDB', icon: 'icons8-mongodb-a-cross-platform-document-oriented-database-program-24.png' },
        { name: 'MySQL', icon: 'icons8-mysql-48.png' },
        { name: 'Python', icon: 'icons8-python-48.png' },
        { name: 'React Native', icon: 'icons8-react-native-64.png' },
    ];

    return (
        <section id="skills" className="skills py-24 bg-gradient-to-r from-teal-800 to-teal-900">
            <div className="container mx-auto px-6 text-center">
                <div className="main-text mb-12">
                    <span className="text-teal-500 text-lg font-semibold">Technical Skills</span>
                    <h2 className="text-4xl font-bold mt-2 text-teal-100">My Technical Skills</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-card bg-teal-700 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow transform hover:scale-105">
                            <div className="flex items-center space-x-4 mb-4">
                                <img src={skill.icon} alt={skill.name} className="w-12 h-12 transition-transform transform hover:scale-110" />
                                <p className="text-teal-100 text-xl font-semibold transition-transform transform hover:scale-110">{skill.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
