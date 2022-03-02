output "ci_cd_service_account_keys" {
  value     = module.ci_cd_service_account.keys
  sensitive = true
}

output "ci_cd_service_accounts" {
  value = module.ci_cd_service_account.service_accounts
}