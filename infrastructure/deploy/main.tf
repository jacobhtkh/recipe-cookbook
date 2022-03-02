terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "4.5.0"
    }

  }
}

provider "google-beta" {
  credentials = file("service-account.json")

  project = var.project
  region  = var.region
  zone    = var.zone
}


module "sql" {
  source = "./modules/sql"

  project          = var.project
  region           = var.region
  database_name    = "recipe-cookbook"
  database_version = "POSTGRES_11"
  db_user          = "root"
  db_password      = "password"
  allowed_ips      = ["77.102.32.155"]
}

