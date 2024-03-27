import "./Header.scss";

import Filter from "../Filter/Filter";
type HeaderProps = {
  nameFilter: string;
  handleNameFilterChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  roleFilter: string;
  handleRoleFilterChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};
const Header = ({
  nameFilter,
  handleNameFilterChange,
  roleFilter,
  handleRoleFilterChange,
}: HeaderProps) => {
  return (
    <header>
      <h1>Ticket Tracker</h1>
      <Filter
        nameFilter={nameFilter}
        handleNameFilterChange={handleNameFilterChange}
        roleFilter={roleFilter}
        handleRoleFilterChange={handleRoleFilterChange}
      />
    </header>
  );
};

export default Header;
