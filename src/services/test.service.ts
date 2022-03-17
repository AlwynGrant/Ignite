import db from '../../models'

// QueryProductsForDemoTest
export const QueryProductsForDemoTest = async () => {
    return db.Project.findAll({ where: { userId: 1 }});
}
