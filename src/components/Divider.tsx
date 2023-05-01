import theme from '@theme';
import styled from '@emotion/styled';

type HrProps = {
  width: string;
  color: string;
};

const Hr = styled('hr')<HrProps>`
  width: ${({ width }) => width};
  height: 1px;
  margin: ${theme.spacing(2, 0)};
  border: 0;
  width: ${({ color }) => color};
  background-color: color;
`;

const Divider = ({ width = '100%', color = theme.palette.grey[300] }: Partial<HrProps>): JSX.Element => (
  <Hr {...{ width, color }} />
);

Divider.displayName = 'Divider';

export default Divider;
