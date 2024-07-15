"use client";
import { HouseIcon } from "@/components/icons/breadcrumb/house-icon"
import { RenderCell } from "@/components/table/render-cell"
import { Button, Chip, Image, Input, Link, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Pagination, Select, SelectItem, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, useDisclosure } from "@nextui-org/react"
import React, { useState } from 'react'
import { faEdit, faRemove, faEye, faPersonRunning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SearchIcon } from "@/components/icons/searchicon";

const PlayersSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);
  const [viewDetail, setViewDetail] = useState(false);
  const players = [
    {
      id: 1,
      img: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
      name: "newest",
      club: "E",
      status: "status",
    },
    {
      id: 2,
      img: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
      name: "newest",
      club: "E",
      status: "status",
    },
    {
      id: 3,
      img: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
      name: "newest",
      club: "E",
      status: "status",
    },
    {
      id: 4,
      img: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
      name: "newest",
      club: "E",
      status: "status",
    },
    {
      id: 5,
      img: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
      name: "newest",
      club: "E",
      status: "status",
    },
    {
      id: 6,
      img: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
      name: "newest",
      club: "E",
      status: "status",
    },
  ];
  return (
    <div className="my-14 lg:px-6 max-w-[95rem] mx-auto w-full flex flex-col gap-4">
      <ul className="flex">
        <li className="flex gap-2">
          <HouseIcon />
          <Link href={"/manage/staff/tshirt"}>
            <span>Home</span>
          </Link>
          <span> / </span>{" "}
        </li>

        <li className="flex gap-2">
          <FontAwesomeIcon
            icon={faPersonRunning}
            className="text-black-500"
          />
          <span>Cầu thủ</span>
          <span> / </span>{" "}
        </li>
        <li className="flex gap-2">
          <span>Danh sách</span>
        </li>
      </ul>

      <h3 className="text-xl font-semibold">Tất cả Cầu thủ</h3>
      <div className="flex justify-between flex-wrap gap-4 items-center">
        <div className="flex items-center gap-3 flex-wrap md:flex-nowrap">
          <Input
            startContent={<SearchIcon />}
            isClearable
            className="w-full"
            classNames={{
              input: "w-full",
              mainWrapper: "w-full",
            }}
            placeholder="Search..."
          />
          <Select
            label="Mùa giải"
            placeholder="Chọn mùa giải"
            className="w-full p-4"
          >
            <SelectItem key={1}>A</SelectItem>
            <SelectItem key={2}>B</SelectItem>
            <SelectItem key={3}>C</SelectItem>
          </Select>
          <Select
            label="CLB"
            placeholder="Chọn CLB"
            className="w-full p-4"
          >
            <SelectItem key={1}>D</SelectItem>
            <SelectItem key={2}>E</SelectItem>
            <SelectItem key={3}>F</SelectItem>
          </Select>
        </div>
        <div className="flex flex-row gap-3.5 flex-wrap">
          <div>
            <Button onClick={() => setIsOpen(true)} color='primary'>Thêm cầu thủ</Button>

            <Modal isOpen={isOpen}
              onClose={() => {
                setIsOpen(false);
                setIsEdit(false);
              }} placement='top-center' size="4xl">
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className='flex flex-col gap-1'>
                      {isEdit ? "Sửa thông tin" : "Thêm cầu thủ"}
                    </ModalHeader>
                    <ModalBody>
                      <div className="flex flex-row">
                        <div className="w-2/5">
                          <Image
                            isBlurred
                            width={240}
                            src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
                            alt="NextUI Album Cover"
                            className="m-5"
                          />
                          <Input
                            type="file"
                            accept="image/*"
                          />
                        </div>
                        <div className="w-3/5">
                          <Input label='Mã cầu thủ' variant='bordered' className="w-full p-2" />
                          <Input label='Tên cầu thủ' variant='bordered' className="w-full p-2" />
                          <Select
                            label="CLB"
                            placeholder="Chọn CLB"
                            className="w-full p-2"
                          >
                            <SelectItem key={1}>D</SelectItem>
                            <SelectItem key={2}>E</SelectItem>
                            <SelectItem key={3}>F</SelectItem>
                          </Select>
                        </div>
                      </div>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="flat" onClick={onClose}>
                        Đóng
                      </Button>
                      <Button color="primary" onPress={onClose}>
                        {isEdit ? "Lưu" : "Thêm"}
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          </div>
        </div>
      </div>
      <div className="max-w-[95rem] mx-auto w-full">
        {/* <TableWrapper /> */}
        <div className=" w-full flex flex-col gap-4">
          <Table aria-label="Users Table">
            <TableHeader>
              <TableColumn className="text-2xl">Mã cầu thủ</TableColumn>
              <TableColumn className="text-2xl">Tên</TableColumn>
              <TableColumn className="text-2xl">Câu lạc bộ</TableColumn>
              <TableColumn className="text-2xl">Trạng thái</TableColumn>
              {/* <TableColumn children={undefined}></TableColumn> */}
            </TableHeader>
            {players.length == 0 ? (
              <TableBody emptyContent={"No data to display."}>
                {[]}
              </TableBody>
            ) : (
              <TableBody>
                {players.map((player, index) => (
                  <TableRow key={index}>
                    <TableCell className="text-2xl">
                      {player.id}
                    </TableCell>
                    <TableCell className="text-2xl">
                      {player.name}
                    </TableCell>
                    <TableCell className="text-2xl">
                      {player.club}
                    </TableCell>
                    <TableCell className="text-2xl">
                      <Chip
                        size="md"
                        variant="flat"
                        color={
                          player.status === "active"
                            ? "success"
                            : player.status === "paused"
                              ? "danger"
                              : "warning"
                        }
                      >
                        {player.status}
                      </Chip>
                    </TableCell>
                    <TableCell>
                      <Button
                        className="w-1/6 text-black"
                        aria-label="detail"
                        onClick={() => setViewDetail(true)}
                      >
                        <FontAwesomeIcon
                          icon={faEye}
                          className="text-white-500"
                        />
                      </Button>
                      <Button
                        className="w-1/6 bg-yellow-500 text-white"
                        aria-label="edit"
                        onClick={() => {
                          setIsEdit(true);
                          setIsOpen(true);
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faEdit}
                          className="text-white-500"
                        />
                      </Button>
                      <Button
                        className="w-1/6 bg-red-500 text-white"
                        aria-label="remove"
                        onClick={() => setIsConfirm(true)}
                      >
                        <FontAwesomeIcon
                          icon={faRemove}
                          className="text-white-500"
                        />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            )}
          </Table>
          <Pagination showControls total={10} initialPage={1} />

          <Modal size="2xl" isOpen={isConfirm} onClose={() => setIsConfirm(false)}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    Xác nhận
                  </ModalHeader>
                  <ModalBody>
                    <div className="w-full flex items-center justify-center">
                      <p className="text-4xl">
                        Xóa cầu thủ này ?
                      </p>
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Không
                    </Button>
                    <Button color="success" onPress={onClose}>
                      Có
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>

          <Modal size="4xl" isOpen={viewDetail} onClose={() => setViewDetail(false)}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    Chi tiết
                  </ModalHeader>
                  <ModalBody>
                    <div className="flex flex-row">
                      <div className="w-2/5 flex justify-center items-start">
                        <Image
                          isBlurred
                          width={240}
                          src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
                          alt="NextUI Album Cover"
                          className="m-5"
                        />
                      </div>
                      <div className="w-3/5">
                        <p className="w-full p-2">Mã cầu thủ</p>
                        <p className="w-full p-2">Tên</p>
                        <p className="w-full p-2">CLB</p>
                        <p className="w-full p-2">Trạng thái</p>
                      </div>
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="success" onPress={onClose}>
                      Đóng
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default PlayersSection;