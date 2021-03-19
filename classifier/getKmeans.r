getKmeans <- function(k) {
  client <- GraphqlClient$new(
    url = "http://127.0.0.1:4000/graphql"
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
