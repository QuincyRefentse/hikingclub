const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-8 text-center text-muted-foreground">
      <div className="container mx-auto px-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Pretoria Hiking Club. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Crafted with <span className="text-primary">♥</span> for nature lovers.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
