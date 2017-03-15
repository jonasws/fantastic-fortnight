# Presentasjon: Webpack 2
Her finnes slidesene til en presentasjon om Webpack 2.

Presentasjonen er deployet og kan sees <a id="deployments-link" href>på Surge</a>.


<script>
 // Set the link to the most recent deployemnt to Surge
fetch('./deployments.txt').then(r => r.ok ? r.text() : Promise.reject('Could not fetch list of deployments!')).then(t => {
  const link = t.split('\n')[0]
  document.getElementById('deployments-link').setAttribute('href', link)
 })
</script>
