module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('department', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            dept_name: {
                type: Sequelize.TEXT
            },
            line_manager: {
                type: Sequelize.TEXT
            },
            manager_staff_id: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('department');
    }
};