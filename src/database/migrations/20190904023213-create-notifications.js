module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('notifications', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            travel_id: {
                type: Sequelize.INTEGER
            },
            manager_email: {
                type: Sequelize.TEXT
            },
            read_status: {
                type: Sequelize.BOOLEAN
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
        return queryInterface.dropTable('notifications');
    }
};