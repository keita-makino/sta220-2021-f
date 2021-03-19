getKmeans <- function(k) {
  client <- GraphqlClient$new(
    url = "https://sta220-2021-f.herokuapp.com/graphql"
  )
  qry <- Query$new()
  qry$query(
    "getEmbeddings",
    "{
                articles {
                id
                abstractEmbedding
                }
            }"
  )

  response <- client$exec(qry$queries$getEmbeddings)
  articles <- fromJSON(response)$data$articles
  embeddingMatrix <- data.frame(do.call("rbind", articles$abstractEmbedding))
  prl <- prcomp(embeddingMatrix, rank = 2)
  vec <- data.frame(
    id = articles$id,
    cat = kmeans(embeddingMatrix, k)$cluster,
    prl$x
  )
  return(list(
    vec = vec,
    prl = as.vector(summary(prl)$importance[2, 1:25])
  ))
}
