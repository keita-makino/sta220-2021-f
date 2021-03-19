
library(jsonlite)
library(ghql)
library(stats)

init <- function() {
    model_path <- Sys.getenv("AZUREML_MODEL_DIR")
    getKmeans <- readRDS(file.path(model_path, "getKmeans.rds"))

    function(data) {
        params <- as.data.frame(fromJSON(data))
        pc <- getKmeans(params[1, 1])
        toJSON(pc)
    }
}