
nix
{ pkgs, ... }: {

  # Which nixpkgs channel to use.
  channel = "stable-23.11"; # or "unstable"

  # Use https://search.nixos.org/packages to find packages
  packages = [
    pkgs.nodejs_18 
  ];

  # Enable previews and customize configuration
  idx.previews = {
    enable = true;
    previews = {
      # Frontend Preview
      frontend = {
        command = [
          "npm"
          "run"
          "--prefix"
          "./frontend"  # Path to your frontend directory
          "dev" 
        ];
        manager = "web";
      };
      # Backend Preview 
      backend = {
        command = [
          "nodemon"  
          "./backend/server.js"  # Path to your backend server file
        ];
        manager = "web";
        expose = {
          port = 3000;
        };
      };
    };
  };
}
