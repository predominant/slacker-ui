pkg_name=slacker-ui
pkg_origin=predominant
pkg_version="0.2.0"
pkg_build_deps=(
  core/node
  core/yarn
)
pkg_deps=(
  core/coreutils
  core/nginx
)
pkg_svc_run="nginx -c ${pkg_svc_config_path}/nginx.conf"
pkg_svc_user="root"
pkg_exports=(
  [port]=port
)
pkg_exposes=(port)
pkg_binds_optional=(
  [api]="port"
)

do_build() {
  yarn install
  fix_interpreter "node_modules/.bin/*" core/coreutils bin/env
  npm run-script build
}

do_install() {
  cp -r dist "${pkg_prefix}/"
}
