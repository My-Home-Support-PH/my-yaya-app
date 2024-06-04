import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function TestForm() {
  return (
    <Card className='w-full max-w-2xl'>
      <CardHeader>
        <CardTitle>User Verification</CardTitle>
        <CardDescription>
          Please fill out the form to verify your identity.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className='grid gap-6'>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <div className='space-y-2'>
              <Label htmlFor='firstName'>First Name</Label>
              <Input id='firstName' placeholder='Enter your first name' />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='lastName'>Last Name</Label>
              <Input id='lastName' placeholder='Enter your last name' />
            </div>
          </div>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <div className='space-y-2'>
              <Label htmlFor='gender'>Gender</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder='Select gender' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='male'>Male</SelectItem>
                  <SelectItem value='female'>Female</SelectItem>
                  <SelectItem value='other'>Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className='space-y-2'>
              <Label htmlFor='birthDate'>Birth Date</Label>
              <Input id='birthDate' type='date' />
            </div>
          </div>
          <div className='space-y-2'>
            <Label htmlFor='contactNumber'>Contact Number</Label>
            <Input id='contactNumber' placeholder='Enter your contact number' />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='address'>Address</Label>
            <Input id='address' placeholder='Enter your address' />
          </div>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <div className='space-y-2'>
              <Label htmlFor='region'>Region</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder='Select region' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='region1'>Region 1</SelectItem>
                  <SelectItem value='region2'>Region 2</SelectItem>
                  <SelectItem value='region3'>Region 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className='space-y-2'>
              <Label htmlFor='city'>City</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder='Select city' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='city1'>City 1</SelectItem>
                  <SelectItem value='city2'>City 2</SelectItem>
                  <SelectItem value='city3'>City 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <div className='space-y-2'>
              <Label htmlFor='barangay'>Barangay</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder='Select barangay' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='barangay1'>Barangay 1</SelectItem>
                  <SelectItem value='barangay2'>Barangay 2</SelectItem>
                  <SelectItem value='barangay3'>Barangay 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className='space-y-2'>
              <Label htmlFor='zipCode'>Zip Code</Label>
              <Input id='zipCode' placeholder='Enter your zip code' />
            </div>
          </div>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <div className='space-y-2'>
              <Label htmlFor='idType'>ID Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder='Select ID type' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='driverLicense'>
                    Driver's License
                  </SelectItem>
                  <SelectItem value='passport'>Passport</SelectItem>
                  <SelectItem value='nationalID'>National ID</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className='space-y-2'>
              <Label htmlFor='idUpload'>Upload ID</Label>
              <Input id='idUpload' type='file' />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button type='submit' className='ml-auto'>
          Verify
        </Button>
      </CardFooter>
    </Card>
  );
}
