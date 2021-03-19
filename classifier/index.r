# install.packages("azuremlsdk")
# azuremlsdk::install_azureml(version = "1.24.0")

library(azuremlsdk)

source("./classifier/secret.r")

interactive_auth <- interactive_login_authentication(
    force = TRUE,
    tenant_id = tenantId
)

ws <- load_workspace_from_config()

saveRDS(getKmeans, "getKmeans.rds")

model <- register_model(ws,
    model_path = "getKmeans.rds",
    model_name = "get_kmeans",
    description = "Classify by kmeans"
)

r_env <- r_environment(
  name = "r_env",
  github_packages = list(github_package("ropensci/ghql"))
)
r_env$python$conda_dependencies$add_conda_package("pip==20.1.1")

inference_config <- inference_config(
    entry_script = "api.r",
    source_directory = ".",
    environment = r_env
)

deployment_config <- aci_webservice_deployment_config(
  cpu_cores = 1,
  memory_gb = 1
)

local_deployment_config <- local_webservice_deployment_config()

service <- deploy_model(
    ws,
    "rservice-local",
    list(model),
    inference_config,
    local_deployment_config
)

wait_for_deployment(service, show_output = TRUE)

service_name <- "webservice001"
service <- deploy_model(
    ws,
    service_name,
    list(model),
    inference_config,
    deployment_config
)
wait_for_deployment(service, show_output = TRUE)