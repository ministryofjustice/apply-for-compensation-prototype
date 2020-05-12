router.get('/concepts/physical-injuries/autocomplete/select-injuries', function (req, res) {
  res.render('concepts/physical-injuries/autocomplete/select-injuries',
    {
      proceedings: utils.getProceedings()
    })
})
