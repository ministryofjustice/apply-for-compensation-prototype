router.get('/concepts/physical-injuries/autocomplete/advanced/', function (req, res) {
  res.render('concepts/physical-injuries/autocomplete/advanced',
    {
      proceedings: utils.getProceedings()
    })
})
