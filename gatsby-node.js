const { getColumns } = require('./api/column')
const { getColumnArticles } = require('./api/column')
const { getSketches } = require('./api/sketch')
const { getOthers } = require('./api/other')

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { data: columns } = await getColumns()
  const { data: sketches } = await getSketches()
  const { data: columnArticles } = await getColumnArticles()
  const { data: others } = await getOthers()

  actions.createPage({
    path: `/`,
    component: require.resolve('./src/templates/home.js'),
    context: {
      columns: columns.data,
      sketches: sketches.data,
    },
  })

  columns.data.forEach((column) => {
    const filteredArticles = columnArticles.data.filter(
      (article) => article.column.slug === column.slug,
    )

    filteredArticles.forEach((article) => {
      actions.createPage({
        path: `/column/${column.slug}/${article.slug}`,
        component: require.resolve('./src/templates/column.js'),
        context: { article, articles: [...filteredArticles] },
      })
    })
  })

  sketches.data.forEach((sketch) => {
    actions.createPage({
      path: `sketch/${sketch.slug}`,
      component: require.resolve('./src/templates/sketch.js'),
      context: { sketch },
    })
  })

  others.data.forEach((each) => {
    actions.createPage({
      path: `${each.slug}`,
      component: require.resolve('./src/templates/other.js'),
      context: { content: each },
    })
  })
}
